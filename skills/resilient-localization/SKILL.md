---
name: resilient-localization
description: Harden interfaces against slow networks, unexpected data, long text, localization, right-to-left layouts, and recoverable failures.
---

# Resilience and localization

## When to use

Use when preparing a UI for real-world data, multiple languages or locales, slow or unreliable networks, permissions, asynchronous content, varied input lengths, or production release hardening.

## Workflow

### 1. Inspect the supported environment

Determine supported locales, date and number formats, text direction, browsers, input modes, network expectations, permissions, and data contracts. Reuse existing localization and error-handling architecture instead of introducing another layer.

### 2. Keep content localizable

Use stable message keys and complete messages rather than concatenating sentence fragments. Support placeholders, plural rules, contextual translator notes, and locale-aware formatting for dates, times, numbers, and currency. Never assume translated strings have the same length as English.

### 3. Support direction and expansion

Check right-to-left layouts when in scope. Prefer logical CSS properties such as inline-start and block-end when appropriate. Test long labels, compound words, different scripts, larger text settings, and missing translations. Avoid embedding essential text in images.

### 4. Model failure and delay

For asynchronous operations, define idle, loading, success, empty, stale, offline, partial, error, and retry states when relevant. Preserve safe user input across failure. Provide cancellation or retry when feasible. Do not show fake progress, fabricate data, or imply completion before the operation succeeds.

### 5. Harden against unpredictable data

Check null and missing fields, unusually long strings, unexpected units, large and negative values, empty arrays, duplicate items, stale records, expired sessions, permission denial, and partial responses. Truncate visually only when the full value remains discoverable where important; never silently destroy user input.

### 6. Make layouts resilient

Use intrinsic sizing and flexible constraints instead of fixed heights that clip translated text. Ensure tables, sidebars, dialogs, toasts, and navigation can accommodate expansion. Avoid layout shifts as fonts and media load. Keep essential actions available at narrow widths and with zoom.

### 7. Protect user trust

Explain what can be recovered and what was saved. Use precise timestamps or freshness labels when relevant. Confirm only real outcomes. Log technical details appropriately without exposing secrets or unnecessary personal data in user-facing messages.

### 8. Validate conditions

Test with at least one long-string scenario, an alternate locale if supported, empty and malformed data, slow or failed requests, and responsive layouts. Test RTL only when the product supports it. Clearly mark environments and cases that were not tested.

## Quality gates

- Copy and formats use the project's localization conventions.
- Long translations and RTL behavior are considered when in scope.
- Network, permission, empty, stale, and failure states reflect actual system status.
- Unexpected and missing data does not break or misrepresent the interface.
- User input is preserved across recoverable errors where safe.
- Layouts remain usable at narrow widths and increased text sizes.
- Sensitive technical details are not exposed to end users.
- Verification claims match the environments and scenarios actually tested.
