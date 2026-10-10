import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const skillsRoot = path.join(root, "skills");
const requiredSections = ["## When to use", "## Workflow", "## Quality gates"];
const requiredReferenceFiles = [
  "docs/decision-framework.md",
  "docs/quality-matrix.md",
  "docs/research-and-source-map.md",
  "examples/design-brief.md",
];
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

function resolvePath(value, object) {
  return value.split(".").reduce((current, segment) => {
    if (current === null || typeof current !== "object" || !(segment in current)) return undefined;
    return current[segment];
  }, object);
}

function findAliases(value, prefix = [], output = []) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    for (const [key, child] of Object.entries(value)) findAliases(child, [...prefix, key], output);
  } else if (typeof value === "string") {
    const match = value.match(/^\{([^{}]+)\}$/);
    if (match) output.push({ path: prefix.join("."), target: match[1] });
  }
  return output;
}

async function main() {
  if (!(await exists(skillsRoot))) {
    fail("Missing skills/ directory.");
  } else {
    const entries = await readdir(skillsRoot, { withFileTypes: true });
    const directories = entries.filter((entry) => entry.isDirectory()).sort((a, b) => a.name.localeCompare(b.name));
    if (directories.length === 0) fail("No skill directories found in skills/.");

    let readme = "";
    try {
      readme = await readFile(path.join(root, "README.md"), "utf8");
    } catch {
      fail("README.md is missing or unreadable.");
    }

    for (const referenceFile of requiredReferenceFiles) {
      if (!(await exists(path.join(root, referenceFile)))) {
        fail("Missing required reference file: " + referenceFile + ".");
      }
    }

    for (const entry of directories) {
      const skillName = entry.name;
      const skillFile = path.join(skillsRoot, skillName, "SKILL.md");
      if (!(await exists(skillFile))) {
        fail(skillName + ": missing SKILL.md.");
        continue;
      }

      const content = await readFile(skillFile, "utf8");
      const frontMatterEnd = content.indexOf("\n---\n", 4);
      if (!content.startsWith("---\n") || frontMatterEnd === -1) {
        fail(skillName + ": missing closed YAML-style front matter.");
        continue;
      }

      const frontMatter = content.slice(4, frontMatterEnd);
      const nameMatch = frontMatter.match(/^name:\s*([a-z0-9-]+)\s*$/m);
      const descriptionMatch = frontMatter.match(/^description:\s*(.+)$/m);

      if (!nameMatch) {
        fail(skillName + ": front matter needs a lowercase hyphenated name.");
      } else {
        const declaredName = nameMatch[1];
        if (declaredName !== skillName) fail(skillName + ": folder and declared name differ.");
        if (names.has(declaredName)) fail(skillName + ": duplicate skill name " + declaredName + ".");
        names.add(declaredName);
        if (readme && !readme.includes("| **" + declaredName + "** |")) {
          fail(skillName + ": README skill catalog is missing this skill.");
        }
      }

      if (!descriptionMatch || descriptionMatch[1].trim().length < 30) {
        fail(skillName + ": description must explain the skill purpose in at least 30 characters.");
      } else if (descriptionMatch[1].trim().length > 240) {
        fail(skillName + ": description should be concise (240 characters or fewer).");
      }

      let lastSectionIndex = -1;
      for (const section of requiredSections) {
        const sectionIndex = content.indexOf(section, frontMatterEnd);
        if (sectionIndex === -1) {
          fail(skillName + ": missing required section " + section + ".");
        } else if (sectionIndex <= lastSectionIndex) {
          fail(skillName + ": required sections must appear in the order When to use, Workflow, Quality gates.");
        } else {
          lastSectionIndex = sectionIndex;
        }
      }

      if (content.trim().length < 800) fail(skillName + ": SKILL.md is too short to provide a usable workflow.");
    }
  }

  const tokensPath = path.join(root, "examples", "design-tokens.json");
  try {
    const tokens = JSON.parse(await readFile(tokensPath, "utf8"));
    if (!tokens.color || typeof tokens.color !== "object") {
      fail("Design tokens: missing color object.");
    } else {
      const primitives = tokens.color.primitive;
      const semantics = tokens.color.semantic;
      if (!primitives || typeof primitives !== "object") fail("Design tokens: missing color.primitive.");
      if (!semantics || typeof semantics !== "object") fail("Design tokens: missing color.semantic.");

      for (const role of ["text-primary", "surface-page", "action-primary", "focus-ring"]) {
        if (!semantics || !(role in semantics)) fail("Design tokens: required semantic role is missing: " + role + ".");
      }

      if (primitives && typeof primitives === "object") {
        for (const [name, value] of Object.entries(primitives)) {
          if (typeof value !== "string" || !/^#[0-9a-fA-F]{6}$/.test(value)) {
            fail("Design tokens: primitive color " + name + " must be a six-digit hex value.");
          }
        }
      }

      for (const alias of findAliases(tokens)) {
        if (resolvePath(alias.target, tokens) === undefined) {
          fail("Design tokens: alias " + alias.path + " references missing path " + alias.target + ".");
        }
      }
    }
  } catch (error) {
    fail("examples/design-tokens.json is missing or invalid JSON: " + error.message);
  }

  if (errors.length > 0) {
    console.error("MAX-DESIGN validation failed:");
    for (const error of errors) console.error(" - " + error);
    process.exitCode = 1;
    return;
  }

  console.log("MAX-DESIGN validation passed: " + names.size + " skills checked, references present, token aliases resolved.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
