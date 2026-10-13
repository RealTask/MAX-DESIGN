import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const skillsRoot = path.join(root, "skills");
const requiredSections = ["## When to use", "## Workflow", "## Quality gates"];
const requiredReferenceFiles = [
  "docs/decision-framework.md",
  "docs/quality-matrix.md",
  "docs/knowledge-catalog.md",
  "docs/knowledge-sources.md",
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
  // The repository root must be one installable skill. Without this entrypoint,
  // the Skills CLI discovers the specialist playbooks as separate skills.
  try {
    const rootSkill = await readFile(path.join(root, "SKILL.md"), "utf8");
    const frontMatterEnd = rootSkill.indexOf("\n---\n", 4);
    if (!rootSkill.startsWith("---\n") || frontMatterEnd === -1) {
      fail("Root SKILL.md is missing valid YAML-style front matter.");
    } else {
      const frontMatter = rootSkill.slice(4, frontMatterEnd);
      if (!/^name:\s*max-design\s*$/m.test(frontMatter)) {
        fail("Root SKILL.md must declare name: max-design.");
      }
      if (!/^description:\s*.+$/m.test(frontMatter)) {
        fail("Root SKILL.md must include a description.");
      }
    }
  } catch {
    fail("Root SKILL.md is missing; the repository may install as multiple separate skills.");
  }

  for (const bundledPath of [
    "docs/decision-framework.md",
    "docs/quality-matrix.md",
    "docs/knowledge-catalog.md",
    "examples/design-brief.md",
    "knowledge/design-patterns.json",
    "knowledge/advanced-patterns.json",
    "docs/knowledge-sources.md",
    "scripts/search-design-knowledge.mjs",
    "skills/frontend-design/SKILL.md",
  ]) {
    if (!(await exists(path.join(root, bundledPath)))) {
      fail("Missing bundled MAX-DESIGN resource: " + bundledPath + ".");
    }
  }

  try {
    const manifest = JSON.parse(await readFile(path.join(root, "skill.json"), "utf8"));
    if (manifest.name !== "max-design") fail("skill.json must declare name: max-design.");
    if (!Array.isArray(manifest.skills) || manifest.skills.length !== 1) {
      fail("skill.json must declare exactly one installable skill.");
    } else {
      const skill = manifest.skills[0];
      if (skill.name !== "max-design" || ![".", "./"].includes(skill.path) || skill.entrypoint !== "SKILL.md") {
        fail("skill.json must point its sole max-design entry to the root SKILL.md.");
      }
    }
  } catch (error) {
    fail("skill.json is missing or invalid JSON: " + error.message);
  }

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


  const knowledgePath = path.join(root, "knowledge", "design-patterns.json");
  const advancedKnowledgePath = path.join(root, "knowledge", "advanced-patterns.json");
  let baseCatalog = null;
  let advancedCatalog = null;
  let catalog = null;

  try {
    baseCatalog = JSON.parse(await readFile(knowledgePath, "utf8"));
  } catch (error) {
    fail("knowledge/design-patterns.json is missing or invalid JSON: " + error.message);
  }

  try {
    advancedCatalog = JSON.parse(await readFile(advancedKnowledgePath, "utf8"));
  } catch (error) {
    fail("knowledge/advanced-patterns.json is missing or invalid JSON: " + error.message);
  }

  const collections = [
    ["directions", 6],
    ["pagePatterns", 6],
    ["interactionPatterns", 5],
    ["densityProfiles", 3],
    ["productProfiles", 11],
    ["styleDirections", 8],
    ["colorStrategies", 6],
    ["typographySystems", 6],
    ["motionRecipes", 8],
    ["uxGuidelines", 15],
    ["chartPatterns", 7],
    ["stackGuides", 8],
  ];

  if (advancedCatalog) {
    if (advancedCatalog.schemaVersion !== "1.0.0") {
      fail("Advanced design knowledge must declare schemaVersion: 1.0.0.");
    }
    if (typeof advancedCatalog.title !== "string" || !Array.isArray(advancedCatalog.researchBasis)
      || advancedCatalog.researchBasis.length === 0) {
      fail("Advanced design knowledge needs a title and non-empty researchBasis.");
    }

    let addedRecordCount = 0;
    for (const [collectionName] of collections) {
      const records = advancedCatalog[collectionName] ?? [];
      if (!Array.isArray(records)) {
        fail("Advanced design knowledge collection " + collectionName + " must be an array.");
        continue;
      }
      addedRecordCount += records.length;
    }
    if (addedRecordCount < 25) {
      fail("Advanced design knowledge must contain at least 25 supplementary records.");
    }
  }

  if (baseCatalog && advancedCatalog) {
    catalog = { ...baseCatalog };
    for (const [collectionName] of collections) {
      const baseRecords = baseCatalog[collectionName] ?? [];
      const additionalRecords = advancedCatalog[collectionName] ?? [];
      if (!Array.isArray(baseRecords) || !Array.isArray(additionalRecords)) {
        fail("Design knowledge: " + collectionName + " must be an array in both catalogs.");
        continue;
      }
      catalog[collectionName] = [...baseRecords, ...additionalRecords];
    }
  } else {
    catalog = baseCatalog;
  }

  if (catalog) {
    const knowledgeIds = new Set();
    for (const [collectionName, minimumCount] of collections) {
      const records = catalog[collectionName];
      if (!Array.isArray(records) || records.length < minimumCount) {
        fail("Design knowledge: " + collectionName + " must contain at least " + minimumCount + " records.");
        continue;
      }
      for (const record of records) {
        if (!record.id || !record.title || !record.summary || !Array.isArray(record.tags) || record.tags.length === 0) {
          fail("Design knowledge: each " + collectionName + " record needs id, title, summary, and non-empty tags.");
          continue;
        }
        if (knowledgeIds.has(record.id)) fail("Design knowledge: duplicate id " + record.id + ".");
        knowledgeIds.add(record.id);
      }
    }

    try {
      const { searchKnowledge } = await import(new URL("./search-design-knowledge.mjs", import.meta.url));
      for (const [query, domain] of [
        ["dashboard", "all"],
        ["forms", "all"],
        ["save", "interaction"],
        ["editorial", "direction"],
        ["AI assistant", "product"],
        ["editorial", "style"],
        ["dark dashboard palette", "color"],
        ["editorial reading", "typography"],
        ["reduced motion", "motion"],
        ["form errors", "ux"],
        ["chart accessibility", "chart"],
        ["React hooks", "stack"],
        ["privacy consent", "ux"],
        ["modal focus lifecycle", "ux"],
        ["time series freshness", "chart"],
        ["subscription invoice", "page"],
        ["streaming output", "interaction"],
        ["Core Web Vitals", "stack"],
        ["offline retry", "ux"],
        ["semantic HTML", "stack"],
        ["command palette", "interaction"],
      ]) {
        if (searchKnowledge(catalog, query, { domain, limit: 3 }).length === 0) {
          fail("Design knowledge: search smoke test returned no results for " + query + " in " + domain + ".");
        }
      }
    } catch (error) {
      fail("Design knowledge search utility could not be imported or tested: " + error.message);
    }
  }

  if (errors.length > 0) {
    console.error("MAX-DESIGN validation failed:");
    for (const error of errors) console.error(" - " + error);
    process.exitCode = 1;
    return;
  }

  console.log("MAX-DESIGN validation passed: unified root entrypoint, " + names.size + " specialist playbooks, bundled docs and scripts, token aliases, and searchable design knowledge checked.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
