# 🌐 Agency Website — Next.js + Tailwind CSS (Mobile-first)

## 🧭 Overview

This project is a **frontend-only** website for an agency, built using **Next.js**, **React**, and **Tailwind CSS** with a **mobile-first** design approach. It aims to deliver a fast, accessible, and visually appealing experience, inspired by [societies.io](https://www.societies.io/).

The site includes multiple sections such as Hero, About, Logos Carousel, Stats, Product Overview, Use Cases, How It Works, Testimonials, Pricing, FAQ, and Footer.

---

## 🛠️ Tech Stack

* [Next.js](https://nextjs.org/)
* [React](https://react.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* TypeScript *(optional but recommended)*
* ESLint + Prettier
* Vercel (for deployment)

---

## 📁 Folder Structure

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
├─ /data (mocked data for UI)
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

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/LeonardoMazza/mv7-website.git
cd mv7-website
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

The project will be available at: [http://localhost:3000](http://localhost:3000)

---

## 📅 Roadmap

1. **Project setup** — install, configure Tailwind, ESLint, Prettier
2. **Global layout** — Header, Footer, global styles
3. **Homepage sections** — build Hero → About → Logos → Counters → Product → Use Cases → How It Works → Testimonials → Pricing → FAQ
4. **Data layer** — mock data via `/data/*.ts`
5. **SEO & accessibility** improvements
6. **Deploy** to Vercel

For a full breakdown, see the [`ROADMAP.md`](./ROADMAP.md).

---

## 🧩 Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## 📦 Deployment

* Deploys automatically on **Vercel** when pushed to the `main` branch.
* Preview deployments available for pull requests.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`feature/new-section`)
3. Commit your changes
4. Open a Pull Request

---

## 🧾 License

This project is licensed under the **MIT License** — feel free to use and modify it.

---

### ✨ Author

Developed by Leonardo Mazza — crafted with passion for web design and performance.
