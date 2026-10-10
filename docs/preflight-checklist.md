# Preflight checklist

Use this checklist before presenting a meaningful UI change as complete. Skip irrelevant checks, but explain important untested areas.

## Product and information architecture

- [ ] The screen supports a clear user goal.
- [ ] Primary and secondary actions are distinguishable.
- [ ] Navigation labels match user tasks and preserve required routes.
- [ ] Empty and no-results states explain the difference and provide a recovery path.
- [ ] No fabricated claims, fake metrics, testimonials, or irrelevant filler were added.

## Content and forms

- [ ] Labels and actions explain what happens next.
- [ ] Important helper text, errors, and success messages are clear and actionable.
- [ ] Forms request only necessary data and use persistent labels.
- [ ] Validation is associated with fields and preserves safe input after failure.
- [ ] Destructive actions explain consequences proportionately.

## Visual system

- [ ] Typography, spacing, semantic color roles, shape, and elevation are consistent.
- [ ] Existing tokens and components were reused where appropriate.
- [ ] Contrast, focus visibility, and status meaning were considered.
- [ ] Effects support the product rather than obscuring information.
- [ ] A clear visual direction fits the audience and content instead of relying on defaults.

## Behavior and states

- [ ] Every visible control has a clear outcome.
- [ ] Relevant loading, success, empty, error, disabled, and stale-data states are covered.
- [ ] Pending actions never imply success before the operation completes.
- [ ] Keyboard focus, validation, overlays, retry, and repeated activation behave predictably.
- [ ] Reduced-motion preferences are respected.

## Data and charts

- [ ] Chart type matches the user question and data.
- [ ] Units, definitions, dates, source context, and scale are clear where relevant.
- [ ] Missing values are not confused with zero.
- [ ] Important information is not available only on hover or through color.
- [ ] Data-freshness and no-data states are accurate.

## Responsive and localization resilience

- [ ] Narrow, medium, and wide layouts were considered.
- [ ] Realistic and long content does not unexpectedly overflow.
- [ ] Zoom and text resizing do not hide essential information.
- [ ] Long translations, locale-aware dates/numbers, and RTL are checked when supported.
- [ ] No clipped focus rings or obstructed controls were found.
- [ ] Missing data, slow requests, failed requests, and retry paths are considered.

## Engineering and verification

- [ ] Changes follow repository conventions.
- [ ] Unneeded dependencies and oversized assets were avoided.
- [ ] Available build, test, lint, and type checks were run.
- [ ] Relevant console errors, layout stability, and interactions were reviewed when tooling allowed.
- [ ] Automated accessibility checks were supplemented with manual keyboard review where practical.
- [ ] Verification claims name what was actually checked.

## Handoff

- [ ] The summary explains what changed and why.
- [ ] Tested commands, viewports, and paths are identified.
- [ ] Untested areas, assumptions, and known gaps are disclosed.
