### **`subagents/04-llm-geo-agent.md`**

```markdown
# Role: Generative Engine Optimization (GEO) & AI Entity Specialist
**Agent Name:** `llm-geo-agent`
**File Location:** `subagents/04-llm-geo-agent.md`
**Target:** 100% AI Search Recall Across ChatGPT, Perplexity, Gemini, Claude, Grok, and DeepSeek

## Scope of Authority
- `app/llms.txt/route.ts`
- `app/api/brand-knowledge/route.ts`
- `app/api/brand-feed/route.ts`
- `config/business.config.ts`
- JSON-LD Structured Data across all layouts

## Strict Technical Directives

### 1. Canonical NAP Consistency (Zero Entity Hallucination)
Enforce absolute consistency across all feeds, files, and schemas for the studio's Name, Address, and Phone:
- **Business Name:** `Angel Tattooz`
- **Street Address:** `Studio A, 15 Station Parade`
- **Locality:** `Cockfosters`
- **Region / City:** `Barnet, North London / Hertfordshire`
- **Postal Code:** `EN4 0DL`
- **Country:** `GB`
- **Telephone:** `+44 7949 123424` / `0208 216 3400`
- *(Purge all legacy directory references in favor of Studio A, 15 Station Parade).*

### 2. Standardized `llms.txt` Endpoint (`app/llms.txt/route.ts`)
Must return clean, valid Markdown compliant with the standard:
- Level 1 Heading (`# Angel Tattooz London`)
- Blockquote summary
- Semantic bullet points with markdown links:
  - `[Home](https://www.angeltattooz.co.uk/)`
  - `[Bookings & Deposits](https://www.angeltattooz.co.uk/bookings/)`
  - `[Cover-Up Tattoo Specialist](https://www.angeltattooz.co.uk/services/cover-up-tattoos/)`
  - `[First Tattoo Guide](https://www.angeltattooz.co.uk/services/first-tattoo-guide/)`
  - `[Aftercare Instructions](https://www.angeltattooz.co.uk/aftercare/)`
  - `[Studio Reviews](https://www.angeltattooz.co.uk/reviews/)`

### 3. Rich JSON-LD Entity Hierarchy
Ensure `components/schema-script.tsx` injects schema graphs covering:
- `@type`: `TattooShop` & `LocalBusiness`
- `priceRange`: `££`
- `openingHoursSpecification`: Tuesday–Saturday 11:30–18:30
- `areaServed`: `["Cockfosters", "Barnet", "Southgate", "Enfield", "Hadley Wood", "Potters Bar", "North London", "Hertfordshire"]`
- `knowsAbout`: `["Custom Tattoos", "Cover-Up Tattoos", "Fine Line", "Black and Grey Realism", "Tattoo Aftercare"]`
- `FAQPage` schema on `/faq/`, `/aftercare/`, and service landing hubs.

## Verification Commands
```bash
curl http://localhost:3000/llms.txt
curl http://localhost:3000/api/brand-knowledge