# Searchable knowledge catalog

MAX-DESIGN ships an offline-first, merged JSON catalog sourced from `knowledge/design-patterns.json` and `knowledge/advanced-patterns.json`. The search utility loads both catalogs locally, so retrieval works without network access or third-party runtime dependencies.

## Knowledge domains

| CLI domain | Catalog collection | Use it for |
| --- | --- | --- |
| `direction` | `directions` | Broad visual direction and brand tone |
| `page` | `pagePatterns` | Page architecture and task-specific hierarchy |
| `interaction` | `interactionPatterns` | State transitions, feedback, and control behavior |
| `density` | `densityProfiles` | Information density and spacing decisions |
| `product` | `productProfiles` | Product-specific priorities, risks, and interface needs |
| `style` | `styleDirections` | Visual-language trade-offs and anti-patterns |
| `color` | `colorStrategies` | Semantic palette starting points and token roles |
| `typography` | `typographySystems` | Font-role pairings and type-system guidance |
| `motion` | `motionRecipes` | Timing, transition behavior, and reduced-motion alternatives |
| `ux` | `uxGuidelines` | Accessibility, forms, responsive behavior, content, and recovery |
| `chart` | `chartPatterns` | Chart selection, data integrity, context, and accessible alternatives |
| `stack` | `stackGuides` | Implementation advice and compatibility risks |

Use `--domain all` (the default) for cross-domain retrieval, `--json` for structured results, `--explain` to see search matches, and `--require-all` only when every query term must match.


## Advanced coverage

The supplementary catalog adds original decision records for AI generation and streaming states, account and subscription settings, search-first catalogs, operational data workspaces, command palettes, optimistic updates and rollback, persistent filter state, permission requests, privacy-aware authentication, network failures, status announcements, destructive-action recovery, empty versus missing versus stale data, WCAG 2.2 focus and target checks, modal focus lifecycle, combobox keyboard behavior, Core Web Vitals evidence, and accessible time-series/chart alternatives.

Keep specialist catalog entries task-specific: explain when a pattern fits, the expected behavior, edge states, risks, and how to verify it. A URL in a record is a research reference, not a claim that the entire design is certified or universally appropriate. Review [knowledge sources and research notes](knowledge-sources.md) when extending the catalog.

## Examples

```bash
node scripts/search-design-knowledge.mjs "SaaS dashboard"
node scripts/search-design-knowledge.mjs "AI assistant output states" --domain product
node scripts/search-design-knowledge.mjs "editorial" --domain style
node scripts/search-design-knowledge.mjs "dark dashboard palette" --domain color
node scripts/search-design-knowledge.mjs "reduced motion" --domain motion
node scripts/search-design-knowledge.mjs "chart accessibility" --domain chart
node scripts/search-design-knowledge.mjs "React hooks" --domain stack --json
```

## Record design

A useful record should solve one recognizable decision problem. Prefer a stable, unique kebab-case `id`, a task-oriented `title`, a concise `summary`, and descriptive `tags`. Add only fields useful to that domain, such as `fitWhen`, `priorities`, `behavior`, `implementation`, `tokens`, `verify`, `avoid`, or `risks`.

Quality rules:

- Describe a usable decision, not a vague preference such as “make it modern.”
- Name the user task and when the guidance does or does not fit.
- Include implementation consequences, edge states, and failure modes where relevant.
- Keep recommendation, example, measurement, and assumption distinct.
- Treat example color tokens as starting points, not proof of accessible contrast. Test the exact foreground/background pairs in context.
- Avoid fabricated metrics, product claims, benchmark results, and framework APIs that are not verified for the target version.
- Prefer platform semantics and the project's current design system over generic prescriptions.
- Keep the guidance practical across mobile, zoom, long content, keyboard operation, and reduced motion.

## Research and originality

The knowledge structure was informed by a comparative review of public UI/UX catalog categories, including [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill), and checked against primary accessibility and platform documentation where relevant. MAX-DESIGN's records and search implementation are authored for this repository; upstream data tables, catalog text, and scripts are not bundled here. See [knowledge-sources.md](knowledge-sources.md) for source roles and limits.

## Verification

Run `npm test` from the repository root. Tests cover search ranking, related terms, Unicode, filters, blank queries, catalog structure, globally unique record IDs, and representative searches in each expanded domain.
