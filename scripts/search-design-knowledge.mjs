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

const synonymGroups = [
  ["a11y", "accessibility", "accessible"],
  ["mobile", "responsive", "adaptive"],
  ["motion", "animation", "animations", "microinteraction"],
  ["error", "failure", "failures", "recovery"],
  ["loading", "pending", "skeleton"],
  ["dashboard", "analytics", "metrics"],
  ["form", "forms", "input", "inputs"],
  ["ui", "interface", "interfaces"],
  ["ux", "usability", "experience"],
];

const synonymIndex = new Map();
for (const group of synonymGroups) {
  for (const word of group) synonymIndex.set(word, group);
}

function normalizeText(value) {
  return String(value ?? "").normalize("NFKC").toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

function terms(value) {
  return new Set(normalizeText(value).split(/\s+/u).filter(Boolean));
}

function getVariants(term) {
  const variants = new Set([term]);
  const group = synonymIndex.get(term);
  if (group) for (const word of group) variants.add(word);

  // Conservative English plural handling supplements, rather than replaces, synonyms.
  if (term.length > 4 && term.endsWith("ies")) variants.add(term.slice(0, -3) + "y");
  else if (term.length > 3 && term.endsWith("s") && !term.endsWith("ss")) variants.add(term.slice(0, -1));

  for (const variant of [...variants]) {
    const variantGroup = synonymIndex.get(variant);
    if (variantGroup) for (const word of variantGroup) variants.add(word);
  }
  return variants;
}

function collectDetailText(value, output = [], key = "") {
  if (key === "id" || key === "title" || key === "summary" || key === "tags") return output;
  if (typeof value === "string") output.push(value);
  else if (Array.isArray(value)) {
    for (const item of value) collectDetailText(item, output);
  } else if (value && typeof value === "object") {
    for (const [childKey, childValue] of Object.entries(value)) {
      collectDetailText(childValue, output, childKey);
    }
  }
  return output;
}

function scoreField(term, variants, fieldTokens, exactWeight, relatedWeight, fieldName) {
  if (fieldTokens.has(term)) {
    return { score: exactWeight, field: fieldName, matchedAs: term, matchType: "exact" };
  }
  for (const variant of variants) {
    if (variant !== term && fieldTokens.has(variant)) {
      return { score: relatedWeight, field: fieldName, matchedAs: variant, matchType: "related" };
    }
  }
  return null;
}

export async function loadCatalog() {
  return JSON.parse(await readFile(catalogPath, "utf8"));
}

export function searchKnowledge(catalog, query, options = {}) {
  const queryTerms = [...terms(query)];
  const selectedDomain = options.domain ?? "all";
  const limit = Math.max(1, Math.min(50, Number.isInteger(options.limit) ? options.limit : 8));
  const requireAll = options.requireAll === true;
  if (queryTerms.length === 0) return [];

  const collections = selectedDomain === "all"
    ? Object.entries(domains)
    : Object.entries(domains).filter(([domain]) => domain === selectedDomain);
  const normalizedQuery = normalizeText(query);
  const results = [];

  for (const [domain, collectionName] of collections) {
    const records = catalog[collectionName];
    if (!Array.isArray(records)) continue;

    for (const record of records) {
      const fields = [
        { name: "title", tokens: terms(record.title), exactWeight: 8, relatedWeight: 4.5 },
        { name: "tags", tokens: terms((record.tags ?? []).join(" ")), exactWeight: 5, relatedWeight: 3 },
        { name: "summary", tokens: terms(record.summary), exactWeight: 3, relatedWeight: 1.5 },
        { name: "details", tokens: terms(collectDetailText(record).join(" ")), exactWeight: 1, relatedWeight: 0.5 },
      ];

      let score = 0;
      const matchedTerms = [];
      const unmatchedTerms = [];
      const matchDetails = [];

      for (const term of queryTerms) {
        const variants = getVariants(term);
        const matches = [];
        for (const field of fields) {
          const match = scoreField(term, variants, field.tokens, field.exactWeight, field.relatedWeight, field.name);
          if (match) matches.push(match);
        }

        if (matches.length === 0) {
          unmatchedTerms.push(term);
          continue;
        }
        matchedTerms.push(term);
        score += matches.reduce((sum, match) => sum + match.score, 0) + 1.25;
        matchDetails.push({ term, matches });
      }

      if (requireAll && unmatchedTerms.length > 0) continue;
      if (score === 0) continue;

      const normalizedTitle = normalizeText(record.title);
      const normalizedSummary = normalizeText(record.summary);
      if (normalizedQuery && (" " + normalizedTitle + " ").includes(" " + normalizedQuery + " ")) score += 8;
      else if (normalizedQuery && (" " + normalizedSummary + " ").includes(" " + normalizedQuery + " ")) score += 3;
      const coverage = matchedTerms.length / queryTerms.length;
      score += coverage * 2;

      results.push({
        domain,
        score: Math.round(score * 100) / 100,
        matchedTerms,
        unmatchedTerms,
        matchDetails,
        record,
      });
    }
  }

  results.sort((a, b) => b.score - a.score
    || b.matchedTerms.length - a.matchedTerms.length
    || a.record.title.localeCompare(b.record.title));
  return results.slice(0, limit);
}

function parseArguments(args) {
  const parsed = { queryParts: [], domain: "all", limit: 8, json: false, requireAll: false, explain: false };
  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index];
    if (argument === "--domain") {
      const value = args[++index];
      if (!value || value.startsWith("--")) throw new Error("--domain requires a domain name.");
      parsed.domain = value;
    } else if (argument === "--limit") {
      const rawLimit = args[++index];
      const limit = Number(rawLimit);
      if (!rawLimit || !Number.isInteger(limit) || limit < 1 || limit > 50) {
        throw new Error("--limit must be an integer between 1 and 50.");
      }
      parsed.limit = limit;
    } else if (argument === "--json") {
      parsed.json = true;
    } else if (argument === "--require-all") {
      parsed.requireAll = true;
    } else if (argument === "--explain") {
      parsed.explain = true;
    } else if (argument === "--help" || argument === "-h") {
      parsed.help = true;
    } else if (argument.startsWith("--")) {
      throw new Error("Unknown option: " + argument + ". Use --help to see valid options.");
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
  console.log('  node scripts/search-design-knowledge.mjs "mobile animation" --explain');
  console.log('  node scripts/search-design-knowledge.mjs "responsive charts" --require-all --limit 5');
  console.log("");
  console.log("Domains: all, direction, page, interaction, density.");
  console.log("Options: --domain <name>, --limit <1-50>, --require-all, --explain, --json, --help.");
}

function printResults(query, results, options = {}) {
  console.log('MAX-DESIGN design knowledge for "' + query + '"');
  console.log("");

  if (results.length === 0) {
    console.log(options.requireAll
      ? "No matches containing every query term. Try fewer or broader terms."
      : "No matches. Try a broader term such as dashboard, forms, accessibility, responsive, or loading.");
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

    if (options.explain) {
      const explanations = result.matchDetails.map((detail) => {
        const matches = detail.matches.slice(0, 3).map((match) => match.field + (match.matchType === "related" ? " via " + match.matchedAs : ""));
        return detail.term + " (" + matches.join(", ") + ")";
      });
      console.log("   Why: " + explanations.join("; "));
      if (result.unmatchedTerms.length) console.log("   Unmatched query terms: " + result.unmatchedTerms.join(", "));
    }

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
    const results = searchKnowledge(catalog, query, {
      domain: parsed.domain,
      limit: parsed.limit,
      requireAll: parsed.requireAll,
    });
    if (parsed.json) {
      console.log(JSON.stringify({ query, domain: parsed.domain, requireAll: parsed.requireAll, results }, null, 2));
    } else {
      printResults(query, results, parsed);
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
