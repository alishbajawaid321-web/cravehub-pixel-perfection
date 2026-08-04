# CraveHub: unique product images + performance pass

Design, layout, colors, branding and typography stay exactly as they are. This is an assets + performance + cleanup pass only.

## 1. Unique image for every menu item

All 20 menu items currently share 7 category images (all burgers use `burger.jpg`, all pizzas `pizza.jpg`, etc.). Generate one distinct image per item, matched to its name:

- Burgers: Signature double stack, Smoky BBQ beef stack, Garden crunch veggie
- Pizza: Molten pepperoni, Fiery tikka, Garden margherita
- Chicken: Golden crispy bucket, Nashville hot wings, Grilled herb breast
- Fries: Loaded cheese fries, Classic golden fries, Peri peri fries
- Wraps: Chargrilled chicken, Volcano beef, Falafel green
- Desserts: Molten chocolate lava, Salted caramel sundae
- Drinks: Crave cola fizz, Mango chill cooler, Iced cocoa storm

Consistency rules: same shooting style (dark moody surface, warm rim light, top-tilted 3/4 angle, brand-warm tones), all exported at the same square aspect ratio and pixel size so every card stays identical in shape. Cards already crop with a fixed ratio, so no layout shift.

The homepage category tiles and gallery keep their existing category images.

## 2. Performance

- Compress every image (product shots, hero, store, logo) to web-optimized sizes; the current logo alone is ~450 KB and the hero ~260 KB. Target large reductions with no visible quality loss, keeping the same filenames/paths.
- Serve product cards at card-appropriate resolution instead of full-size files.
- Ensure `loading="lazy"` + `decoding="async"` on all below-the-fold images, with explicit width/height everywhere (hero stays eager/high priority).
- Preload only the hero image and the logo; defer everything else.
- Load the script with `defer`, drop the render-blocking pattern, and add `preconnect`/`display=swap` checks for the font link (already present — verify).
- Reduce first-paint delay from the loading screen: keep the loader visual but hide it as soon as the page is interactive rather than on a timed delay.
- Add link prefetch on nav hover so page-to-page navigation feels instant.

## 3. Smoothness / UX

- Promote animated elements to their own compositor layer and animate only transform/opacity so scroll reveals and hovers never jank.
- Throttle scroll handlers with `requestAnimationFrame` and mark scroll listeners passive.
- Buttons respond on pointer-down (instant press feedback) instead of waiting for click-end.
- Respect `prefers-reduced-motion`.

## 4. Code cleanup

- Deduplicate the repeated per-page loader markup and shared head tags.
- Remove unused CSS rules and dead JS branches; group `script.js` into clearly commented modules (data, shell, reveal, menu, cart, AI, forms, countdown).
- Keep all class names and visual output identical.

## Technical notes

- Files touched: `public/cravehub/*.html`, `script.js`, `style.css`, and new files under `public/cravehub/img/`.
- No framework, build step, or dependency changes; still plain HTML/CSS/vanilla JS.
- Verification: Playwright pass over all six pages checking every menu card renders a distinct image, no console errors, filters/search/AI/cart still work.
