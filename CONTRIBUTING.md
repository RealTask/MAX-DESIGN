# Contributing to MAX-DESIGN

Thanks for helping make the toolkit more useful, precise, and reliable.

## What makes a good contribution?

A contribution should improve a real design outcome. Good additions include repeatable workflows, useful checklists, explicit edge-case handling, framework adapters, and quality checks that agents can actually perform.

Avoid vague advice such as “make it modern” unless it is translated into observable decisions. Avoid adding skills that merely rename another skill's responsibilities.

## Skill format

Each skill lives in its own directory under **skills/** and contains a **SKILL.md** file. Include:

1. Front matter with a unique lowercase, hyphenated name and a concise description.
2. A **When to use** section with clear activation criteria.
3. A **Workflow** section with ordered, actionable steps.
4. A **Quality gates** section describing how to verify the result.

Make instructions usable by an agent that has not read the entire repository. Link to supporting docs for detail instead of duplicating large blocks of guidance.

## Design behavior

- Inspect the existing product and its conventions before proposing a new direction.
- Distinguish facts observed in the repository from assumptions.
- Keep accessibility, responsive behavior, content quality, performance, and interaction states in scope.
- Preserve user changes. Do not overwrite unrelated work or delete existing design tokens without a migration plan.
- Prefer reversible changes when the evidence is incomplete.
- Do not present visual judgment as a completed automated test.

## Pull requests

Before opening a pull request:

- Run **npm test**.
- Check that the example token JSON parses.
- Read the final diff and remove duplicated or contradictory guidance.
- Include a concise rationale, behavior changes, verification performed, and known limitations.

## License

By contributing, you agree that your contributions are licensed under the repository's MIT license.
