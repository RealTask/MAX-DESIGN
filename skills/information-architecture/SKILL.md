---
name: information-architecture
description: Plan and improve navigation, information hierarchy, page structure, findability, and task flows around real user goals.
---

# Information architecture

## When to use

Use when creating a new product structure, reorganizing a website or app, designing navigation, improving discoverability, reducing cognitive load, planning search and filters, or reviewing a multi-step task. For visual polish alone, use frontend-design or design-review instead.

## Workflow

### 1. Start from user jobs

Identify the main audiences, their top tasks, the vocabulary they use, the information needed for each task, and what a successful outcome looks like. Do not assume the company org chart is the right navigation model.

### 2. Inventory before reorganizing

Inspect routes, pages, sidebars, tabs, labels, breadcrumbs, search, filters, permissions, and existing analytics or feedback when available. Record current destinations and dependencies. Preserve deep links and familiar paths unless there is evidence to change them.

### 3. Build a simple content map

Group content by user intent and meaningful relationships. Distinguish global navigation, local navigation, in-page sections, actions, and utility links. Avoid duplicating destinations across several groups unless context genuinely helps.

### 4. Choose labels users can predict

Prefer familiar, concrete terms over internal team names, vague abstractions, or clever but ambiguous wording. Use one label for one concept consistently. Pair icons with text when meaning would otherwise be unclear; do not rely on icons alone for unfamiliar actions.

### 5. Optimize the primary task path

Map the shortest safe path from entry to completion. Remove unnecessary decisions, but retain explanations and confirmations that protect users from costly or irreversible mistakes. Use progressive disclosure when advanced options are useful but not needed by everyone.

### 6. Design discovery and recovery

For search, filters, categories, and lists, define no-query, results, no-results, loading, error, cleared-filter, and pagination states. Give users enough context to understand where they are and a clear way to recover when an assumption fails.

### 7. Validate across real conditions

Check navigation labels, long names, permissions, direct URLs, narrow screens, keyboard use, and likely first-time-user questions. Use tree tests, card sorting, analytics, or user testing where practical; mark hypotheses when no user evidence exists.

## Deliverables

Produce a compact sitemap or content map, primary task paths, label decisions, open questions, and acceptance checks. Separate observed behavior from proposed changes.

## Quality gates

- Navigation reflects user tasks rather than internal org structure.
- Labels are clear, consistent, and appropriately specific.
- Primary tasks have a visible, predictable path.
- Search, filters, empty results, permissions, and recovery are considered.
- Existing deep links and useful conventions are preserved or migrated deliberately.
- Assumptions and missing user evidence are disclosed.
