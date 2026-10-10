# Research and source map

**Reviewed:** 2026-10-10  
**Purpose:** Record open-source and standards-based references that informed MAX-DESIGN's workflows. This is a research map, not a copy of another project's skill content.

MAX-DESIGN is an independent, framework-agnostic toolkit. The sources below compare approaches and point contributors toward primary references. Recommendations here are written in our own words; upstream data catalogs, prompts, code, and assets are not bundled.

## Sources and lessons applied

### UI/UX Pro Max
- Repository: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- Useful approach: design intelligence, design-system generation, differentiated style and typography recommendations, and framework-aware guidance.
- Applied here: require explicit project context and decision gates before suggesting style, typography, density, or stack patterns. MAX-DESIGN does not claim to reproduce its catalog or recommendation engine.

### better-web-ui
- Repository: https://github.com/aladicf/better-web-ui
- Useful approach: task-specific skills, quick routing between similar tasks, and focused guidance for forms, data visualization, localization, accessibility, and testing.
- Applied here: specialist skills each have a distinct workflow and deliverable. The coordinator routes to the narrowest useful skill instead of one giant prompt solving every concern.

### Frontend Agent Skills
- Repository: https://github.com/hueyexe/frontend-agent-skills
- Useful approach: a compact core skill supported by checklists, anti-patterns, and decision references.
- Applied here: shared knowledge lives in docs and examples, while SKILL.md files contain activation criteria, actionable steps, and quality gates.

### Anthropic frontend-design
- Repository: https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design/skills/frontend-design
- Useful approach: establish a clear aesthetic direction and make deliberate choices rather than generating generic, interchangeable layouts.
- Applied here: choose a product-appropriate direction, give each section a purpose, and reserve visual effects for after hierarchy works.

### Vercel Agent Skills
- Repository: https://github.com/vercel-labs/agent-skills
- Useful approach: structured, prioritized rules with examples and repeatable validation.
- Applied here: prioritize workflows by user impact, and validate structure, names, token references, and README coverage. Stack-specific performance rules should be added as small, sourced rules rather than copied into the framework-agnostic core.

### W3C Web Content Accessibility Guidelines (WCAG) 2.2
- Standard and explanatory guidance: https://www.w3.org/WAI/WCAG22/Understanding/intro
- Useful approach: assess accessibility against testable success criteria, distinguishing automation from human evaluation.
- Applied here: checks are concrete, review methods are layered, and MAX-DESIGN does not claim conformance based only on a screenshot, linter, or automated scan.

### WAI-ARIA Authoring Practices Guide
- Pattern reference: https://www.w3.org/WAI/ARIA/apg/patterns/
- Useful approach: expected keyboard and interaction behavior for common custom widgets.
- Applied here: prefer native elements; when a custom pattern is needed, test the relevant keyboard and focus behavior rather than adding ARIA by guesswork.

### Core Web Vitals
- Reference: https://web.dev/articles/vitals
- Useful approach: treat loading experience, responsiveness, and visual stability as measurable quality dimensions.
- Applied here: UI-testing and frontend workflows distinguish measured performance from aesthetic assumptions. No metric is reported without an actual measurement.

### Design Tokens Community Group
- Format information: https://www.designtokens.org/
- Useful approach: use portable token structures and avoid treating an illustrative example as a required implementation format.
- Applied here: the token JSON is a reference example; agents should preserve the target project's token and theme conventions.

## How to apply the research

1. Inspect the current repository and product context before introducing a pattern.
2. Choose the narrowest specialist skill that fits the work.
3. Refer to standards for normative requirements; treat heuristics as context-dependent guidance.
4. Do not import another project's style catalog, prompts, text, code, or assets wholesale.
5. Add rules only when actionable, independently useful, and verifiable.
6. Record the source, reason for inclusion, scope, and a way to validate each new rule.

## Known limits

This source map is a qualitative review, not a controlled benchmark of generated interfaces. It does not establish that one skill repository is universally better, that a visual style converts better, or that an implementation conforms to WCAG. Those claims require contextual testing and evidence.
