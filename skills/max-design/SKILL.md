---
name: max-design
description: Coordinate end-to-end product interface design with discovery, implementation, critique, accessibility, and evidence-based verification.
---

# MAX-DESIGN

## When to use

Use for a new interface, a substantial redesign, or a quality-critical UI task spanning several concerns. For narrow tasks, select a focused skill instead.

## Workflow

1. **Understand the brief.** Identify users, goals, content, primary action, devices, constraints, and success criteria. Ask only questions that block progress; state reasonable assumptions otherwise.
2. **Inspect the codebase.** Read project instructions, routes, components, styles, tokens, assets, package scripts, and tests. Preserve existing functionality and conventions.
3. **Choose a direction.** Define the product personality, hierarchy, layout, typography, color roles, surfaces, and a few purposeful signature details. Do not treat trendy effects as a substitute for design.
4. **Extend the system.** Reuse or carefully improve semantic tokens and components. Avoid scattered magic values or an unnecessary competing design system.
5. **Implement the whole experience.** Make controls functional and cover relevant loading, empty, error, disabled, focus, hover, active, and success states.
6. **Refine by impact.** Fix task clarity and hierarchy first, then content, layout, typography, spacing, surface, and motion. Use focused skills for design-system work, critique, motion, and accessibility.
7. **Verify.** Run available build, test, lint, and type checks. Inspect real viewports and interactions when browser tooling permits. Review keyboard access, reduced motion, overflow, console errors, and performance where practical.
8. **Hand off honestly.** Explain the changes, design decisions, checks actually performed, and remaining gaps. Never claim tests or visual review that did not occur.

## Quality gates

- The main task and primary action are clear.
- Visual choices are coherent and appropriate to the product.
- Existing project conventions and working behavior are preserved.
- Responsive layouts and realistic content are considered.
- Controls work and relevant UI states are represented.
- Semantics, keyboard operation, focus, contrast, and reduced motion are addressed.
- Dependencies and effects have a reasonable performance cost.
- Verification statements match evidence; uncertainty is disclosed.
