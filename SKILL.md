---
name: max-design
description: A complete UI/UX engineering skill that combines frontend design, information architecture, UX writing, forms, design systems, data visualization, motion, accessibility, localization resilience, design review, and UI verification with bundled scripts and searchable design knowledge.
---

# MAX-DESIGN

One integrated, production-minded UI/UX workflow for AI coding agents. This root skill contains the shared workflow, every specialist playbook, decision documents, examples, validation scripts, and the local searchable design-knowledge catalog.

## When to use

Use MAX-DESIGN for interface creation, product redesign, frontend implementation, UX improvements, design-system work, forms, dashboards, accessibility fixes, responsive behavior, localization, motion, design critique, or quality verification. Use the full workflow for substantial or cross-cutting tasks and only the relevant stages for narrow tasks.

## Core principles

- **Understand before styling.** Inspect the existing product, routes, components, tokens, assets, tests, dependencies, and project instructions before changing code.
- **Make intentional design decisions.** Choose layout, hierarchy, density, typography, color roles, and signature details for the user's task instead of defaulting to generic templates.
- **Preserve what works.** Extend the existing stack and design system unless evidence supports a migration.
- **Design the whole state model.** Include relevant loading, pending, empty, no-results, validation, error, retry, disabled, focus, success, and stale-data states.
- **Build real behavior.** Do not fake backend success, customer metrics, testimonials, saved states, or other unsupported product claims.
- **Make accessibility and resilience part of implementation.** Consider semantic HTML, keyboard behavior, visible focus, contrast, reduced motion, zoom, touch input, long content, localization, RTL where relevant, and recovery from failed requests.
- **Verify and report honestly.** Separate code inspection, automated checks, browser testing, accessibility testing, performance measurement, and user research. Never claim a check that was not performed.

## End-to-end workflow

### 1. Discover the user job

Identify the audience, primary task, primary action, important content, constraints, supported devices and input methods, risks, and observable acceptance criteria. Ask a question only when the answer could materially change the design; otherwise state a reasonable assumption and proceed.

### 2. Inspect the existing project

Read repository instructions, routes, representative screens, shared components, styles and tokens, assets, package scripts, tests, and existing documentation. Determine whether to preserve, extend, propose, or migrate the design system. Avoid unnecessary dependencies and broad rewrites.

### 3. Search the bundled design knowledge

Use the local catalog when a design direction, page pattern, interaction, or information-density decision would benefit from a structured starting point. It is guidance, not a preset or an instruction to copy a pattern blindly.

Run from the installed MAX-DESIGN directory:

```bash
node scripts/search-design-knowledge.mjs "dashboard charts"
node scripts/search-design-knowledge.mjs "form errors" --domain interaction
node scripts/search-design-knowledge.mjs "editorial" --domain direction --limit 5
node scripts/search-design-knowledge.mjs "mobile animation" --explain
node scripts/search-design-knowledge.mjs "responsive charts" --require-all --limit 5
```

Available domains: `all`, `direction`, `page`, `interaction`, and `density`. Use `--json` for machine-readable results. The catalog is at `knowledge/design-patterns.json`; the search implementation is at `scripts/search-design-knowledge.mjs`.

### 4. Select a specific direction

Read `docs/decision-framework.md` before substantial design work. Define the product personality, content hierarchy, focal point, type roles, semantic color, density, responsive behavior, one or two product-relevant signature details, motion rationale, and trade-offs. Do not default to gradients, glass, giant radii, repeated card grids, oversized headlines, or animated backgrounds without product-specific reasons.

### 5. Load the relevant specialist playbooks

MAX-DESIGN is the single installable skill. Its specialist workflows are bundled as reference playbooks in `skills/`; read the relevant files when needed. They are not intended to be installed as separate peer skills by the standard repository installation.

