---
name: forms-ux
description: Design accessible, resilient forms and multi-step input flows with sensible validation, clear errors, preserved data, and safe submission behavior.
---

# Forms and input UX

## When to use

Use for registration, settings, search forms, onboarding, checkout, profile editing, payments, surveys, filters, or any flow where people enter, change, or confirm data.

## Workflow

### 1. Clarify the task and data

Identify the user goal, required fields, optional fields, data sensitivity, validation rules, consequences of submission, and whether the task can be saved or resumed. Ask only for information needed at this step. Explain why unusually sensitive or unexpected data is required.

### 2. Choose a safe structure

Group related fields by user mental model. Use a single page when the task is short and easy to review. Split longer tasks into meaningful steps only when this reduces cognitive load, and show progress and a way to review or return. Do not use a wizard merely to increase clicks.

### 3. Use appropriate controls

Prefer native labels, inputs, selects, checkboxes, radios, and buttons. Choose a control that matches the answer type and expected number of choices. Keep labels persistent; placeholders are examples or hints, not replacements for labels. Mark required and optional fields clearly and provide input examples in a format users can follow.

### 4. Validate with useful timing

Validate format and business rules at a time that helps recovery. Use client-side checks for quick feedback but repeat authoritative validation on the server. Avoid presenting errors before a user has had a reasonable chance to answer. Distinguish field errors from form-level or service errors.

### 5. Make errors recoverable

Associate each error with its field and provide a plain-language correction. On failed submission, preserve safe, already-entered values; move focus or provide an error summary when useful; and make errors available to assistive technology. Never imply data was saved when submission failed.

### 6. Handle submission states

Design idle, invalid, submitting, success, retry, offline, and server-error states. Prevent duplicate submissions when appropriate, but do not leave the button permanently disabled after a recoverable failure. Explain whether changes were saved, are pending, or were discarded. Add confirmation for destructive or high-consequence actions in proportion to risk.

### 7. Support autofill and varied devices

Use correct input types, autocomplete tokens, and input modes when relevant. Make focus order logical, target sizes comfortable, keyboard behavior native, and errors understandable at zoom. Test long text, pasted values, password managers, mobile keyboards, slow networks, and interrupted submissions.

### 8. Verify the whole flow

Test a valid path, every important validation failure, server rejection, repeated submission, and recovery. Review the form with keyboard navigation and automated accessibility checks where available. A passing linter does not prove a usable form.

## Quality gates

- Only necessary information is requested, with purpose explained when needed.
- Labels, instructions, required/optional markers, and validation are programmatically associated.
- Errors explain the correction and preserve safe user input.
- Submission states accurately reflect real system status.
- Keyboard, autofill, paste, zoom, and mobile input are considered.
- Server-side validation remains authoritative.
- Risky or irreversible actions receive proportionate safeguards.
