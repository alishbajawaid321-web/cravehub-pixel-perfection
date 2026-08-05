# Final refinements: working Checkout + photorealistic food images

Design, layout, colors, branding, typography and animations stay exactly as they are.

## 1. Checkout button

Today the Checkout button in the cart only shows a "coming soon" toast (`script.js`, cart click handler). Change it to:

- Navigate to the Contact page and land directly on the message form (`#contact-form` on `contact.html`).
- On arrival, smoothly scroll the form into view, offset for the sticky nav, and focus the first field.
- Prefill the message box with a readable order summary (items, quantities, line totals, order total) so the enquiry acts as the order request, and show a short confirmation toast.
- Respect reduced-motion (instant jump instead of smooth scroll), and do nothing but a gentle toast if the cart is empty.

No new page, no layout change on Contact — the existing form is reused.

## 2. More natural food photography

Regenerate all 20 menu images with a realistic photography brief instead of the current stylised look: natural textures, real crumb/char/grill marks, true-to-life color (no oversaturation, no plastic gloss), soft warm window light, shallow depth of field, matte ceramic or wood surfaces, styled like a premium restaurant site.

Each shot must literally match its dish, including:

- Molten Pepperoni Pizza — real cupped pepperoni slices on stone-baked crust
- Garden Margherita — fresh mozzarella, basil leaves, tomato sauce
- Golden Crispy Chicken / Chargrilled Chicken Wrap — visibly crisp coating, real grill marks
- Classic Golden Fries — natural golden potato, not neon yellow
- Iced Cocoa Storm — real milkshake texture with foam
- Salted Caramel Sundae — creamy authentic soft-serve

Same filenames (`img/menu/b1.jpg` … `x3.jpg`), same square 640×640 export and compression as now, so cards, cropping and page weight are unchanged.

## Technical notes

- Files touched: `public/cravehub/script.js` (checkout handler + a small scroll-to-form init), `public/cravehub/img/menu/*.jpg` (regenerated in place).
- No CSS or HTML structural changes; no new dependencies.
- Verification: Playwright — add items, click Checkout, confirm it lands on Contact scrolled to the form with the summary filled, and confirm all 20 cards render their new images with no console errors.
