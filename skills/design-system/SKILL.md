---
name: design-system
description: Audit, document, create, and safely extend a product design system with semantic tokens, component rules, themes, and migration guidance.
---

# Design system

## When to use

Use when a project needs a coherent design language, styles have drifted, tokens should be documented, a theme is required, or repeated UI components need consistent visual and behavioral rules.

## Workflow

### 1. Audit existing signals

Inspect repository guidance, design documentation, global styles, theme configuration, component libraries, CSS variables, utility configuration, UI primitives, Storybook, and representative screens. Record what exists before suggesting changes. Distinguish observed values from inferred ones.

### 2. Classify the project

Choose one path:
- **Document:** a useful system exists; describe it and fill evidence-based gaps.
- **Extend:** the system is sound but lacks specific tokens or components; add only what is missing.
- **Propose:** no coherent system exists; offer a direction and identify decisions needing confirmation.
- **Migrate:** conflicting patterns exist; map old values to target tokens and stage the change.

Do not silently replace an established brand or delete tokens that may be in use.

### 3. Define token layers

Separate raw values from semantic roles.

- **Primitive tokens:** underlying color, dimension, font, radius, and timing values.
- **Semantic tokens:** roles such as page background, raised surface, primary text, muted text, border, focus ring, positive status, and destructive action.
- **Component tokens:** optional component-specific values where a genuinely repeated need exists.

Prefer names that describe purpose rather than appearance. A semantic token such as surface-raised adapts better than pale-gray-card.

### 4. Cover the full design vocabulary

Document color roles and theme behavior; typography families, weights, scales and line heights; spacing, layout widths and breakpoints; shape, border, elevation and focus; motion durations and reduced-motion alternatives; component anatomy, variants, states, content and responsive behavior; plus iconography, imagery, empty states, and content tone.

### 5. Encode for the actual stack

Use the project's existing token format when possible: CSS custom properties, theme objects, utility configuration, design-token JSON, or another native convention. The example at examples/design-tokens.json is a reference, not an instruction to migrate every project to JSON.

Keep values centralized. Avoid duplicate tokens, circular aliases, opaque abbreviations, and unexplained one-off values.

### 6. Plan a safe migration

Map existing values to semantic replacements. Migrate a small representative surface first, inspect visual differences, then apply systematically. Preserve names that may be externally consumed until usage is understood. Make changes reviewable and reversible.

### 7. Validate and document

Check token resolution, theme completeness, consistent component states, and whether examples match implementation. Document exceptions and reasons. If exact values cannot be measured, mark them as estimates rather than extracted facts.

## Quality gates

- Existing styles and conventions were inspected first.
- Reused values have a clear role and stable name.
- Components use tokens rather than duplicated magic values.
- States and themes maintain contrast and meaning.
- Responsive, focus, and motion behavior are defined where needed.
- Migration impact and exceptions are documented.
- Tokens validate in the project's actual format.
