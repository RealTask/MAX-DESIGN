# 🎨 MAX-DESIGN

**One complete, production-minded UI/UX skill for AI coding agents.** Build distinctive, accessible, responsive interfaces with coherent systems and real behavior—not generic template UI.

**Discover → Define → Design → Build → Critique → Verify** ✨

## 🚀 What is MAX-DESIGN?

MAX-DESIGN combines the complete product-interface workflow with specialist playbooks for frontend design, information architecture, UX writing, forms, design systems, data visualization, design review, motion, accessibility, localization resilience, and UI testing.

**Install once, use everything.** The repository root contains the `SKILL.md` skill entrypoint. When you install from this repository with the Skills CLI, the CLI discovers the root skill and installs the toolkit as **one `max-design` skill**, rather than twelve separate peer skills.

The installed skill includes its `SKILL.md`, specialist playbooks, decision documents, examples, scripts, and searchable design-knowledge catalog. It is framework-agnostic and has no third-party runtime dependencies. The bundled validator requires Node.js 20+.

## 📦 Installation

### ✅ Skills CLI (recommended)

Install the complete toolkit as one skill:

```bash
npx skills add RealTask/MAX-DESIGN
```

List available skills before installing:

```bash
npx skills add RealTask/MAX-DESIGN --list
```

Install only the unified skill explicitly:

```bash
npx skills add RealTask/MAX-DESIGN --skill max-design
```

Install it to all detected supported agents:

```bash
npx skills add RealTask/MAX-DESIGN --all
```

Install globally for the selected agent(s):

```bash
npx skills add RealTask/MAX-DESIGN --global
```

Target a specific agent, for example Codex or Claude Code:

```bash
npx skills add RealTask/MAX-DESIGN --agent codex --skill max-design
npx skills add RealTask/MAX-DESIGN --agent claude-code --skill max-design
```

