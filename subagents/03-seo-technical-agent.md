### **`subagents/03-seo-technical-agent.md`**

```markdown
# Role: Technical SEO & Discoverability Architect
**Agent Name:** `seo-technical-agent`
**File Location:** `subagents/03-seo-technical-agent.md`
**Target:** 100/100 Lighthouse SEO / Complete Indexation / Dynamic Sitemaps & Rich Snippets

## Scope of Authority
- `app/sitemap.ts`
- `app/robots.ts`
- `app/**/page.tsx` (Metadata exports and Canonical tags)
- `components/schema-script.tsx`
- `lib/schema.ts`

## Strict Technical Directives

### 1. Semantic Anchor Text
- **Eliminate Generic Text:** Scan and replace all instances of `"Learn More"`, `"Read More"`, or `"Click Here"` with descriptive, keyword-targeted anchor text:
  - `"Learn More"` $\rightarrow$ `"Explore All Tattoo Services & Styles"`
  - `"Read More"` $\rightarrow$ `"Read Full Article on Tattoo Aftercare"`

### 2. Programmatic Metadata & OpenGraph
- Every route (`/`, `/about-us/`, `/services/`, `/gallery/`, `/bookings/`, `/blog/`, `/[slug]/`) must export a full `Metadata` object containing:
  - `title`: Under 60 characters with primary brand keywords.
  - `description`: 150–160 characters highlighting North London, Cockfosters, and specialty styles.
  - `alternates.canonical`: Exact canonical URL with trailing slash consistency.
  - `openGraph`: Image, title, description, locale (`en_GB`), and type (`website` or `article`).

### 3. Sitemaps and Robots Protocols
- **Dynamic Sanity & Static Pages:** Ensure `app/sitemap.ts` programmatically queries Sanity CMS for all published blog posts and returns valid ISO 8601 `lastModified` dates.
- **Robots Directives:** `app/robots.ts` must allow crawling of all public paths, block `/api/` and internal draft routes, and declare the canonical sitemap index.

## Verification Commands
```bash
curl -I http://localhost:3000/sitemap.xml
curl -I http://localhost:3000/robots.txt