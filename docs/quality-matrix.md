# Interface quality matrix

Use this matrix to select checks proportionate to the change. This is not a certification checklist; passing selected checks does not prove overall usability, accessibility, security, or performance.

## 1. Risk-first prioritization

| Priority | Use when | Required response |
| --- | --- | --- |
| P0 — Blocking | Core task is impossible; serious data-loss, security, or accessibility risk is observed | Stop release of the affected path, state evidence, fix and retest |
| P1 — High | Main action is unclear, major viewport breaks, keyboard is blocked, or system state is misleading | Fix before normal polish; verify the impacted path |
| P2 — Moderate | Secondary path is awkward, feedback is inconsistent, or a pattern diverges from the system | Fix in the same change when low-risk; otherwise track it |
| P3 — Polish | Local refinement has limited effect on task completion or comprehension | Do after structure, behavior, and access needs work |

Severity must reflect evidence and user impact, not personal taste or a desire to make a report seem important.

## 2. State coverage by component type

| Component / flow | Inspect states and behaviors |
| --- | --- |
| Button / link | Default, hover if applicable, focus, pressed, disabled, navigation outcome, repeated activation |
| Form | Untouched, invalid, correction, submitting, success, server error, offline/retry, preserved input |
| Dialog / menu | Open, close, Escape where expected, focus entry, focus return, outside interaction rules, narrow viewport |
| Navigation | Current location, active section, direct links, missing/forbidden page, narrow layout, keyboard access |
| List / table | Loading, populated, sorting/filtering, empty, no results, partial data, long labels, large values, pagination |
| Chart / metric | Definition, units, date range, loading, stale, missing data, filtered-empty, accessible equivalent |
| Async action | Pending, success only after real completion, failure, retry, duplicate request behavior, interruption |
| Media / image | Loading, missing asset, alternative text, aspect ratio, layout stability, reduced motion if animated |

Test only relevant states, but do not omit a likely failure path because the happy path is polished.

## 3. Responsive coverage

Test content-driven layouts at a narrow, medium, and wide viewport appropriate to the product's supported range. Include:
- longest realistic labels and untranslated strings;
- large numbers, dates, empty lists, and error messages;
- zoom or text resizing where tools permit;
- keyboard focus around sticky headers, dialogs, and overflow containers;
- touch and keyboard alternatives for hover-only interactions;
- no unintended horizontal overflow or clipped controls.

Do not claim all devices are covered because one mobile and one desktop screenshot were inspected.

## 4. Accessibility evidence

Start from the normative requirements in [WCAG 2.2](https://www.w3.org/TR/WCAG22/). Use the [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/) for expected behavior of custom widgets.

Check, as applicable: semantic landmarks, headings, names, roles, and states; logical keyboard order, visible focus, and dialog focus management; text, component, and focus contrast; persistent labels, associated errors, and status announcements; zoom, reflow, text spacing, target usability, and non-color cues; reduced-motion settings and meaningful media alternatives.

Automated scans identify only a subset of issues. Manual keyboard review and assistive-technology testing answer different questions. Report the method and scope; do not claim conformance without an appropriate evaluation.

## 5. Performance and stability evidence

Prefer measurements or profiling over visual guesswork. When relevant, review [Core Web Vitals](https://web.dev/articles/vitals), bundle cost, image sizing, font loading, layout shifts, expensive effects, and unnecessary client-side work.

- Avoid loading large dependencies for trivial effects.
- Use appropriate image sizes and dimensions to reduce layout shifts.
- Prefer efficient animation properties for routine transitions.
- Test on a representative device and network when practical.
- Do not report a metric unless the tool, scope, and result are known.

## 6. Evidence levels for handoff

| Evidence level | What it supports | What it does not prove |
| --- | --- | --- |
| Source review | Structure and likely code paths were inspected | Rendered appearance, successful interaction, or runtime behavior |
| Build / static checks | The specific command passed in its environment | Usability or complete accessibility |
| Rendered visual review | Appearance was inspected at named viewports and states | Untested interactions or assistive-technology behavior |
| Manual interaction review | Named paths and input methods were exercised | Every possible state or complete accessibility conformance |
| Automated end-to-end / a11y checks | Configured assertions passed | User comprehension or absence of all defects |
| User research / assistive-tech test | Observed users performed specified tasks under stated conditions | Universal usability or guaranteed outcomes |

## 7. Minimum handoff format

Report **changed**, **verified**, **not verified**, and **known trade-offs**. Name actual commands and tested viewports or paths. If browser tooling was unavailable, state that source inspection occurred without implying runtime validation.
