import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "..");
const catalogPath = path.join(repositoryRoot, "knowledge", "design-patterns.json");

const domains = {
  direction: "directions",
  page: "pagePatterns",
  interaction: "interactionPatterns",
  density: "densityProfiles",
};

function terms(value) {
  return new Set(String(value ?? "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim().split(/\s+/).filter(Boolean));
}

function includesTerm(text, term) {
  const normalized = String(text ?? "").toLowerCase();
  return normalized.includes(term);
}

export async function loadCatalog() {
  return JSON.parse(await readFile(catalogPath, "utf8"));
}

export function searchKnowledge(catalog, query, options = {}) {
  const queryTerms = [...terms(query)];
  const selectedDomain = options.domain ?? "all";
  const limit = Math.max(1, Math.min(50, Number.isInteger(options.limit) ? options.limit : 8));
  if (queryTerms.length === 0) return [];

  const collections = selectedDomain === "all"
    ? Object.entries(domains)
    : Object.entries(domains).filter(([domain]) => domain === selectedDomain);

  const results = [];
  for (const [domain, collectionName] of collections) {
    const records = catalog[collectionName];
    if (!Array.isArray(records)) continue;

    for (const record of records) {
      const titleTerms = terms(record.title);
      const tagTerms = terms((record.tags ?? []).join(" "));
      const summaryTerms = terms(record.summary);
      const allTerms = terms(JSON.stringify(record));
      let score = 0;
      const matchedTerms = [];

      for (const term of queryTerms) {
        let matched = false;
        if (titleTerms.has(term)) {
          score += 6;
          matched = true;
        } else if (includesTerm(record.title, term)) {
          score += 3;
          matched = true;
        }

        if (tagTerms.has(term)) {
          score += 4;
          matched = true;
        } else if ((record.tags ?? []).some((tag) => includesTerm(tag, term))) {
          score += 2;
          matched = true;
        }

        if (summaryTerms.has(term)) {
          score += 2;
          matched = true;
        } else if (includesTerm(record.summary, term)) {
          score += 1;
          matched = true;
        }

        if (!matched && allTerms.has(term)) {
          score += 1;
          matched = true;
        }
        if (matched) matchedTerms.push(term);
      }

      if (score > 0) results.push({ domain, score, matchedTerms, record });
    }
  }

  results.sort((a, b) => b.score - a.score || a.record.title.localeCompare(b.record.title));
  return results.slice(0, limit);
}

function parseArguments(args) {
  const parsed = { queryParts: [], domain: "all", limit: 8, json: false };
  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index];
    if (argument === "--domain") {
      parsed.domain = args[++index] ?? "";
    } else if (argument === "--limit") {
      const limit = Number(args[++index]);
      if (!Number.isInteger(limit) || limit < 1 || limit > 50) {
        throw new Error("--limit must be an integer between 1 and 50.");
      }
      parsed.limit = limit;
    } else if (argument === "--json") {
      parsed.json = true;
    } else if (argument === "--help" || argument === "-h") {
      parsed.help = true;
    } else {
      parsed.queryParts.push(argument);
    }
  }
  return parsed;
}

function printUsage() {
  console.log("MAX-DESIGN searchable design knowledge");
  console.log("");
  console.log("Usage:");
  console.log('  node scripts/search-design-knowledge.mjs "dashboard charts"');
  console.log('  node scripts/search-design-knowledge.mjs "form errors" --domain interaction');
  console.log('  node scripts/search-design-knowledge.mjs "editorial" --domain direction --limit 5');
  console.log("");
  console.log("Domains: all, direction, page, interaction, density. Add --json for structured output.");
}

function printResults(query, results) {
  console.log('MAX-DESIGN design knowledge for "' + query + '"');
  console.log("");

  if (results.length === 0) {
    console.log("No matches. Try a broader term such as dashboard, forms, accessibility, responsive, or loading.");
    return;
  }

  results.forEach((result, index) => {
    const record = result.record;
    console.log((index + 1) + ". [" + result.domain + "] " + record.title + " (score " + result.score + ")");
    console.log("   " + record.summary);

    const focus = record.fitWhen ?? record.priorities ?? record.behavior ?? record.layoutRules ?? [];
    if (focus.length) console.log("   Focus: " + focus.slice(0, 3).join("; "));

    const cautions = record.avoid ?? record.antiPatterns ?? record.cautions ?? [];
    if (cautions.length) console.log("   Avoid: " + cautions.slice(0, 2).join("; "));

    if (record.references?.length) console.log("   References: " + record.references.join(", "));
    console.log("");
  });

  console.log("These are contextual heuristics, not automatic design prescriptions. Inspect the actual product and constraints.");
}

async function main() {
  let parsed;
  try {
    parsed = parseArguments(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 2;
    return;
  }

  if (parsed.help) {
    printUsage();
    return;
  }

  if (!Object.hasOwn(domains, parsed.domain) && parsed.domain !== "all") {
    console.error("Unknown domain: " + parsed.domain + ". Use all, direction, page, interaction, or density.");
    process.exitCode = 2;
    return;
  }

  const query = parsed.queryParts.join(" ").trim();
  if (!query) {
    printUsage();
    process.exitCode = 2;
    return;
  }

  try {
    const catalog = await loadCatalog();
    const results = searchKnowledge(catalog, query, { domain: parsed.domain, limit: parsed.limit });
    if (parsed.json) {
      console.log(JSON.stringify({ query, domain: parsed.domain, results }, null, 2));
    } else {
      printResults(query, results);
    }
    if (results.length === 0) process.exitCode = 1;
  } catch (error) {
    console.error("Unable to search design knowledge: " + error.message);
    process.exitCode = 1;
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
