# Design Specification — Baba Clothing Concept

## Experience architecture
Primary navigation: Home, Shop, About, Contact; shopping bag indicator. Mobile navigation must be keyboard and screen-reader accessible.

### Home
1. Header with text wordmark placeholder and navigation.
2. Campaign hero with editorial image, concise headline, and Shop CTA.
3. Featured collection/category links.
4. New-arrival product grid populated by clearly marked sample data.
5. Brand statement featuring “Your style, Your identity.”
6. Social discovery linking to verified Instagram only; do not guess TikTok URL.
7. Footer with navigation and clearly identified contact placeholders.

### Shop
- Responsive product grid.
- Category filtering and sorting with working client-side behavior.
- Clear empty state and reset filters action.
- Sample catalogue centralized in one data module.

### Product detail
- Responsive gallery.
- Product name and illustrative demo price label.
- Size/color selectors only where supported by sample data.
- Quantity selector with sensible bounds.
- Add-to-bag action with accessible confirmation.
- Clear note that product data is illustrative.

### Shopping bag
- Local-only demo state; do not collect or transmit personal data.
- Change quantity, remove items, show illustrative subtotal.
- Checkout disabled or leads to “Demo only — ordering is not enabled.”
- Handle empty bag state.

### About and Contact
- Do not invent company history or founder details.
- Contact page may link to https://www.instagram.com/babaclothing.np/.
- Office address, hours, phone, WhatsApp, email, TikTok, and service area remain placeholders until verified.

## Design system
- Palette: near-black (#0A0A0A), white (#FFFFFF), charcoal (#171717), muted grey (#A3A3A3), subtle border (#2A2A2A); light neutral surfaces may be used sparingly.
- Typography: editorial display face paired with a legible sans-serif; use licensed web fonts or system fallbacks.
- Layout: consistent spacing scale, strong alignment, generous whitespace, responsive containers.
- Components: buttons, navigation, product card/grid, filters, price label, quantity selector, bag line item, empty state, footer.
- Motion: short, purposeful transitions; never block interaction; respect prefers-reduced-motion.

## Responsive and accessibility requirements
- Mobile-first; verify 320px, 360px, 390px, tablet, and desktop.
- No horizontal overflow.
- Semantic landmarks and heading order.
- Keyboard navigation, visible focus, accessible labels, meaningful alt text.
- Sufficient contrast and reduced-motion support.
- Comfortable touch targets.

## Acceptance criteria
- All planned routes render.
- Navigation, filters, sorting, product options, add/remove/update bag controls work.
- Demo-only checkout boundary is obvious.
- Responsive and accessibility checks are documented.
- Build, lint, and type checks pass.
- No fabricated business facts or secrets.
- Pull request includes summary, test results, screenshots/preview if available, and limitations.
