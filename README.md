# LearnHamletiq

> **Offline-first edtech platform improving literacy in underserved communities.**

LearnHamletiq is a mobile-first educational platform designed to bring high-quality, interactive learning to children in rural and underserved communities — with or without reliable internet access. Through engaging literacy and numeracy games, AI-powered personalized learning paths, and a low-data architecture, LearnHamletiq meets children where they are.

LearnHamletiq uses cloud infrastructure for content delivery, student progress data, and AI-powered personalized learning — enabling scalable, data-driven education that adapts to each child's pace regardless of connectivity.

---

## The Problem

Over **250 million children** worldwide lack access to quality basic education. In rural sub-Saharan Africa, school infrastructure is limited, connectivity is unreliable, and teacher-student ratios make personalized instruction nearly impossible. The result: a generation of children who cannot read, write, or count by age 10.

## The Solution

LearnHamletiq delivers curriculum-aligned literacy and numeracy lessons through:

- **Offline-first gameplay** — content syncs when connected and plays fully offline
- **AI-powered personalization** — adaptive difficulty adjusts in real time to each learner's progress
- **Low-data design** — optimized for 2G/3G networks and entry-level Android devices
- **Cloud-backed progress tracking** — student data synced securely to the cloud for teachers and NGO partners
- **Localised content** — culturally relevant characters, languages, and scenarios

## 🌍 Impact Vision

- Reach **10,000 children** across rural communities in the pilot year
- Partner with schools, NGOs, and government education programs
- Provide teachers and community educators with real-time dashboards powered by cloud analytics
- Scale to **1 million learners** across West and East Africa within 3 years

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, TypeScript, Vite |
| UI Components | Tailwind CSS, shadcn/ui, Radix UI |
| Animation | Framer Motion |
| Cloud Infrastructure | Google Cloud Platform (content delivery, storage, analytics) |
| AI/ML | Personalized learning engine (adaptive difficulty, progress analytics) |
| Routing | React Router v6 |
| Forms & Validation | React Hook Form, Zod |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or [Bun](https://bun.sh/) 1.x

### Installation

```bash
# Install dependencies
npm install
# or with Bun
bun install
```

### Development

```bash
npm run dev
# Starts dev server at http://localhost:3000
```

### Production Build

```bash
npm run build
npm run preview
```

### Type Checking

```bash
npm run typecheck
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── landing/         # All landing page sections
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── Process.tsx
│   │   ├── Impact.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   └── ui/              # shadcn/ui component library
├── pages/
│   ├── PrivacyPolicy.tsx
│   └── TermsAndConditions.tsx
├── hooks/               # Custom React hooks
├── lib/
│   └── utils.ts         # Utility functions
├── App.tsx              # Root app component & routing
├── index.css            # Global styles & Tailwind base
└── main.tsx             # Application entry point
```

---

## ☁️ Cloud Architecture

LearnHamletiq is architected for global scale on cloud infrastructure:

- **Content Delivery** — Lesson assets, images, and game bundles served via cloud CDN for low-latency delivery worldwide
- **Student Progress Sync** — Learner activity, completion rates, and performance data synced to cloud storage when connectivity is available
- **AI Personalization Engine** — Cloud-hosted ML models adapt lesson difficulty and recommend content based on individual learning patterns
- **Analytics Dashboard** — Real-time reporting for teachers, school administrators, and NGO program managers
- **Offline-First Architecture** — Local-first storage with background sync ensures 100% uptime in low-connectivity environments

---

## 🤝 Partnerships & Pilot Program

LearnHamletiq is actively seeking partnerships with:

- Schools and community learning centers in rural West/East Africa
- NGOs and international development organizations (education-focused)
- Government education ministries for curriculum alignment
- Impact investors and social-good accelerators

---

## 👤 Founder

**Adanlawo Opeyemi**
[LinkedIn](https://www.linkedin.com/in/adanlawo-opeyemi-1628082a8)

---

## 📄 License

This project is proprietary. All rights reserved © LearnHamletiq 2025.

---

*LearnHamletiq — Learning that reaches every child.*

---

## 🤖 What is Dala?

**[Gebeya Dala](https://dala.gebeya.com)** is an intelligent web development platform that accelerates your React development workflow. Build, preview, and deploy web applications, and instant development environments.

🔗 **Try Dala:** [dala.gebeya.com](https://dala.gebeya.com)

### Why Use Dala?

- **AI-Powered Development** - Get intelligent code suggestions and automated component generation
- **Instant Preview** - See your changes live in real-time sandbox environments
- **Zero Setup** - No local environment configuration needed
- **Collaborative** - Build and share projects with your team
- **Deployment Ready** - One-click deployment to production

---

Built with ❤️ by the Dala team to help developers build faster and smarter.
