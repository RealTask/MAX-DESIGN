---
name: interaction-motion
description: Design purposeful micro-interactions, transitions, feedback states, and responsive motion that clarify behavior without harming accessibility or performance.
---

# Interaction and motion

## When to use

Use when adding animation, page transitions, feedback, hover or press states, overlays, scroll behavior, loading transitions, or other dynamic interface behavior.

## Workflow

### 1. Define the purpose

Every movement should show a state change, preserve spatial context, communicate hierarchy, acknowledge input, guide attention, or make a complex transition easier to understand. If removing it improves clarity or speed, remove it.

### 2. Map states before timing

List relevant states and transitions: resting, hovered, focused, pressed, loading, expanded, success, and error. Make the state understandable when animation is disabled or unavailable.

### 3. Choose motion by role

Use the shortest movement that conveys the relationship. Small control feedback should feel immediate; larger surface transitions may need more time to preserve context. Avoid applying one duration to every interaction. Prefer opacity or transform over effects that repeatedly trigger expensive layout or paint work.

### 4. Preserve input and navigation

Animations must not delay important actions unnecessarily. Keep focus behavior predictable when dialogs, menus, tabs, or routes change. Do not animate focus away from the active control or create a visual state that differs from actual application state.

### 5. Respect reduced motion

Support the prefers-reduced-motion media query. Reduce or remove nonessential movement, parallax, looping decoration, and large spatial transitions. Keep essential feedback available through immediate state changes, text, or other non-motion cues. Never make a task dependent on animation.

### 6. Handle interruption and failure

Repeated input, rapid navigation, network delay, interrupted transitions, and reduced-motion settings must not leave the UI stuck. Avoid decorative loops that compete with important information. Do not imply progress that is unknown.

### 7. Check performance

Prefer transform and opacity for common transitions. Inspect expensive filters, large blurred layers, scroll-linked work, and many simultaneous animated elements. Avoid continuously animating layout properties without a strong reason. Pause work for offscreen or inactive components when practical.

### 8. Validate behavior

Test keyboard input, touch, pointer, reduced motion, repeated activation, and narrow screens where relevant. Check that motion does not cause flashing, disorientation, obstruction, or missed input. Use rendered behavior when browser testing is available.

## Quality gates

- Every animation has a clear user-centered purpose.
- State changes remain understandable without motion.
- Reduced-motion preferences are respected.
- Keyboard focus and input timing remain predictable.
- Motion is brief, coherent, interruptible, and performant.
- No important action depends on decorative movement.
