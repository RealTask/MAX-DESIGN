import test from "node:test";
import assert from "node:assert/strict";
import { searchKnowledge } from "../scripts/search-design-knowledge.mjs";

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

test("returns no results for blank input", () => {
  assert.deepEqual(searchKnowledge(catalog, "   "), []);
});
