# Visual refinement and anti-slop review

This guide helps an agent improve an existing interface without replacing its product identity with another template. It adapts a useful audit-and-pass workflow from `heydamir/unslop`, then extends it with MAX-DESIGN's emphasis on evidence, accessibility, responsive behavior, maintainability, and honest verification.

## When to use it

Use this guide when a screen feels generic, over-decorated, inconsistent, visually noisy, or unfinished; when a user asks to polish or refine an existing interface; or when a visual review needs a repeatable process.

Do not run a full redesign by default. A screen can be distinctive and intentionally expressive without matching a narrow definition of minimalism. If the existing system is coherent, preserve it and fix only demonstrated problems.

## 1. Inspect and record before editing

Review the live page or rendered screen at its intended viewport, then inspect its source, shared components, tokens, fonts, icons, assets, and responsive rules when available.

Record:
- The product, audience, main user task, and primary action.
- Existing brand signals that should remain: logo, established colors, typography, illustration style, content voice, and interaction conventions.
- What is actually visible and reproducible, including the viewport and state.
- Which observations are usability, accessibility, consistency, or performance issues, and which are only matters of taste.
- Claims, metrics, testimonials, and sample data that need confirmation.

A screenshot does not prove an interaction works or fails. Mark behavior that has not been exercised as unverified.

## 2. Audit for visual noise and template patterns

Use the checklist as a set of prompts, not a universal ban list. A gradient, serif, pill, dark surface, illustration, or animation can be correct when it expresses the product or communicates state. Flag it when it has no clear job, conflicts with the brand, harms legibility, or competes with the task.

### Surface and color
- Several competing accents or tinted surfaces make every region equally prominent.
- Decorative hue gradients, gradient text, glows, blurred color washes, or glass effects obscure hierarchy or lack a product reason.
- Borders, shadows, and surface treatments vary arbitrarily between equivalent components.
- Status, focus, and action colors are inconsistent or rely on color alone.

### Typography and content
- Too many type sizes, weights, families, or tracking styles weaken hierarchy.
- Small text is cramped, low contrast, tightly tracked, or difficult to scan.
- Short labels are shouty, vague, overlong, or punctuated inconsistently.
- Headlines could describe almost any product.
- Numbers use inconsistent formats or omit units and comparison context.
- Placeholder content, fake metrics, invented testimonials, or unsupported trust claims make the interface feel artificial.

### Icons and components
- Emoji are being used as a substitute for a coherent icon system.
- Icons vary in family, size, stroke, color, or alignment without meaning.
- Every item is a pill, badge, card, or floating panel even when plain text or a divider would be clearer.
- Repeated cards have identical visual weight despite different importance.
- Charts decorate the screen instead of answering a defined question.

### Spacing and composition
- Sibling controls or rows have arbitrary heights, gaps, or padding.
- Related items are spaced farther apart than separate groups.
- Alignment changes without a reason or the main action is hard to locate.
- A landing hero stacks elements by habit, leaves a dead area, or has no meaningful visual hierarchy.
- Mobile is a shrunk desktop layout rather than a useful re-prioritization.

### Visuals and motion
- The image does not explain the product, is inconsistent with the page's materials, or includes baked-in text that should be real interface content.
- Decorative visuals repeat across sections without adding information.
- Non-live elements pulse, shimmer, float, or move continuously.
- Transitions animate layout properties expensively or make controls feel slow.
- Reduced-motion preferences or a no-motion fallback are missing.

For every finding, write **location → observed evidence → user impact → smallest useful correction**. Avoid labels such as “AI slop” without explaining the concrete behavior.

## 3. Choose the smallest effective refinement mode

- **Repair:** a functional, accessibility, contrast, responsive, or content defect exists. Correct it first without changing unrelated visual decisions.
- **Polish:** the design is mostly coherent. Keep its palette, type, layout, and visual language; refine only the audited inconsistencies.
- **Recompose:** the screen lacks a clear hierarchy or coherent direction. Propose a product-specific direction and restructure only the parts needed to support the task.
- **No redesign needed:** the screen is already coherent. State that plainly and offer a few precise, optional refinements rather than changing it for novelty.

If a proposed change would replace an established brand or substantially alter the page's character, explain the trade-off before taking that direction unless the user has already authorized a redesign.

## 4. Write a compact design direction

For substantial polish or recomposition, define five anchors before implementation:

1. **Product:** what it does and for whom, in one sentence.
2. **Character:** two or three concrete traits supported by the product, not generic labels such as “modern” or “premium”.
3. **World:** the materials, environment, or subject matter that naturally belongs to this product.
4. **Focal moments:** one or two places where richer color, detail, imagery, or data will help users understand the product.
5. **Signature:** one restrained, repeatable detail that belongs to this product.

Then define the page hierarchy, primary action, typography roles, semantic color roles, content density, responsive changes, motion rationale, and trade-offs. Take the direction from the product and its existing identity; do not impose a fashionable palette or layout.

