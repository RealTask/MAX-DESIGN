# Contributing to MAX-DESIGN

Thanks for helping make the toolkit more useful, precise, and reliable.

## What makes a good contribution?

A contribution should improve a real design outcome. Prefer repeatable workflows, focused skills, structured decision knowledge, edge-case guidance, testable checklists, and examples that improve how the agent generalizes.

Avoid vague advice such as “make it modern” unless it translates into observable decisions. Avoid adding skills that merely rename an existing skill's responsibilities.

## Skill format

Each skill lives in a directory under skills/ and contains a SKILL.md file. Include:

1. YAML-style front matter with a unique lowercase, hyphenated name and a concise description.
2. A When to use section with clear activation criteria.
3. A Workflow section with ordered, actionable steps.
4. A Quality gates section describing how to verify the result.

Make instructions usable by an agent that has not read the whole repository. Keep SKILL.md focused on the workflow; put shared reference material in docs/ and deeper examples in examples/.

## Adding knowledge-catalog entries

The original catalog is knowledge/design-patterns.json. A good entry explains when a direction or pattern fits, what it prioritizes, its failure modes, and what should be verified.

- Use original wording; do not copy upstream prompts, text, code, style catalogs, or assets wholesale.
- Treat patterns as contextual heuristics, not universal rules or rankings.
- Include useful tags and stable unique IDs.
- Link to relevant local guidance or authoritative sources when needed.
- Test representative search queries after editing the catalog.

## Design behavior

- Inspect current project instructions, stack, and components before proposing changes.
- Distinguish facts observed in the repository from assumptions.
- Keep accessibility, responsive behavior, content quality, performance, and interaction states in scope.
- Preserve user changes and working functionality; do not delete existing tokens without a migration plan.
- Prefer reversible changes when evidence is incomplete.
- Distinguish automated checks from visual review, user testing, and assistive-technology evaluation.
- Do not make WCAG conformance, runtime, or performance claims without evidence.

## Pull requests and verification

Before opening a pull request:

- Run npm test.
- Smoke-test the design knowledge search, for example by searching for dashboard and forms.
- Check that the token JSON parses and semantic aliases resolve.
- Read the final diff for duplicated or contradictory guidance and broken paths.
- Update the README when adding or removing skills or CLI commands.
- Summarize rationale, changed behavior, verification performed, and known limitations.

The repository has no third-party runtime dependencies and uses Node.js 20+ for local checks.

## License

By contributing, you agree that your contributions are licensed under the repository's MIT license.
