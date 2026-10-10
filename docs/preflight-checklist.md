# Preflight checklist

Use this checklist before presenting a meaningful UI change as complete. Skip irrelevant checks, but explain important untested areas.

## Product and hierarchy

- [ ] The screen supports a clear user goal.
- [ ] Primary and secondary actions are distinguishable.
- [ ] Content labels, empty states, and errors are specific.
- [ ] No fabricated claims, fake metrics, or irrelevant filler were added.

## Visual system

- [ ] Typography, spacing, color roles, shape, and elevation are consistent.
- [ ] Existing tokens and components were reused where appropriate.
- [ ] Contrast and focus visibility were considered.
- [ ] Effects support the product rather than obscuring information.

## Behavior

- [ ] Every visible control has a clear outcome.
- [ ] Loading, success, empty, error, and disabled states are covered where relevant.
- [ ] Keyboard focus, validation, and overlay behavior are predictable.
- [ ] Reduced-motion preferences are respected.

## Responsive layout

- [ ] Narrow, medium, and wide layouts were considered.
- [ ] Realistic and long content does not unexpectedly overflow.
- [ ] Zoom and text resizing do not hide essential information.
- [ ] No clipped focus rings or obstructed controls were found.

## Engineering

- [ ] Changes follow repository conventions.
- [ ] Unneeded dependencies and oversized assets were avoided.
- [ ] Available build, test, lint, and type checks were run.
- [ ] Relevant console errors and layout stability were reviewed when tooling allowed.

## Handoff

- [ ] Verification claims match the checks actually performed.
- [ ] Remaining gaps and assumptions are documented.
- [ ] The summary explains what changed and why.
