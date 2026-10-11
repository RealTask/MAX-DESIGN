---
name: max-design
description: Coordinate end-to-end product interface work with context discovery, visual direction, specialist workflows, implementation, critique, and evidence-based verification.
---

# MAX-DESIGN

## When to use

Use for a new product interface, a substantial redesign, or quality-critical UI work spanning several concerns. For a narrow task, load the matching bundled specialist playbook under `skills/` and follow only its relevant workflow; the unified installed skill remains the entrypoint. Keep the project's existing architecture and design system unless inspection gives a reason to change them.

## Operating principles

- **Discover before decorating.** Understand the user job, current codebase, assets, constraints, and acceptance criteria first.
- **Make a specific design choice.** Translate vague words such as “premium” into hierarchy, density, type, semantic color, spacing, and one or two product-relevant signature details. Avoid interchangeable template layouts.
- **Use evidence, not invented polish.** Do not fabricate reviews, metrics, user counts, product capabilities, or successful backend outcomes.
- **Preserve working behavior.** Reuse the existing stack and components; make broad migrations only with an explicit plan.
- **Treat states as part of the design.** A polished happy path is not a complete interface.
- **Verify proportionately.** Run relevant checks and report exactly what was tested and what remains unknown.

## Workflow

### 1. Define the job

Identify the audience, top user task, primary action, important content, success criteria, device and input context, constraints, and risks. Ask only questions that materially affect the direction. State non-blocking assumptions instead of stalling.

### 2. Inspect the project

Read agent instructions, routes, package scripts, current screens, design tokens, shared components, assets, tests, and conventions. Determine whether to preserve, extend, propose, or migrate the design system. Avoid introducing a competing system before the existing one is understood.

### 3. Choose direction before implementation

Use docs/decision-framework.md to decide the hierarchy, page structure, information density, type roles, semantic color, responsive behavior, and purposeful signature detail. Explain meaningful trade-offs. Do not select gradients, glass, giant radii, repeated card grids, or animation by default.

When category-specific grounding helps, query the bundled offline catalog from the installed skill directory. Available domains include product profiles, style, color, typography, motion, UX/accessibility, charts, implementation stacks, directions, page patterns, interactions, and density:

```bash
node scripts/search-design-knowledge.mjs "AI assistant output states" --domain product
node scripts/search-design-knowledge.mjs "dark dashboard palette" --domain color
node scripts/search-design-knowledge.mjs "form errors" --domain ux
node scripts/search-design-knowledge.mjs "chart accessibility" --domain chart
```

Use matches as starting points, inspect the actual product and installed framework versions, and validate palette contrast and interaction behavior before applying recommendations.

### 4. Route specialist work

Use the narrowest relevant workflow; combine skills only when they address real parts of the task.

| Need | Specialist |
| --- | --- |
| Build a complete, distinctive interface | frontend-design |
| Site structure, navigation, findability | information-architecture |
| Labels, helper text, errors, onboarding copy | ux-writing-content |
| Forms and multi-step user input | forms-ux |
| Tokens, components, themes, migration | design-system |
| Quantitative charts and dashboards | data-visualization |
| Critique an existing UI | design-review |
| Transitions and micro-interactions | interaction-motion |
| Keyboard, semantics, contrast, accessibility | accessibility-audit |
| Localization and real-world edge cases | resilient-localization |
| Release testing and verification strategy | ui-testing |

For complex work, consult docs/quality-matrix.md and the relevant standards or project-native docs.

### 5. Implement the complete experience

Build real controls and state transitions. Cover the relevant pending, loading, empty, no-results, invalid, error, retry, disabled, focus, active, success, stale-data, and destructive states. Do not implement irrelevant states merely to fill a checklist. Keep components, tokens, and dependencies maintainable.

### 6. Review in impact order

Fix task comprehension, information architecture, correctness, critical behavior, responsive layout, accessibility barriers, and state feedback before local visual polish. Prefer correcting a shared root cause to patching many individual screens. Separate observable defects from subjective preferences.

### 7. Verify with layered evidence

Inspect relevant narrow, medium, and wide layouts. Exercise key interactions and realistic data if browser tooling allows. Run the existing build, tests, lint, type, and token checks where available. Use manual keyboard review and automated accessibility checks as complementary methods. Do not claim browser testing, user testing, assistive-technology testing, performance measurements, or standards conformance without evidence.

### 8. Hand off clearly

For meaningful work, report:
- **Changed:** relevant implementation and design decisions.
- **Verified:** actual commands, tools, paths, and viewports checked.
- **Not verified:** unrun checks or environments that were unavailable.
- **Trade-offs:** assumptions, known gaps, and follow-up risks.

## Quality gates

- The user task, primary action, and content hierarchy are clear.
- The visual direction is coherent and appropriate rather than generic or effect-driven.
- Existing project conventions and working behavior are preserved.
- Navigation, copy, forms, data displays, and edge states are accurate where relevant.
- Responsive layouts, realistic content, keyboard input, focus, semantics, contrast, and reduced motion are considered.
- Interactions communicate the real application state and provide recoverable failure paths.
- Performance and dependency costs are reasonable for the project.
- Verification claims match evidence and limitations are explicit.
