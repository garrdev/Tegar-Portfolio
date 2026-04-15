# Tegar Bayu Saputra — Personal Portfolio

> A modern, brutalist-inspired front-end developer portfolio built with **Angular 21** using the latest framework features including Zoneless change detection and Signal-based reactivity.

---

## 🚀 Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Angular 21 (Standalone Components) |
| **Language** | TypeScript 5.9 |
| **Styling** | Tailwind CSS 3 + Vanilla CSS |
| **Architecture** | Zoneless, Signal-based Reactivity |
| **Build Tool** | Angular CLI / `@angular/build` |
| **Package Manager** | npm 11 |
| **Fonts** | Inter · Playfair Display · JetBrains Mono |

---

## ✨ Features

- **Brutalist Design** — Bold typography, thick borders, high-contrast accent colors, and deliberate whitespace
- **Zoneless Angular** — No `NgZone`, change detection driven entirely by Signals for optimal performance
- **Standalone Components** — Every component is self-contained with no `NgModule` boilerplate
- **Signal-based State** — Reactive UI without RxJS overhead
- **i18n Support** — Built-in Indonesian / English language toggle via `I18nService`
- **Typing Effect Terminal** — About section features an animated JSON "cat" terminal with a typewriter effect
- **Scrolling Marquee** — Electric blue brutalist ticker between Hero → About sections
- **Rotating Status Badge** — SVG circular text badge in the Hero section
- **Smooth Scroll Navigation** — Navbar anchors with smooth scroll behavior
- **Responsive Layout** — Mobile-first, tested across all breakpoints
- **Custom Favicon** — SVG logo (`tegar-logo.svg`) served from the `public/` folder

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/       # Sticky nav with language toggle
│   │   ├── hero/         # Full-screen hero with massive typography
│   │   ├── marquee/      # Scrolling brutalist ticker
│   │   ├── about/        # Bio + animated terminal
│   │   ├── projects/     # Project cards grid
│   │   ├── tools/        # Tech skills section
│   │   ├── contact/      # Contact section
│   │   └── footer/       # Site footer
│   ├── services/
│   │   └── i18n.service.ts  # Language switching (ID / EN)
│   ├── app.ts            # Root component
│   ├── app.routes.ts
│   └── app.config.ts
├── environments/
│   └── environment.ts    # Environment variables (gitignored)
├── styles.css            # Global styles + Tailwind layers
└── index.html
public/
├── assets/               # Project images & static assets
├── tegar-logo.svg        # Site favicon & logo
└── favicon.svg
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js `>= 20.x`
- npm `>= 11.x`
- Angular CLI `>= 21.x`

### Installation

```bash
# Clone the repository
git clone https://github.com/tegarbay/Tegar-Portfolio.git
cd Tegar-Portfolio

# Install dependencies
npm install
```

### Development Server

```bash
npm start
# or
ng serve
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

### Production Build

```bash
npm run build
```

Output is generated in `dist/portfolio/`. Bundle size at last build:

| File | Raw Size | Transfer Size |
|---|---|---|
| `main.js` | 132 kB | ~34 kB |
| `styles.css` | 26 kB | ~5 kB |
| **Initial Total** | **292 kB** | **~78 kB** |

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `snow` | `#F8FAFC` | Page background |
| `electric` | `#2563EB` | Primary accent, CTAs, marquee |
| `electric-dark` | `#1D4ED8` | Hover states |
| `ink` | `#0F172A` | Headings, borders |
| `ink-muted` | `#334155` | Body text |
| `ink-subtle` | `#64748B` | Secondary text |

### Typography

- **Display** — `Playfair Display` (serif) — section headings
- **Body** — `Inter` (sans-serif) — all UI text
- **Mono** — `JetBrains Mono` — terminal, code badges

---

## 🌐 Featured Projects

| Project | Category | Stack |
|---|---|---|
| EYEGIL Partner Digitalmu | Digital Agency | Laravel, Bootstrap, UI/UX |
| AMAZAIN Training & Consulting | Education | Laravel, Bootstrap, Swiper.js |
| CMS Amazain | CMS | Laravel, Bootstrap, MariaDB |
| Herokind Academy | EdTech | Laravel, Bootstrap, MySQL |
| Developer Portfolio | Portfolio | Angular 21, Signals, Tailwind |

---

## 📬 Contact

**Tegar Bayu Saputra**  
Front-End Engineer — Yogyakarta, Indonesia

- 📧 [tegarbayusaputraa@gmail.com](mailto:tegarbayusaputraa@gmail.com)
- 🌐 [Live Portfolio](https://tegarbayu.eyegil.com)
- 💼 [LinkedIn](https://linkedin.com/in/tegarbayusaputra)
- 🐙 [GitHub](https://github.com/tegarbay)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
