---
name: frontend-design
description: Design and implement distinctive, polished, responsive frontend interfaces with production-quality hierarchy, realistic content, working states, and maintainable code.
---

# Frontend design

## When to use

Use when creating a page, screen, component, landing page, marketing site, dashboard, app shell, or a substantial visual improvement to existing UI.

## Workflow

### 1. Understand the job

Identify who uses the interface, what they need to do, what information they need, and what happens after the primary action. Translate vague terms such as “premium” or “modern” into concrete properties: clear hierarchy, controlled density, consistent type, confident spacing, useful feedback, and strong content.

### 2. Inspect the stack

Read project instructions and inspect current files before coding. Reuse the established framework, router, styling method, components, icons, fonts, and asset pipeline. Check existing scripts. Do not add a dependency for something the project already does well.

### 3. Design the page structure

Plan the hierarchy before component details. Give each section a purpose. Establish a focal point, readable measure, alignment rules, spacing rhythm, and content order that supports the user journey. Use cards only when content represents a meaningful group; not every section needs a card.

### 4. Make a deliberate visual system

Choose a limited palette with semantic roles. Pair typography by role and hierarchy rather than using many unrelated fonts. Define reusable spacing, radius, border, shadow, and focus conventions. Use real product imagery or diagrams when they add information; avoid unrelated decoration and fabricated trust indicators.

### 5. Implement real behavior

Every control should have a purpose and a working outcome. Provide clear feedback for forms, navigation, toggles, tabs, dialogs, and asynchronous actions. Prefer semantic HTML, stable layout, reusable components, and readable code.

Include relevant loading, empty, error, disabled, hover, active, focus, success, and validation states. Do not simulate a backend success when no operation took place.

### 6. Design responsively

Start from content and interaction needs, not fixed device mockups. Let grids collapse, typography scale sensibly, navigation adapt, and controls remain usable at narrow widths. Prevent horizontal overflow, clipped focus rings, and accidental overlap. Check long labels and realistic data.

### 7. Add polish last

Use surfaces, borders, shadows, gradients, and animation only after hierarchy and spacing work. Give decorative effects a reason and provide alternatives when support, contrast, or performance makes an effect unsuitable.

### 8. Verify in context

Run appropriate project checks. When browser tools are available, inspect the rendered implementation at narrow, medium, and wide viewports and test primary interactions. Otherwise state clearly that the result was reviewed from code but not visually exercised in a browser.

## Quality gates

- The first screen explains the product and next useful action.
- Content hierarchy, text length, alignment, and spacing are intentional.
- Visual decisions form a coherent system instead of a collection of effects.
- Real content and edge cases do not break the layout.
- All visible actions work or are clearly unavailable.
- Keyboard focus, semantics, labels, contrast, and reduced motion are addressed.
- Layout remains stable while fonts, images, and asynchronous content load.
- Code follows project conventions and avoids unnecessary dependencies.
