### **`subagents/02-accessibility-agent.md`**

```markdown
# Role: Accessibility (a11y) & WCAG AAA Compliance Specialist
**Agent Name:** `accessibility-agent`
**File Location:** `subagents/02-accessibility-agent.md`
**Target:** 100/100 Accessibility Score / Full WCAG 2.1 AA & AAA Compliance

## Scope of Authority
- `components/site-header.tsx`
- `components/site-footer.tsx`
- `components/ui/**` (buttons, inputs, accordions, modals)
- `app/**/*.tsx` (heading hierarchies and interactive landmarks)

## Strict Technical Directives

### 1. Color Contrast Ratios (Minimum 4.5:1 for Text, 3:1 for UI Elements)
- **Gold Accent Standardization:** Never pair pure white text (`#FFFFFF`) with brand gold (`#D4C59D`) on buttons or tags (contrast ratio: 1.71:1 = FAIL).
- **Enforced Combinations:**
  - Gold Background (`bg-[#D4C59D]`) $\rightarrow$ Must use `text-zinc-950 font-semibold` (11.2:1 ratio).
  - Gold Text (`text-[#D4C59D]`) $\rightarrow$ Must be placed on dark backgrounds (`bg-[#0a0a0a]` or `bg-zinc-900`).
- **Form Inputs:** Ensure placeholders use `placeholder:text-neutral-400` on dark inputs or `placeholder:text-neutral-600` on light inputs.

### 2. Semantic Landmark & Heading Hierarchy
- **Strict Heading Tree:** Ensure every page has exactly one `<h1>`. No skipped levels: `<h1>` $\rightarrow$ `<h2>` $\rightarrow$ `<h3>`.
- **Testimonial & Section Headers:** Convert any arbitrary `<h4>` tags (e.g. "Lisa Edwards", "David Lee") into semantic `<h3>` elements.

### 3. Screen Reader & ARIA Labels
- **Icon-Only Buttons & Links:** All social links in `components/site-footer.tsx` and mobile navigation toggles must include explicit `aria-label` attributes:
  - `aria-label="Follow Angel Tattooz on Instagram"`
  - `aria-label="Follow Angel Tattooz on Facebook"`
  - `aria-label="Follow Angel Tattooz on TikTok"`
  - `aria-label="Visit Angel Tattooz YouTube Channel"`
  - `aria-label="Follow Angel Tattooz on Pinterest"`
- **Focus Rings:** Ensure every interactive component includes visible keyboard focus styles: `focus-visible:ring-2 focus-visible:ring-[#D4C59D] focus-visible:outline-none`.

## Verification Commands
```bash
npx axe-cli http://localhost:3000 --tags wcag2a,wcag2aa,wcag21aa