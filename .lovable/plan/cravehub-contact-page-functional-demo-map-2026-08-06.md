# CraveHub Contact Page — Functional Demo Map

## Goal
Replace the non-functional Google Maps placeholder on the Contact page with a working, interactive map centered on a real public area in Lahore, while preserving every other aspect of the existing design.

## What will change

### 1. Map implementation
- Replace the placeholder `.map` content in `public/cravehub/contact.html` with an embedded Google Maps iframe.
- Center the map on **Liberty Market, Gulberg, Lahore** — a well-known public area near the fictional "45 Food Street, Gulberg III" address.
- Use a standard Google Maps embed URL so the map is interactive (pan, zoom) without requiring an API key or extra JavaScript libraries.

### 2. Demonstration notice
- Keep the existing "Find us" heading and address text unchanged.
- Add a short, unobtrusive caption directly under the map stating that the pinned location is for demonstration purposes only and that CraveHub is a fictional brand.

### 3. Styling adjustments
- Update `public/cravehub/style.css` so the iframe fills the existing `.map` container, inherits the current `border-radius` (`var(--r-lg)`), height (`320px`), and border, and remains responsive across breakpoints.
- Remove or repurpose the old `.map__pin` placeholder styling only if it conflicts with the iframe; otherwise leave existing CSS intact.

### 4. Verification
- Confirm the map loads interactively on the Contact page.
- Confirm the page layout, typography, colors, and surrounding sections are visually identical to the current version.

## What will NOT change
- The overall design, layout, color palette, branding, typography, and animations.
- The Contact form, business hours, social links, or any other Contact page content.
- Any other pages (`index.html`, `menu.html`, `ai.html`, `deals.html`, `about.html`) or shared scripts.

## Technical notes
- Implementation uses a lightweight `<iframe>` embed (no new JS dependencies).
- No API keys or connectors are required for a basic Google Maps embed.
- The caption will use existing text/color tokens to stay on-brand.
