# MAX-DESIGN

**Production-minded UI/UX skills for AI coding agents.** Build distinctive, accessible, responsive interfaces with coherent systems and real behavior—not generic template UI.

**Discover → Define → Design → Build → Critique → Verify**

## What this is

MAX-DESIGN is a modular toolkit for turning product intent into high-quality interface work. It combines end-to-end orchestration with focused skills for the parts of interface design that commonly fail: information structure, form completion, UX copy, charts, responsive edge cases, accessibility, and verification.

It is framework-agnostic: use the project's existing HTML/CSS/JavaScript, React, Vue, Svelte, Next.js, or other stack. The repository has no third-party runtime dependencies. Its local validator runs with Node.js 20+.

## Included skills

| Skill | Purpose |
| --- | --- |
| **max-design** | Coordinates discovery, direction, implementation, critique, and verification |
| **frontend-design** | Builds distinctive, polished, responsive interfaces |
| **information-architecture** | Structures navigation, hierarchy, search, and user task flows |
| **ux-writing-content** | Writes clear labels, helper text, onboarding, success, and error copy |
| **forms-ux** | Designs accessible forms, validation, submission, and recovery |
| **design-system** | Audits and safely extends tokens, themes, and reusable components |
| **data-visualization** | Selects and verifies accurate, accessible charts and data displays |
| **design-review** | Prioritizes evidence-based UI findings by user impact |
| **interaction-motion** | Adds purposeful transitions and understandable motion |
| **accessibility-audit** | Reviews semantics, keyboard use, focus, contrast, and reduced motion |
| **resilient-localization** | Hardens UI against long text, localization, unexpected data, and failures |
| **ui-testing** | Plans practical interaction, responsive, accessibility, and visual checks |

Use only the skills relevant to a task. Shared references in docs/ provide decision frameworks, page-type heuristics, quality matrices, and source attribution. The original knowledge/ catalog can also be searched locally by topic.

## Quick start

### Skills CLI

If your agent supports the Skills CLI, install the repository:

    npx skills add RealTask/MAX-DESIGN

Select the skills you want when prompted. CLI behavior varies by agent; verify the selected skill appears in the tool's skill list.

### Manual installation

Copy the skill folder(s) from skills/ into the directory your agent recognizes.

- Codex-style project skills: .agents/skills/
- Claude Code: .claude/skills/
- Other agents: use the agent's current skill-discovery documentation.

Keep each folder with its SKILL.md file and any related references. Refresh or restart the agent if required.

## Example requests

- “Use max-design to design a responsive SaaS dashboard based on this codebase and its existing components.”
- “Use information-architecture to simplify this navigation without breaking deep links.”
- “Use forms-ux to fix validation and preserve user input after failed submission.”
- “Use design-system to audit tokens and plan a safe migration.”
- “Use data-visualization to redesign these charts so units, ranges, and missing data are clear.”
- “Use design-review and ui-testing to find and verify the highest-impact problems.”
- “Use accessibility-audit to remediate keyboard and focus issues without changing the brand.”

## Searchable design knowledge

MAX-DESIGN includes an original, local decision catalog with visual directions, page patterns, interaction patterns, and density guidance. Search it without network access or third-party dependencies:

    node scripts/search-design-knowledge.mjs "dashboard charts"
    node scripts/search-design-knowledge.mjs "form errors" --domain interaction
    node scripts/search-design-knowledge.mjs "editorial" --domain direction --limit 5

Domains: all, direction, page, interaction, density. Add --json for structured output. Treat matches as context-aware starting points, not automatic style prescriptions.

## Workflow

1. **Understand the job.** Identify users, primary task, content, constraints, and observable success criteria.
2. **Inspect before inventing.** Read project instructions, routes, components, tokens, assets, scripts, and tests.
3. **Choose a clear direction.** Use docs/decision-framework.md to avoid generic visual defaults.
4. **Route specialist work.** Select the narrowest skill or combination that actually fits.
5. **Implement real behavior.** Include relevant loading, empty, error, disabled, focus, active, and success states.
6. **Critique by impact.** Fix correctness and task clarity before decorative polish.
7. **Verify and report.** Check relevant viewports, interactions, accessibility, performance, and project scripts; accurately state what was and was not verified.

## Design principles

- **Distinctive over decorative:** visual choices express the product and user task.
- **Content before chrome:** realistic content reveals layout and hierarchy problems.
- **Responsive by design:** adapt information and interaction to available space.
- **Accessible by default:** semantics, keyboard use, focus, labels, contrast, and reduced motion are core requirements.
- **Real states, not screenshots:** controls work and errors have clear recovery paths.
- **Performance is part of polish:** avoid unnecessary dependencies, oversized assets, expensive effects, and layout shifts.
- **Evidence beats claims:** no tests, measurements, or conformance claims without supporting evidence.
- **Preserve by default:** reuse the stack, conventions, and design system unless the evidence supports a change.

## Repository map

- skills/ — 12 modular, independently activatable skills
- docs/decision-framework.md — brief intake, design direction, page-pattern heuristics, routing
- docs/quality-matrix.md — states, responsive coverage, risk priority, evidence levels
- docs/research-and-source-map.md — sources reviewed and how lessons were independently applied
- docs/design-principles.md — shared product and engineering principles
- docs/preflight-checklist.md — before-delivery checklist
- examples/design-brief.md — reusable brief and acceptance-criteria template
- examples/design-tokens.json — illustrative semantic token structure
- scripts/validate-skills.mjs — dependency-free structure, token, catalog, and search smoke checks
- scripts/search-design-knowledge.mjs — local design knowledge search CLI

## Validate locally

Requires Node.js 20 or newer. No third-party dependencies are needed.

    npm test

The validator checks skill metadata and structure, unique names, README coverage, reference-document presence, token JSON, required semantic roles, primitive colors, and token aliases.

## Research and attribution

This toolkit learns from public discussions, open-source skill designs, and standards while retaining its own language and workflows. See docs/research-and-source-map.md for the source list, applied lessons, and limitations. The repository does not bundle other projects' skill text, style catalogs, or assets.

## Contributing

Read CONTRIBUTING.md before proposing a new skill. Prefer focused workflows with observable quality gates over redundant skills or giant prompts.

## License

MIT. See LICENSE.
