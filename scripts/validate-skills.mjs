import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const skillsRoot = path.join(root, "skills");
const requiredSections = ["## When to use", "## Workflow", "## Quality gates"];
const errors = [];
const names = new Set();

async function exists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

function fail(message) {
  errors.push(message);
}

async function main() {
  if (!(await exists(skillsRoot))) {
    console.error("Missing skills/ directory.");
    process.exitCode = 1;
    return;
  }

  const entries = await readdir(skillsRoot, { withFileTypes: true });
  const directories = entries.filter((entry) => entry.isDirectory());
  if (directories.length === 0) fail("No skill directories found in skills/.");

  for (const entry of directories) {
    const skillName = entry.name;
    const skillFile = path.join(skillsRoot, skillName, "SKILL.md");
    if (!(await exists(skillFile))) {
      fail(skillName + ": missing SKILL.md.");
      continue;
    }

    const content = await readFile(skillFile, "utf8");
    if (!content.startsWith("---\n") || !content.includes("\n---\n")) {
      fail(skillName + ": missing YAML-style front matter.");
    }

    const nameMatch = content.match(/^name:\s*([a-z0-9-]+)\s*$/m);
    const descriptionMatch = content.match(/^description:\s*(.+)$/m);
    if (!nameMatch) {
      fail(skillName + ": front matter needs a lowercase hyphenated name.");
    } else {
      const declaredName = nameMatch[1];
      if (declaredName !== skillName) fail(skillName + ": folder and declared name differ.");
      if (names.has(declaredName)) fail(skillName + ": duplicate skill name " + declaredName + ".");
      names.add(declaredName);
    }

    if (!descriptionMatch || descriptionMatch[1].trim().length < 30) {
      fail(skillName + ": description must explain the skill purpose in at least 30 characters.");
    }
    for (const section of requiredSections) {
      if (!content.includes(section)) fail(skillName + ": missing required section " + section + ".");
    }
    if (content.trim().length < 800) fail(skillName + ": SKILL.md is too short to provide a usable workflow.");
  }

  const tokensPath = path.join(root, "examples", "design-tokens.json");
  try {
    JSON.parse(await readFile(tokensPath, "utf8"));
  } catch (error) {
    fail("examples/design-tokens.json is missing or invalid JSON: " + error.message);
  }

  if (errors.length > 0) {
    console.error("MAX-DESIGN validation failed:");
    for (const error of errors) console.error(" - " + error);
    process.exitCode = 1;
    return;
  }
  console.log("MAX-DESIGN validation passed: " + directories.length + " skills checked.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
