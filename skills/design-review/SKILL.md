---
name: design-review
description: Critique an implemented interface using evidence-based findings prioritized by user impact, severity, scope, and practical remediation.
---

# Design review

## When to use

Use when reviewing an existing page, visual implementation, screenshot, component library, design-system change, or pull request affecting UI quality.

## Workflow

### 1. Establish review context

Identify intended users, primary tasks, target viewports, brand constraints, supported browsers, and the state being reviewed. Inspect project documentation and available source. Do not judge a screenshot as though it reveals behavior that is not visible.

### 2. Review in priority order

- **P0 — Blocking:** a major task cannot be completed, a severe accessibility barrier exists, destructive behavior is ambiguous, or critical content is hidden.
- **P1 — High impact:** the primary action is hard to find, information hierarchy fails, a major layout breaks on supported screens, or keyboard operation is materially blocked.
- **P2 — Moderate:** patterns are inconsistent, secondary hierarchy is weak, responsive density is awkward, or state feedback is unclear but not blocking.
- **P3 — Polish:** minor spacing, alignment, motion, or finish improvements with limited impact on outcomes.

Use severity based on evidence and impact, not personal taste. Do not inflate urgency.

### 3. Inspect key dimensions

Review task clarity; layout, alignment, density and reading order; type and content; color roles, contrast and status meaning; consistency with tokens; responsive behavior and overflow; keyboard, focus, labels, semantics and errors; feedback and touch usability; motion, reduced motion, loading stability, and likely performance cost.

### 4. Write actionable findings

Each finding should include severity and location, observed evidence and conditions, user impact, the smallest effective fix, and a way to verify the result. Avoid vague statements such as “make it cleaner” without a specific example and expected result.

### 5. Separate observations from hypotheses

If source, live page, interaction, or viewport is unavailable, say so. Mark assumptions and recommended follow-up tests. Do not claim a control is broken based only on a static screenshot.

### 6. Provide a prioritized plan

Lead with the highest-value fixes. Group related issues to avoid churn. Prefer fixing a shared token or component over patching multiple screens when the root cause is systemic.

## Quality gates

- Findings are grounded in observable evidence.
- Priority reflects user impact and severity.
- Each actionable finding includes a realistic remediation.
- Relevant viewport and interaction states are covered.
- Preference is separated from usability, accessibility, and implementation defects.
- Unverified assumptions and unperformed checks are disclosed.