| Task | Bundled playbook |
| --- | --- |
| Distinctive frontend and responsive implementation | `skills/frontend-design/SKILL.md` |
| Navigation, information hierarchy, search, and task flows | `skills/information-architecture/SKILL.md` |
| Labels, onboarding, helper text, errors, and UX copy | `skills/ux-writing-content/SKILL.md` |
| Forms, validation, submission, and recovery | `skills/forms-ux/SKILL.md` |
| Tokens, components, themes, and safe migrations | `skills/design-system/SKILL.md` |
| Charts, metrics, tabular data, and analytical displays | `skills/data-visualization/SKILL.md` |
| Evidence-based interface critique | `skills/design-review/SKILL.md` |
| Transitions, micro-interactions, and motion | `skills/interaction-motion/SKILL.md` |
| Semantics, keyboard, focus, contrast, and accessibility | `skills/accessibility-audit/SKILL.md` |
| Localization, long text, RTL, and resilient error paths | `skills/resilient-localization/SKILL.md` |
| Interaction, responsive, accessibility, and visual verification | `skills/ui-testing/SKILL.md` |

Read only the playbooks relevant to the task, then combine their guidance into one coherent implementation. Shared principles and decision rules live in `docs/design-principles.md`, `docs/quality-matrix.md`, and `docs/preflight-checklist.md`.

### 6. Plan and implement

Structure content around the user task. Use semantic, maintainable components and the project's established conventions. Every visible control must perform a meaningful action, communicate its true state, or be explicitly disabled. Use realistic content and data. Preserve entered information after recoverable failures; provide clear feedback, retry paths, and confirmations proportionate to risk.

### 7. Review in impact order

Fix task-blocking behavior, incorrect information, confusing hierarchy, inaccessible interactions, broken responsive layouts, missing recovery states, and inconsistent tokens before decorative polish. Prioritize findings using `docs/quality-matrix.md`; separate observed issues from subjective preferences or untested assumptions.

### 8. Verify proportionately

Run the project's existing build, tests, lint, type checks, and other relevant scripts. Inspect narrow, medium, and wide layouts and exercise the key paths when browser tools are available. Use automated accessibility checks alongside manual keyboard review where practical. Check realistic long labels, empty states, errors, missing data, slow requests, and reduced-motion preferences when relevant.

The bundled repository has a dependency-free validator (Node.js 20+):

```bash
npm test
```

The design-knowledge search is also available through:

```bash
npm run search:design -- "responsive charts"
```

The validator checks the specialist playbooks, shared references, example tokens, catalog structure, and search smoke tests. Run it from the MAX-DESIGN directory. Do not run repository maintenance scripts from a target project unless you intend to validate the installed toolkit itself.

### 9. Hand off with evidence

For substantial work, summarize what changed, why major design decisions were made, what commands and viewports were checked, what remains unverified, and any meaningful trade-offs or risks. Never overstate accessibility, browser compatibility, performance, or conformance results.

## Quality gates

- User goals, information hierarchy, and primary actions are clear.
- The design direction is distinctive for the product, not decorative by default.
- Existing project conventions and working behavior are preserved.
- UX copy, forms, charts, navigation, and data states are accurate and recoverable where relevant.
- Responsive behavior, keyboard operation, focus, semantics, contrast, zoom, and reduced motion are considered.
- Long text, localization, missing data, failed requests, and retry behavior are handled when applicable.
- Performance and dependency costs are proportionate to the value delivered.
- Verification claims match actual evidence and limitations are explicit.

## Bundled content map

- `docs/` — decision framework, design principles, quality matrix, and preflight checks.
- `examples/` — design brief template and semantic design-token example.
- `knowledge/design-patterns.json` — local searchable catalog of design directions, page patterns, interaction patterns, and density profiles.
- `scripts/search-design-knowledge.mjs` — offline catalog-search CLI.
- `scripts/validate-skills.mjs` — toolkit structure, metadata, token, catalog, and search validation.
- `skills/` — specialist playbooks included for on-demand use within this one MAX-DESIGN skill.
