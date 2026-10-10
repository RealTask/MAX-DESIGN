# Repository instructions for coding agents

These instructions apply when editing the MAX-DESIGN repository itself.

## Before editing

- Read the README and the skill being changed.
- Preserve the skill package format: YAML-style front matter, a clear activation section, a workflow, and measurable quality gates.
- Inspect neighboring skills before introducing overlapping guidance.
- Make the smallest complete change that solves the request.

## Content quality

- Be concrete, operational, and framework-aware without forcing a framework.
- Separate required behavior from optional techniques.
- Never instruct an agent to replace an established design system blindly.
- Prefer semantic HTML and native platform behavior when practical.
- Distinguish automated checks from manual visual or assistive-technology review.
- Do not claim WCAG conformance, browser testing, or performance results without evidence.
- Do not include secrets, private user information, or third-party skill content copied wholesale.

## Verification

Run npm test after changing skills or token examples. Review the diff for clarity, duplication, broken paths, and unintended scope expansion.