The CLI installs the whole root skill directory, so the paths `docs/`, `examples/`, `knowledge/`, `scripts/`, and `skills/` remain available inside the installed `max-design` directory. See the [Skills CLI documentation](https://github.com/vercel-labs/skills) for supported agents and options.

**Upgrading from the previous multi-skill layout:** an older installation may still have the 12 skills installed as separate directories. Remove those old standalone entries from the agent/location where you installed them, then run the install command above again. The CLI does not automatically remove directories left by an earlier installation.

### 🛠️ Manual installation

Copy the full toolkit into one `.agents/skills/max-design/` directory. Do not copy only `skills/*`: the scripts and design-knowledge catalog are siblings of that folder.

**macOS / Linux:**

```bash
mkdir -p .agents/skills/max-design
cp SKILL.md README.md skill.json package.json .agents/skills/max-design/
cp -R docs examples knowledge scripts skills .agents/skills/max-design/
```

**Windows PowerShell:**

```powershell
New-Item -ItemType Directory -Force .agents/skills/max-design
Copy-Item SKILL.md, README.md, skill.json, package.json, docs, examples, knowledge, scripts, skills -Destination .agents/skills/max-design -Recurse -Force
```

For a different agent, use that agent's supported skill directory and keep the same single `max-design/` folder. Preserve the folder structure so relative documentation and script paths continue to work.

## 🧠 Bundled specialist playbooks

These are reference workflows **inside the unified MAX-DESIGN skill**, not separate skills installed side by side.

| Playbook | Purpose |
| --- | --- |
| **max-design** | Coordinates discovery, visual direction, implementation, critique, and verification |
| **frontend-design** | Builds distinctive, polished, responsive interfaces |
| **information-architecture** | Structures navigation, hierarchy, search, and user task flows |
| **ux-writing-content** | Writes clear labels, helper text, onboarding, success, and error copy |
| **forms-ux** | Designs accessible forms, validation, submission, and recovery |
| **design-system** | Audits and safely extends tokens, themes, and reusable components |
| **data-visualization** | Selects and verifies accurate, accessible charts and data displays |
| **design-review** | Prioritizes evidence-based UI findings by user impact |
| **interaction-motion** | Adds purposeful transitions and understandable motion |
| **accessibility-audit** | Reviews semantics, keyboard use, focus, contrast, and reduced motion |
| **resilient-localization** | Hardens UI against long text, localization, unexpected data, and failures |
| **ui-testing** | Plans practical interaction, responsive, accessibility, and visual checks |

MAX-DESIGN reads only the specialist playbooks relevant to a task and combines them into one coherent workflow.

## 🔎 Searchable design knowledge

The merged, offline-first knowledge base combines `knowledge/design-patterns.json` with `knowledge/advanced-patterns.json`. It covers visual directions, product profiles, page and interaction patterns, adaptive density, semantic color, typography, motion, UX/accessibility, charts, stack guidance, AI streaming and failure states, privacy and permissions, account/billing flows, search/filter persistence, data quality, and evidence-based performance review. The guidance is authored for MAX-DESIGN; it does not bundle UI/UX Pro Max data files or scripts. Research references and limits are documented in `docs/knowledge-sources.md`.

Run these commands **from the installed `max-design` directory**:

```bash
node scripts/search-design-knowledge.mjs "dashboard charts"
node scripts/search-design-knowledge.mjs "AI assistant output states" --domain product
node scripts/search-design-knowledge.mjs "editorial" --domain style --limit 5
node scripts/search-design-knowledge.mjs "dark dashboard palette" --domain color
node scripts/search-design-knowledge.mjs "reduced motion" --domain motion
node scripts/search-design-knowledge.mjs "form errors" --domain ux
node scripts/search-design-knowledge.mjs "chart accessibility" --domain chart
node scripts/search-design-knowledge.mjs "responsive charts" --domain stack
node scripts/search-design-knowledge.mjs "responsive charts" --require-all --limit 5
node scripts/search-design-knowledge.mjs "modal focus lifecycle" --domain ux
node scripts/search-design-knowledge.mjs "offline retry" --domain ux
node scripts/search-design-knowledge.mjs "subscription invoice" --domain page
node scripts/search-design-knowledge.mjs "Core Web Vitals" --domain stack
```

Domains: `all`, `direction`, `page`, `interaction`, `density`, `product`, `style`, `color`, `typography`, `motion`, `ux`, `chart`, and `stack`. Use `--json` for structured output. Search uses weighted fields, related terms, Unicode normalization, related-term expansion, and stable ordering. Matches are contextual starting points, not automatic style prescriptions; verify colors, APIs, accessibility, and framework-version assumptions against the actual project.

## 🧭 Workflow

1. **Understand the job.** Identify users, primary tasks, content, constraints, and observable success criteria.
2. **Inspect before inventing.** Read project instructions, routes, components, tokens, assets, scripts, and tests.
3. **Choose a clear direction.** Use `docs/decision-framework.md` to avoid generic visual defaults.
4. **Load relevant playbooks.** Find them in `skills/` and read the narrowest workflows that match the task.
5. **Implement real behavior.** Include relevant loading, empty, error, disabled, focus, active, and success states.
6. **Critique by impact.** Fix correctness and task clarity before decorative polish.
7. **Verify and report.** Check relevant viewports, interactions, accessibility, performance, and project scripts; accurately state what was and was not verified.

## 💎 Design principles

- **Distinctive over decorative:** visual choices express the product and user task.
- **Content before chrome:** realistic content reveals layout and hierarchy problems.
- **Responsive by design:** adapt information and interaction to available space.
- **Accessible by default:** semantics, keyboard use, focus, labels, contrast, and reduced motion are core requirements.
- **Real states, not screenshots:** controls work and errors have clear recovery paths.
- **Performance is part of polish:** avoid unnecessary dependencies, oversized assets, expensive effects, and layout shifts.
- **Evidence beats claims:** no tests, measurements, or conformance claims without supporting evidence.
- **Preserve by default:** reuse the stack, conventions, and design system unless the evidence supports a change.

## 🗂️ Repository map

- `SKILL.md` — single installable entrypoint, named `max-design`
- `skill.json` — manifest for the unified skill
- `skills/` — 12 specialist playbooks bundled within the one skill
- `docs/decision-framework.md` — brief intake, design direction, page-pattern heuristics, routing
- `docs/quality-matrix.md` — states, responsive coverage, risk priority, evidence levels
- `docs/knowledge-catalog.md` — knowledge domains, search examples, and data authoring rules
- `docs/design-principles.md` — shared product and engineering principles
- `docs/preflight-checklist.md` — before-delivery checklist
- `examples/design-brief.md` — reusable brief and acceptance-criteria template
- `examples/design-tokens.json` — illustrative semantic token structure
- `knowledge/design-patterns.json` — core local searchable catalog across 12 domains
- `knowledge/advanced-patterns.json` — 30 supplementary production patterns and implementation checks
- `docs/knowledge-sources.md` — research provenance, authoritative references, and evidence limits
- `scripts/validate-skills.mjs` — toolkit structure, token, catalog, and search smoke checks
- `scripts/search-design-knowledge.mjs` — local design-knowledge search CLI

## 🧪 Validate locally

Requires Node.js 20 or newer. No third-party dependencies are needed.

```bash
npm test
```

The validator checks specialist-playbook metadata and structure, unique names, README coverage, reference-document presence, token JSON, required semantic roles, primitive colors, token aliases, catalog structure, and search smoke tests.

## 📄 License

MIT. See `LICENSE`.
