import test from "node:test";
import assert from "node:assert/strict";
import { loadCatalog, searchKnowledge } from "../scripts/search-design-knowledge.mjs";

const catalog = {
  directions: [
    {
      id: "dashboard-overview",
      title: "Dashboard overview",
      summary: "Help users understand important business metrics.",
      tags: ["dashboard", "analytics", "metrics"],
      priorities: ["Compare monthly performance"],
    },
  ],
  pagePatterns: [
    {
      id: "responsive-page",
      title: "Responsive page layout",
      summary: "A layout that adapts for mobile screens.",
      tags: ["responsive", "mobile", "layout"],
      priorities: ["Avoid horizontal overflow"],
    },
    {
      id: "accessible-form",
      title: "Accessible form flow",
      summary: "Help people complete forms with recoverable validation.",
      tags: ["forms", "validation", "accessibility"],
      states: ["Café name and other localized content"],
    },
  ],
  interactionPatterns: [
    {
      id: "motion-pattern",
      title: "Animation and motion",
      summary: "Respect reduced motion settings.",
      tags: ["animation", "reduced-motion"],
      verify: ["Motion preference enabled"],
    },
  ],
  densityProfiles: [],
};

test("ranks exact title matches above broader matches", () => {
  const results = searchKnowledge(catalog, "dashboard");
  assert.equal(results[0].record.id, "dashboard-overview");
  assert.ok(results[0].score > 0);
});

test("matches useful related terms such as mobile to responsive", () => {
  const results = searchKnowledge(catalog, "mobile", { domain: "page" });
  assert.equal(results[0].record.id, "responsive-page");
  assert.deepEqual(results[0].matchedTerms, ["mobile"]);
  assert.ok(results[0].matchDetails[0].matches.some((match) => match.matchType === "exact" || match.matchType === "related"));
});

test("supports strict all-terms filtering without changing default OR search", () => {
  assert.ok(searchKnowledge(catalog, "responsive charts", { domain: "page" }).length > 0);
  assert.equal(searchKnowledge(catalog, "responsive charts", { domain: "page", requireAll: true }).length, 0);
});

test("matches Unicode text without losing accents", () => {
  const results = searchKnowledge(catalog, "CAFÉ", { domain: "page" });
  assert.equal(results[0].record.id, "accessible-form");
});

test("restricts domains and respects the result limit", () => {
  const results = searchKnowledge(catalog, "animation", { domain: "interaction", limit: 1 });
  assert.ok(results.length <= 1);
  assert.ok(results.every((result) => result.domain === "interaction"));
});

test("loads a complete catalog with stable unique record IDs", async () => {
  const actual = await loadCatalog();
  const collections = [
    "directions", "pagePatterns", "interactionPatterns", "densityProfiles",
    "productProfiles", "styleDirections", "colorStrategies", "typographySystems",
    "motionRecipes", "uxGuidelines", "chartPatterns", "stackGuides",
  ];
  const ids = [];
  for (const collection of collections) {
    assert.ok(Array.isArray(actual[collection]), collection + " must be an array");
    assert.ok(actual[collection].length > 0, collection + " must not be empty");
    for (const record of actual[collection]) {
      assert.equal(typeof record.id, "string");
      assert.equal(typeof record.title, "string");
      assert.equal(typeof record.summary, "string");
      assert.ok(Array.isArray(record.tags));
      ids.push(record.id);
    }
  }
  assert.equal(new Set(ids).size, ids.length, "record IDs must be unique");
});

test("searches every new knowledge domain against the real catalog", async () => {
  const actual = await loadCatalog();
  const cases = [
    ["product", "AI assistant", "ai-saas-product"],
    ["style", "editorial", "style-editorial-premium"],
    ["color", "dark dashboard palette", "color-dark-workspace"],
    ["typography", "editorial reading", "type-editorial-reading"],
    ["motion", "reduced motion", "motion-reduced-mode"],
    ["ux", "form errors", "ux-form-label-validation"],
    ["chart", "chart accessibility", "chart-accessible-data-alternative"],
    ["stack", "React hooks", "stack-react"],
  ];
  for (const [domain, query, expectedId] of cases) {
    const results = searchKnowledge(actual, query, { domain, limit: 10 });
    assert.ok(results.some((result) => result.record.id === expectedId),
      domain + " search should include " + expectedId);
    assert.ok(results.every((result) => result.domain === domain));
  }
});

test("returns no results for blank input", () => {
  assert.deepEqual(searchKnowledge(catalog, "   "), []);
});
