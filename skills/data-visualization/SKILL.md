---
name: data-visualization
description: Select, design, label, and verify charts and data displays that help users interpret evidence accurately and accessibly.
---

# Data visualization

## When to use

Use for analytics dashboards, reports, metrics, charts, tables, trend comparisons, financial summaries, monitoring views, or any interface that presents quantitative information for decisions.

## Workflow

### 1. Clarify the decision

Identify the question the reader must answer, the metric definition, units, population, time range, aggregation, source, and relevant caveats. Do not start by choosing a chart. If the data cannot answer the question, state the limitation.

### 2. Match encoding to the task

- Compare categories: usually a bar or dot plot with a clear common baseline.
- Show change over ordered time: line charts when continuity is meaningful; bars for discrete periods when comparison is clearer.
- Show composition: stacked bars for comparisons, or a part-to-whole chart only when the number of parts and comparisons make it legible.
- Show distributions: histogram, box plot, or dot plot depending on sample size and audience.
- Show relationships: scatter plot when both variables and their units matter.
- Show exact values or dense detail: a sortable, labeled table may be better than a chart.

Treat these as starting heuristics, not rigid rules. Avoid 3D distortion, decorative chart junk, and dual axes unless the reasoning and scale are explicit.

### 3. Encode faithfully

Use accurate scales, meaningful zero baselines when needed for comparison, consistent units, explicit ranges, and clear labels. Do not truncate or normalize an axis in a way that exaggerates differences. Distinguish missing data from zero. Identify estimates, forecasts, and uncertainty.

### 4. Provide context and hierarchy

State the metric and unit, date range, relevant baseline, and what changed. Add concise annotations only when they support an interpretation. Avoid presenting a correlation as causation or a metric without its denominator or definition when these change its meaning.

### 5. Design for accessibility

Use direct labels and patterns or text alongside color when categories must be distinguished. Ensure sufficient contrast, readable tick labels, keyboard access for interactive charts, and a concise textual summary or equivalent data table for important information. Do not force people to hover to obtain essential values.

### 6. Design dashboard states

Define initial, loading, no-data, filtered-empty, partial-data, stale-data, error, and refreshed states. Make active filters and date windows visible. Explain data freshness and avoid fake live values or synthetic metrics represented as real.

### 7. Validate behavior and performance

Test legend toggles, tooltips, sorting, filters, resizing, small screens, long labels, large values, negative values, and missing points. Check that data remains interpretable when animation is disabled. Consider rendering cost for large data sets and avoid needless re-rendering.

## Quality gates

- Chart type matches the user question and underlying data.
- Units, time range, definitions, scale, and data provenance are understandable.
- Encodings do not mislead; missing values are not confused with zero.
- Important information does not depend on color or hover alone.
- A text summary or equivalent table exists when needed.
- Loading, stale, empty, filtered, and error states are represented accurately.
- Conclusions do not exceed what the data supports.