## 5. Refine in a deliberate order

Complete each pass across the whole screen before moving on. The order reduces rework: spacing changes affect composition, copy length affects typography, and visuals should fit a layout that already works.

### Pass 1 — Spacing and alignment
- Normalize repeated gaps, row heights, control dimensions, and sibling padding.
- Use the project's established spacing scale. If none exists, choose a small consistent scale; a 4px base can be a useful starting point, not a requirement.
- Group related content more tightly than separate sections.
- Check the result at narrow and wide widths rather than optimizing a single screenshot.

### Pass 2 — Color and surfaces
- Preserve real brand colors and semantic status meanings.
- Establish clear roles for page, surface, raised surface, primary text, secondary text, border, action, focus, and status.
- Reduce competing accents and decorative effects when they obscure the focal point.
- Check actual foreground/background contrast; do not infer accessibility from a palette preview.

### Pass 3 — Icons and symbols
- Reuse the project's existing icon family when it is coherent.
- Otherwise select one consistent set and align icon boxes, size, stroke, and text color.
- Remove symbols that add no information. Do not replace a meaningful brand illustration or symbol merely to satisfy a style rule.

### Pass 4 — Copy and content
- Make labels specific and concise; explain what actions do.
- Keep headings product-specific and avoid generic hype.
- Show units, date ranges, comparison baselines, and source context for data.
- Use plausible sample content, clearly marked as sample where appropriate. Never fabricate customers, reviews, certifications, or performance claims.

### Pass 5 — Typography
- Preserve a recognizable brand typeface when it is intentional and usable.
- Use a limited scale with clear roles for page titles, section headings, body, labels, helper text, and numeric data.
- Use weight and size consistently; reserve stronger weights for genuine emphasis.
- Check line length, line height, wrapping, zoom, fallback fonts, and long localized strings.

### Pass 6 — Layout and hierarchy
- Keep the product's important content and user journey; change section order only when there is evidence the current order harms comprehension.
- Give the main task a clear focal point and one obvious primary action.
- Use cards only for meaningful grouping, not as a default wrapper for every block.
- For landing pages, consider a product-specific split or scene only when it improves the story. For dense apps, retain usable app proportions and prioritize content rather than shrinking everything into a centered column.
- Re-compose compact layouts for their input mode and task priorities.

### Pass 7 — Component details
- Make radii, borders, shadows, control heights, active states, and spacing consistent across equivalent components.
- Use visual emphasis to communicate priority, status, selection, or interaction.
- Give hover, focus-visible, pressed, disabled, loading, and error states distinct and understandable treatments.
- Remove badges, pills, and decoration that do not carry useful meaning.

### Pass 8 — Visuals
- Ask whether the screen needs an image at all. Most settings pages and dashboards do not.
- Prefer a real product preview, a meaningful chart, authentic content, or one product-relevant object over abstract filler.
- For a hero, choose one visual idea that can be explained in a sentence and leave a calm area for the copy.
- Do not generate an image to compensate for unclear product messaging. Preserve a consistent art direction and provide useful alt text.
- Keep image generation optional and obtain approval before any paid external generation.

### Pass 9 — Motion
- Keep motion when it explains a state change, spatial relationship, or feedback.
- Remove loops that imply activity when nothing is happening and effects that compete with reading.
- Prefer brief changes to color, opacity, or transform over repeated movement or expensive layout animation.
- Respect reduced-motion settings and ensure the final state remains understandable without animation.

## 6. Verify the refinement

Compare the result against the audit, not against a trend or another product. Check:
- Primary user task and all visible controls.
- Narrow, medium, and wide layouts, including overflow and long content.
- Keyboard navigation, visible and unobscured focus, labels, and semantic structure.
- Text and focus contrast on the actual surfaces.
- Loading, empty, error, disabled, success, and stale states where applicable.
- Reduced motion, image loading, layout stability, and performance cost.
- Existing automated checks and relevant browser interactions.

Render again when browser tools are available. Report exactly what was inspected, what was tested, what remains unverified, and any assumptions. A code-only review is not a visual browser verification.

## Quality gates

- The product and user task remain recognizable.
- Every change can be tied to an audit finding or an explicit design decision.
- Existing brand assets and coherent patterns are preserved unless a change is authorized and justified.
- The focal point is clear without decorative competition.
- Content and claims are grounded; sample data is not presented as real.
- Responsive behavior, accessibility, reduced motion, and real interaction states remain intact.
- The final report distinguishes observed defects, subjective preferences, and unverified assumptions.

## Attribution and adaptation

This guide includes a substantially rewritten adaptation of audit and staged-refinement concepts from [unslop by Damir Sokolovsky](https://github.com/heydamir/unslop), licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). Credit: Damir Sokolovsky, [@heydamir](https://x.com/heydamir). MAX-DESIGN adds its own preservation, evidence, accessibility, resilience, and verification requirements; no upstream scripts, datasets, or visual assets are bundled here.
