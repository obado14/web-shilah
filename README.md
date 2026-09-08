# 🎨 Adham Dannaway Portfolio Clone

A pixel-perfect, modern re-creation of the iconic portfolio website [adhamdannaway.com](https://www.adhamdannaway.com/), built using **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## 🌟 Highlights & Features

- **🌓 Interactive Split-Face Hero**:
  - Damped spring physics (`requestAnimationFrame`) tracking mouse cursor coordinates in real-time.
  - Smoothly reveals the **Designer** vs. **`<coder>`** persona with dynamic CSS layer transforms and opacity interpolation.
  - Seamless fallback portrait on mobile and tablet screens (`< 1140px`).
- **📱 Fluid Responsive Design**:
  - Desktop, tablet, and mobile breakpoints (`320px` up to `1440px+`).
  - Mobile hamburger slide-down drawer navigation with active state transitions.
- **✨ High-Fidelity Design Emulation**:
  - Web font embeddings for **Proxima Nova** (`light`, `semibold`, `bold`).
  - Exact sprite positioning matching original assets (desktop & mobile `@2x` retina support).
  - Hover elevation effects on latest work cards with sliding arrow indicators.
  - Smooth *Back to top* scroll with animated sprite button.
- **⚡ Performance & Clean Architecture**:
  - Zero hydration mismatch, zero ESLint warnings/errors.
  - Strict TypeScript configuration.
  - Fast static page prerendering with Next.js Turbopack.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router) |
| **Library** | React 19 |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS v4 & Custom OKLCH Design Tokens |
| **Icons & Graphics** | CSS Sprites & WebP Assets |
| **Build Tool** | Turbopack |

---

## 📁 Project Structure

```
├── docs/
│   └── research/              # Component specs, topology & interaction findings
├── public/
│   ├── favicon.ico
│   ├── fonts/                 # Proxima Nova web fonts (woff/woff2)
│   └── images/                # Extracted sprites & portfolio thumbnails
├── scripts/
│   └── download-assets.mjs    # Asset extractor script
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind v4 theme, font-face & custom styles
│   │   ├── layout.tsx         # Root layout with SEO & OpenGraph tags
│   │   └── page.tsx           # Assembled portfolio page
│   ├── components/
│   │   └── sites/
│   │       └── adhamdannaway-com/root/
│   │           ├── Header.tsx           # Navigation & logo sprite
│   │           ├── HeroFace.tsx         # Interactive split-face slider
│   │           ├── PortfolioThumbs.tsx  # Latest work cards
│   │           └── Footer.tsx           # Footer & back-to-top button
│   └── types/
│       └── portfolio.ts       # TypeScript interfaces
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ (Node.js 24+ recommended)
- npm or pnpm / yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/obado14/web-shilah.git
   cd web-shilah
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser.

4. **Production Build & Verification:**
   ```bash
   npm run check    # Runs lint + typecheck + build
   ```

---

## 📜 Credits & Attributions

- Original design, illustration, and concept created by **[Adham Dannaway](https://www.adhamdannaway.com/)**.
- Built with the **[AI Website Cloner Template](https://github.com/JCodesMore/ai-website-cloner-template)**.
- Re-engineered with **Antigravity**.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
