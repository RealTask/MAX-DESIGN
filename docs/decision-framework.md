# Design decision framework

Use this framework to turn vague design requests into a specific, testable direction. It is a decision aid, not a preset theme. Follow the product's existing system whenever evidence says to preserve it.

## 1. Capture the brief

Record the items below. Make a reasonable assumption when a detail is non-blocking and name the assumption.

- **User and job:** who is using this, and what should they accomplish?
- **Product context:** product category, business model, brand maturity, and trust requirements.
- **Primary action:** the most important next step on this screen.
- **Content and evidence:** real copy, data, product screenshots, testimonials, metrics, and assets actually available.
- **Environment:** framework, components, routes, tokens, browsers, and supported viewports.
- **Constraints:** deadlines, performance, accessibility, privacy, and what must not change.
- **Success checks:** observable actions or criteria that demonstrate success.

Ask only for a missing detail that could materially change the implementation; otherwise state the assumption and proceed.

## 2. Inspect before selecting a direction

Read project instructions, package scripts, representative pages, components, token sources, assets, docs, tests, and routes. Classify the work:

- **Preserve:** a coherent existing system matches the task; refine within it.
- **Extend:** the system is sound but lacks specific patterns or tokens.
- **Propose:** no established system exists; offer one coherent, reasoned direction.
- **Migrate:** patterns conflict; plan a reversible path with compatibility checks.

Do not replace brand colors, add a second component library, or rewrite the stack merely to make output look novel.

## 3. Choose a visual direction deliberately

Describe the direction in a short paragraph with concrete choices:

1. **Personality:** two or three traits supported by the audience and product.
2. **Hierarchy:** the focal point, primary action, and what should recede.
3. **Typography:** role-based hierarchy, readable line lengths, and a reason for font family and weights.
4. **Color roles:** page, surface, primary text, secondary text, border, focus, and status.
5. **Density and layout:** content width, information density, alignment, spacing, and responsive behavior.
6. **Distinctive signature:** one or two product-relevant details that create character without obscuring tasks.
7. **Motion and depth:** effects with a purpose plus a reduced-motion alternative.
8. **Trade-offs:** what was intentionally omitted and why.

Do not default to gradients, glass, oversized headlines, three-column cards, huge rounded corners, animated backgrounds, or monochrome layouts. These can be appropriate, but only when justified by product context and content. Distinctiveness comes from decisions, not maximum decoration.

## 4. Match common page types to user needs

| Page type | Primary design question | Useful starting pattern | Common failure |
| --- | --- | --- | --- |
| Marketing / landing page | Why should the right user care, and what can they do next? | Specific value proposition, credible proof, product detail, clear CTA, objections addressed | Generic claims, unsupported metrics, repeated feature cards |
| Dashboard / analytics | What needs attention and what decision should follow? | Prioritize actionable change, show metric definitions and time range, provide filters and stale/empty states | Equal-weight widgets, unexplained charts, decorative metrics |
| Admin / settings | How can someone locate and safely change a setting? | Familiar grouping, explicit labels, scoped navigation, saved/unsaved feedback | Hidden save behavior, ambiguous toggles, unrelated settings together |
| Data table / management | How can people scan, compare, find, and act on records? | Clear columns, useful sorting/filtering, safe bulk actions, empty and no-match states | Tiny text, hover-only actions, broken long values |
| E-commerce / catalog | How can people find a suitable item and compare confidently? | Useful filters, stable product details, transparent availability and costs | Fake reviews, surprise costs, filters resetting without notice |
| Forms / onboarding | How can people finish accurately with minimal avoidable effort? | Necessary fields, grouped steps, examples, recoverable validation | Placeholder-only labels, detached errors, lost input |
| Editorial / documentation | How can people scan and navigate long content? | Strong heading structure, readable measure, anchor navigation where useful | Walls of text, weak hierarchy, excessive panels |
| Mobile / compact view | What is essential in the current context and input mode? | Task-prioritized layout, comfortable controls, clear navigation state | Shrunk desktop UI, hidden primary action, hover dependencies |

These are reasoning prompts, not templates to apply automatically.

## 5. Define the design-system contract

Document token names and semantic roles; typography and responsive type scale; spacing, widths and breakpoints; surfaces, borders, radii, elevations and focus; component variants and states; loading, empty, error, disabled, success and destructive states; theming, reduced motion and localization behavior.

Use existing token formats. Keep primitive values separate from semantic roles when the system supports that distinction. Document exceptions rather than hiding them in arbitrary CSS.

## 6. Route to the right specialist

- Product structure and discoverability: **information-architecture**
- Labels, messages, and content tone: **ux-writing-content**
- Field and multi-step flows: **forms-ux**
- Charts and quantitative dashboards: **data-visualization**
- Existing visual or usability findings: **design-review**
- Tokens and reusable patterns: **design-system**
- Motion or transitions: **interaction-motion**
- Accessibility remediation: **accessibility-audit**
- Localization, edge cases, and network resilience: **resilient-localization**
- Test strategy and release verification: **ui-testing**

A task may need several skills, but use only the ones that affect the outcome.

## 7. Specify acceptance checks before final polish

State the primary successful path, one meaningful failure or empty path, target viewport ranges, accessible input/focus behavior, and project checks to run. Add task-specific criteria for analytics correctness, localization, security-sensitive flows, and destructive actions.

## 8. Recommended design decision record

For substantial work, record:

- **Context:** user need, codebase findings, constraints.
- **Decision:** chosen direction and token/component strategy.
- **Alternatives considered:** an actual alternative and the reason it was rejected.
- **Consequences:** benefits, trade-offs, risks, and open questions.
- **Verification:** commands, states, viewports, and evidence still needed.
