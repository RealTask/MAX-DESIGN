---
name: ui-testing
description: Build practical UI verification plans for interactions, responsive layouts, accessibility, visual regression, and real-world edge cases.
---

# UI testing

## When to use

Use when delivering a new interface, changing shared components or tokens, fixing UI bugs, reviewing a pull request, or deciding whether a screen is ready to ship.

## Workflow

### 1. Define risk and acceptance criteria

Translate the user goal into observable outcomes. Prioritize the primary path, destructive or irreversible actions, authentication and permissions, data loss, accessibility barriers, high-traffic components, and common failure modes. Avoid trying to test every pixel equally.

### 2. Inspect available tools first

Read project scripts and existing test conventions. Prefer the project's current tools for unit, component, browser, accessibility, and screenshot tests. Do not add a dependency before confirming the need and the project's package policy.

### 3. Cover behavior, not only rendering

Test the primary user journey and the most valuable alternate paths. Check navigation, form validation, success and error feedback, disabled controls, menus and dialogs, keyboard input, loading interruption, empty data, and retry behavior. Use deterministic fixtures for tests; do not rely on unstable production data.

### 4. Cover responsive and content extremes

Use named target viewports based on actual support rather than arbitrary devices alone. Test narrow, medium, and wide layouts; text zoom where possible; long translations; long names; large numbers; missing images; empty lists; and dense tables. Look for overflow, overlap, hidden actions, clipped focus rings, and unexpected shifts.

### 5. Combine automated and manual methods

Use unit and integration tests for logic and state transitions, end-to-end tests for critical journeys, automated accessibility checks for detectable violations, and visual regression for meaningful visual changes. Manually inspect keyboard flow, reading order, focus behavior, copy clarity, and the rendered page when tools allow. Automated tests are evidence, not proof of usability or full accessibility conformance.

### 6. Keep visual tests stable

Control fonts, viewport, color scheme, data, animations, and timing where possible. Mask or stabilize genuinely dynamic content without hiding product defects. Review screenshot differences rather than blindly updating baselines. Prefer assertions about user-visible behavior to brittle selectors tied to incidental markup.

### 7. Report results with scope

Record command or tool, pass/fail result, relevant environment, and what was not tested. Separate source inspection from browser execution, automated accessibility scans from manual assistive-technology testing, and screenshot review from actual interaction testing.

## Verification matrix

| Layer | Useful evidence |
| --- | --- |
| Static/build | lint, type check, build, token validation |
| Component | states, validation logic, keyboard and event behavior |
| End-to-end | critical user journeys and error recovery |
| Accessibility | automated scan plus manual keyboard and semantic review |
| Visual | viewport screenshots, realistic content, reviewed diffs |
| Performance | measured metrics or profiling when available |

## Quality gates

- The highest-risk user journeys have explicit acceptance checks.
- Critical success and failure paths are covered.
- Responsive layout and realistic content extremes are checked.
- Visual diffs are reviewed; baselines are not updated blindly.
- Accessibility methods and remaining gaps are stated honestly.
- Only checks actually run are reported as passed.
