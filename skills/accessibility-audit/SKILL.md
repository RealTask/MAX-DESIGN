---
name: accessibility-audit
description: Audit and improve interface accessibility across semantics, keyboard use, focus, forms, contrast, zoom, touch, and reduced-motion behavior.
---

# Accessibility audit

## When to use

Use before shipping UI, when building custom controls, reviewing forms or navigation, working from design screenshots, or changing focus, motion, contrast, or responsive access.

## Workflow

### 1. Inspect the implementation

Review the actual DOM and source when available. Determine whether controls use native semantic elements, landmarks and headings communicate structure, and labels, descriptions, and validation are programmatically connected. A screenshot alone cannot establish semantic or screen-reader behavior.

### 2. Check keyboard operation

Navigate without a pointer. Confirm logical tab order, visible focus, working activation, escape behavior for dismissible overlays, and focus return after a dialog closes. Ensure users cannot become trapped unintentionally and sticky UI does not cover focused elements.

### 3. Check names, roles, and state

Interactive controls need accessible names and correct semantics. Prefer native buttons, links, inputs, selects, and checkboxes where possible. Custom widgets must implement expected keyboard patterns and expose state. Do not add ARIA roles that conflict with native semantics.

### 4. Check text and contrast

Review text resizing, wrapping, readable line lengths, color contrast, focus indicators, non-text boundaries, and status messages. Do not communicate meaning through color alone. Verify important combinations against applicable WCAG success criteria rather than judging by eye.

### 5. Check forms and feedback

Provide persistent labels, clear instructions, associated error messages, correction guidance, and appropriate announcements for asynchronous results. Errors should identify the affected field and explain how to resolve the issue. Do not erase user input unnecessarily after failure.

### 6. Check responsive and input modes

Test zoom and narrow layouts. Look for clipped content, unnecessary horizontal scrolling, overlapping controls, tiny or crowded targets, hover-only information, and gestures without alternatives. Ensure touch and pointer interaction do not block keyboard access.

### 7. Check motion and media

Respect reduced-motion preferences. Provide captions or text alternatives for meaningful media, and appropriate alternative text for informative images. Decorative images should not add redundant announcements. Avoid disruptive autoplay.

### 8. Verify with layered methods

Use automated checks for detectable problems, then manually inspect keyboard flow and semantics. Test with real assistive technology when the risk and environment justify it. Automated tools cannot prove conformance. Report tools, scope, conditions, and untested areas.

### 9. Prioritize fixes

Fix barriers that block core tasks first. Give each issue a location, evidence, impact, remediation, and verification method. Distinguish observed failures from risk hypotheses. Do not make blanket conformance claims without appropriate evaluation.

## Quality gates

- Semantic structure and accessible names are understandable.
- All functionality is keyboard-operable and focus is visible.
- Custom controls expose correct role, name, value, and state.
- Text, controls, boundaries, and focus meet applicable contrast expectations.
- Zoom, text wrapping, errors, and status feedback remain usable.
- Color is not the sole source of meaning.
- Reduced-motion settings and text alternatives are handled.
- Test coverage, tools, and limitations are reported honestly.
