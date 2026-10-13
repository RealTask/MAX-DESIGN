# Design-knowledge research notes and sources

Reviewed for this catalog update: 13 October 2026.

This document records the role and limits of the external references used to shape MAX-DESIGN's original guidance. It is intentionally separate from the catalog records: agents should use concise, task-specific decision records, while humans can audit their evidence basis here.

## Research method

1. Compare public UI/UX catalog taxonomies to identify missing decision areas, not to copy datasets. The comparison reference was [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill), including its public guidance on product reasoning, design-system selection, styles, typography, UX checks, charts, and stack-aware recommendations.
2. Check accessibility and widget-behavior guidance against primary standards and maintainer documentation where available.
3. Translate those findings into original MAX-DESIGN records: when a pattern fits, what behavior it implies, which failure states matter, what to verify, and common risks.
4. Keep measurements, claims of conformance, platform recommendations, and heuristics distinct. A reference link does not certify a product or implementation.

## Source map

| Topic | Primary reference | How MAX-DESIGN uses it | Evidence limits |
| --- | --- | --- | --- |
| Web accessibility requirements | [W3C Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/) | Focus visibility and obstruction, target-size checks, contrast, keyboard access, and verification planning | WCAG is normative guidance for its stated scope. A catalog record or automated scan alone cannot establish conformance. |
| Custom widget behavior | [WAI-ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/) | Expected keyboard behavior and semantics for dialogs, comboboxes, tabs, and similar widgets | APG is implementation guidance; use the applicable pattern and test real browser/assistive-technology behavior. Do not copy ARIA roles without their behavior. |
| Modal dialog lifecycle | [APG: Dialog (Modal) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) | Focus entry, containment while modal, close behavior, and focus restoration | The appropriate initial focus and dismissal rules depend on the task and dialog content. |
| Search suggestions | [APG: Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/) | Keyboard handling, active option, suggestion behavior, and async result states | Combobox variants have different interaction models; choose one intentionally rather than mixing patterns. |
| Native semantics and ARIA | [MDN: ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) | Prefer native HTML controls; use ARIA to express additional semantics and state where needed | ARIA does not implement interaction logic or make a nonfunctional custom widget accessible by itself. |
| Keyboard access | [MDN: Keyboard accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Keyboard) | Logical focus order, visible focus, and keyboard equivalence for pointer actions | Static source review does not prove every key path works in a rendered page. |
| Performance metrics | [web.dev: Web Vitals](https://web.dev/articles/vitals) | Encourage explicit measurement of loading, responsiveness, and visual stability; identify field versus lab evidence | Metrics vary by measurement source and context. Never invent results or generalize from a single run. Check current metric definitions and thresholds on the source. |
| Platform-aware motion | [Apple Human Interface Guidelines: Motion](https://developer.apple.com/design/human-interface-guidelines/motion) | Purposeful, brief, optional motion; reduce unnecessary movement; keep interactions responsive | Apple guidance is platform-specific inspiration, not automatically a web standard or a substitute for reduced-motion checks. |
| Inclusive platform design | [Apple Human Interface Guidelines: Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility) | Larger text support, multiple ways to perceive status, accessible control size, and motion sensitivity considerations | Use guidance appropriate to the target platform; do not transfer platform-specific dimensions to web WCAG claims without checking the relevant standard. |
| Catalog taxonomy and retrieval ideas | [UI/UX Pro Max repository](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | Comparative review of topics such as product profiles, styles, typography, UX, charts, and stack guidance | Used for topic discovery only. MAX-DESIGN does not bundle its datasets, catalog text, or scripts. |

## Evidence labels for future records

Use these distinctions while adding knowledge:

- **Normative requirement:** explicitly required by a named standard within its scope. State the standard and relevant criterion when practical.
- **Authoring guidance:** a recommended implementation pattern from a standards body or platform owner.
- **Measured result:** an observed value with tool, scope, environment, and method. Do not store fabricated or context-free metrics.
- **Practical heuristic:** an original recommendation whose usefulness depends on the product, audience, and context.
- **Assumption:** a temporary choice made because project evidence is missing; label it and verify it.

A sensible default is to link to primary sources rather than embed large excerpts from them. Re-check source pages when standards or platform guidance evolve, particularly before making normative claims.

## Updating this research

When extending the catalog:

1. Search the existing records first to avoid duplicates and synonym collisions.
2. Read the relevant primary source and record only the claims needed for the decision.
3. Add a unique kebab-case ID, task-oriented tags, applicable states, risks, and verification steps.
4. Link the source with the affected record; never use a reference as a substitute for testing.
5. Run `npm test`, including search smoke tests for new tags and domain coverage.
6. Inspect the final search results for misleading matches, duplicate records, or a heuristic that sounds like a universal rule.
