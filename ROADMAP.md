# 🚀 Project Roadmap — Agency Website (Next.js + Tailwind, Mobile-first)

## 🎯 Goal

Build the new agency website using **Next.js + React + Tailwind CSS**, following a **mobile-first** design inspired by [societies.io](https://www.societies.io/). The project will be **frontend-only**, using mock data stored locally in the `/data` folder.

---

## 🧱 Desired Final Structure

```
/ (project root)
├─ /app (or /pages)
│   └─ page.tsx (Home)
├─ /components
│   ├─ Header.tsx
│   ├─ Hero.tsx
│   ├─ Presentation.tsx
│   ├─ LogosCarousel.tsx
│   ├─ Counters.tsx
│   ├─ ProductOverview.tsx
│   ├─ UseCases.tsx
│   ├─ HowItWorks.tsx
│   ├─ Testimonials.tsx
│   ├─ Pricing.tsx
│   ├─ FAQ.tsx
│   └─ Footer.tsx
├─ /data
│   ├─ clients.ts
│   ├─ projects.ts
│   ├─ testimonials.ts
│   ├─ pricing.ts
│   └─ faqs.ts
├─ /public/images
├─ /styles/globals.css
├─ tailwind.config.js
└─ README.md
```

Each section of the Home page will be an independent component to keep the layout modular and reusable.

---

## 🗺️ Development Roadmap

### 🧩 Stage 1 — Setup & Fundamentals

- [x] Create the project using `create-next-app`
- [x] Configure Tailwind CSS
- [x] Add ESLint + Prettier
- [x] Create initial folder structure
- [x] Add assets (logo, icons, base images)

### 💡 Stage 2 — Global Layout

- [ ] Create `Layout` with **Header** and **Footer**
- [ ] Implement responsive navigation (mobile menu)
- [ ] Set up global container and style tokens (colors, typography)

### 🏗️ Stage 3 — Pages & Sections

**Suggested order of development:**

1. Hero — headline + main CTA
2. Presentation — short agency intro
3. Logos Carousel — client/partner logos
4. Counters — key stats/metrics
5. Product Overview — main services
6. Use Cases — real-world applications
7. How it Works — process steps
8. Testimonials — client reviews
9. Pricing — plans and pricing tiers
10. FAQ — frequently asked questions

Each component must be **mobile-first**, progressively enhanced for tablet and desktop.

### ⚙️ Stage 4 — Data & Integration

- [ ] Create `/data` folder and `.ts` files with mock content
- [ ] Connect static data to components via imports

### 📈 Stage 5 — Performance & Accessibility

- [ ] Use `next/image` for image optimization
- [ ] Add SEO metadata and Open Graph tags
- [ ] Test accessibility (keyboard navigation, aria-labels, headings)

### 🚀 Stage 6 — Deployment & Final Review

- [ ] Set up automatic deployment with Vercel
- [ ] Test on real mobile devices and with Lighthouse
- [ ] Final review for SEO, performance, and accessibility

---

## 💾 Future Enhancements

- Add portfolio page with individual project details
- Implement multi-language support (i18n)
- Add a simple blog (MDX-based)

---

**Initial Version:** v0.1 — focus on structure, global layout, and initial Home sections.
