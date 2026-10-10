# MAX-DESIGN

**Production-minded design skills for AI coding agents.** Build distinctive, accessible, responsive interfaces with a coherent design system—not generic template UI.

**Discover → Define → Design → Build → Critique → Verify**

## What this is

MAX-DESIGN is a focused toolkit for turning product intent into high-quality interface work. It helps agents understand a product, respect an existing codebase, make intentional visual decisions, and verify the result before calling it finished.

It is framework-agnostic: plain HTML/CSS/JavaScript, React, Vue, Svelte, Next.js, and other stacks already present in a project.

## Included skills

| Skill | Purpose |
| --- | --- |
| **max-design** | Coordinates the complete design workflow |
| **frontend-design** | Builds polished, distinctive production interfaces |
| **design-system** | Audits, documents, and safely extends tokens and components |
| **design-review** | Critiques an existing UI and prioritizes findings by impact |
| **interaction-motion** | Adds purposeful transitions, feedback, and motion |
| **accessibility-audit** | Reviews keyboard use, semantics, contrast, forms, and reduced motion |

Each skill includes activation criteria, an actionable workflow, and quality gates. Shared principles and checklists live in **docs/**; a sample token structure lives in **examples/**.

## Quick start

### Skills CLI

If your agent supports the open Skills CLI, install the repository with:

    npx skills add RealTask/MAX-DESIGN

Select the skills you want to install when prompted. CLI behavior can differ by agent, so verify that the installed skill appears in your tool's skill list.

### Manual installation

Copy one or more folders from **skills/** into the skills directory your agent recognizes.

- Codex-style project skills: **.agents/skills/**
- Claude Code: **.claude/skills/**
- Other agents: follow that agent's current skill-discovery documentation.

Keep the folder name and **SKILL.md** together. Refresh or restart the agent if required.

### Example requests

- “Use max-design to design a responsive SaaS dashboard that fits this product and codebase.”
- “Use design-system to inspect existing styles and create a safe token migration plan.”
- “Use design-review to audit this page for hierarchy, responsive issues, and weak states.”
- “Use accessibility-audit and fix the highest-impact findings without changing the brand.”

## The workflow

1. **Understand the product.** Identify users, jobs, content, actions, edge cases, and success criteria.
2. **Inspect before inventing.** Read project instructions, routes, components, tokens, assets, tests, and conventions.
3. **Choose a direction.** State a clear visual concept and decisions that support it. Avoid fashionable effects without a reason.
4. **Create consistency.** Reuse or extend tokens and components; avoid competing systems.
5. **Implement the whole experience.** Include relevant loading, empty, error, disabled, focus, hover, active, and success states.
6. **Verify the result.** Check viewports, real interactions, accessibility, performance, and available project checks.
7. **Report honestly.** Summarize changes, checks actually run, and known gaps.

## Quality principles

- **Distinctive over decorative:** visuals should express the product's identity and hierarchy.
- **Content before chrome:** realistic content exposes layout problems that placeholders hide.
- **Responsive by design:** adapt information and interaction to the available space.
- **Accessible by default:** semantics, keyboard use, focus visibility, labels, contrast, and reduced motion matter.
- **Respect the codebase:** reuse the stack and conventions; keep uncertain changes small and reversible.
- **Real states, not screenshots:** actions work and failures have clear feedback.
- **Performance is part of polish:** avoid unnecessary dependencies, oversized assets, expensive effects, and layout shifts.
- **Evidence beats claims:** never say a page was tested or validated unless that check was performed.

## Repository map

    skills/
      max-design/
      frontend-design/
      design-system/
      design-review/
      interaction-motion/
      accessibility-audit/
    docs/
    examples/
    scripts/

## Validate locally

Requires Node.js 20 or newer. No third-party dependencies are needed.

    npm test

The validator checks skill metadata, required workflow sections, unique names, and example token JSON.

## Contributing

Read **CONTRIBUTING.md** before proposing a new skill. Prefer a focused workflow with observable quality gates over a giant prompt that tries to do everything.

## License

MIT. See **LICENSE**.
