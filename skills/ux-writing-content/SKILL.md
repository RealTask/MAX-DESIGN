---
name: ux-writing-content
description: Write clear, consistent interface copy for navigation, buttons, forms, onboarding, empty states, errors, confirmations, and notifications.
---

# UX writing and content design

## When to use

Use when writing or reviewing product labels, calls to action, navigation, helper text, validation messages, empty states, onboarding, notifications, confirmations, or any copy that changes what users understand or do.

## Workflow

### 1. Identify the user and moment

Determine what the user is trying to accomplish, what they already know, what information they need now, and what the next decision will be. Write for the current state of knowledge, not for an internal product team.

### 2. Set the content contract

Define the product voice in a few useful traits, such as calm, direct, supportive, technical, or playful. Match the brand without sacrificing clarity. Keep labels consistent across screens and distinguish interface terms that have different meanings.

### 3. Write for action and outcome

Use specific verbs for actions (“Save changes”, “Invite member”) and describe the outcome when ambiguity matters. Buttons should say what happens, not rely on generic labels like “Submit” or “Continue” when a more informative label fits. Do not make a button promise an outcome the product cannot guarantee.

### 4. Design states as a set

For each relevant feature, cover:
- Empty: explain why the area is empty and the next useful action.
- Loading: communicate what is happening without inventing time estimates.
- Error: say what failed, what remains safe, and how to recover.
- Validation: identify the problem and how to fix it.
- Success: confirm the completed action and any relevant next step.
- Destructive action: explain the consequence clearly and proportionately.

Do not blame the user, expose sensitive implementation details, or present unknown causes as facts.

### 5. Keep copy scannable and inclusive

Put essential information first. Use concrete language, short paragraphs, descriptive headings, and familiar terms. Avoid unexplained jargon, idioms that translate poorly, color-only wording, shame, and artificial urgency. Respect people using translation, screen readers, zoom, or speech input.

### 6. Treat content as part of the layout

Use realistic copy lengths and localizable strings in implementation. Check truncation, wrapping, pluralization, dates, numbers, and text expansion. Avoid baking text into images or concatenating fragments that make translation impossible.

### 7. Test comprehension

Check labels in context, not in isolation. Ask whether users can predict what an action does, understand an error, and recover without losing input. Use content reviews or usability tests where possible; label speculative improvements as hypotheses.

## Quality gates

- Every label and message has a clear user purpose.
- Actions describe a predictable outcome.
- Error copy gives a recovery path without inventing a cause.
- Empty, loading, success, and destructive states are consistent.
- Copy is scannable, inclusive, and ready for localization.
- No fake urgency, deceptive claims, or fabricated system status is introduced.
- Content lengths are checked in realistic layouts.
