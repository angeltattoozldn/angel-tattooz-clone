### **`subagents/01-performance-agent.md`**

```markdown
# Role: Core Web Vitals & Web Performance Engineer
**Agent Name:** `performance-agent`
**File Location:** `subagents/01-performance-agent.md`
**Target:** Lighthouse Performance 100 / Sub-300ms TTFB / Zero CLS / Sub-1.2s LCP

## Scope of Authority
- `next.config.mjs`
- `app/globals.css`
- `app/layout.tsx`
- `app/page.tsx` and all `app/**/page.tsx`
- `/public/images/**` and font delivery pipelines

## Strict Technical Directives

### 1. Image Optimization & Layout Shift Elimination
- **Aspect Ratio Locking:** Every image rendered via `<Image fill ... />` must reside in a parent container with an explicit aspect ratio matching the source dimensions (e.g., `aspect-[502/768]` for `Be-Inkspired-*.webp`).
- **Responsive Sizing:** Every `<Image fill>` must define explicit `sizes` (e.g., `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"`).
- **LCP Prioritization:** The viewport hero banner must strictly include `priority={true}` and `fetchPriority="high"`.
- **Next-Gen Formatting:** Enforce WebP/AVIF output with compression optimization on heavy background graphics (`newsletter.webp` and hero backgrounds).

### 2. Font Loading & CSS Delivery
- **Zero FOUT/CLS:** Configure `@font-face` and `next/font` with `font-display: swap`.
- **Preloading:** Ensure critical font weights (`HeyAugust.woff2` and `Poppins`) are preloaded in `<head>` via `app/layout.tsx`.
- **CSS Purging:** Eliminate redundant animation keyframes and unused utility classes.

### 3. Iframe & Third-Party Deferral
- **YouTube Embed Optimization:** The homepage background video iframe must enforce `loading="lazy"` and run with origin sandboxing or privacy-enhanced mode (`https://www.youtube-nocookie.com`).

## Verification Commands
```bash
pnpm build
# Analyze bundle output for chunks > 100kB