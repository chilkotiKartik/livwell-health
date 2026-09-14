<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=220&color=0:0F172A,50:1E293B,100:0F172A&text=LivWell%20-%20Health%20%26%20Nutrition%20Ecosystem&fontColor=FFFFFF&fontSize=36&fontAlignY=40&desc=Next.js%2015%20%20React%2019%20%20Radix%20UI%20Primitives%20%20Recharts%20%20Framer%20Motion%20%20Zod&descColor=94A3B8&descFontSize=15&descAlignY=62" width="100%" alt="LivWell - Health & Nutrition Ecosystem" />

<br />

[![GitHub stars](https://img.shields.io/github/stars/chilkotiKartik/=for-the-badge&logo=github&color=1E293B)](https://github.com/chilkotiKartik/livwell-health/stargazers)
[![License](https://img.shields.io/badge/License-MIT-0284c7?style=for-the-badge)](LICENSE)
[![Maintained](https://img.shields.io/badge/Maintained%3F-yes-10b981?style=for-the-badge)](https://github.com/chilkotiKartik/livwell-health)
[![Author](https://img.shields.io/badge/Author-Kartik%20Chilkoti-6366f1?style=for-the-badge)](https://github.com/chilkotiKartik)

</div>

---

## 📌 Project Overview

A modern, interactive health and lifestyle tracking web application designed to help users monitor nutrition, explore chef-crafted meal selections, manage custom dietary carts, and track wellness metrics through real-time visualizations.

---

## 🚀 Key Features

- **Nutritional Tracking & Analytics:** Real-time calorie, macro, and hydration charts powered by Recharts.
- **Meal Catalog & Custom Builder:** Interactive dietary menu with dish customization, instant filtering, and cart checkout flow.
- **Accessible Design Primitives:** Built with full keyboard navigation and screen-reader accessibility using Radix UI.
- **Smooth Feedback Loops:** Motion-driven state transitions with Framer Motion and Sonner toast notifications.

---

## 🛠️ Architecture & Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Core Architecture** | Next.js 15.2, React 19, TypeScript 5 |
| **UI Component System** | Radix UI (20+ primitives), Tailwind CSS, Vaul Drawer |
| **Data Visualization** | Recharts (Trend & Calorie tracking), Date-fns |
| **Forms & Validation** | React Hook Form, Zod Schema Validation |
| **Micro-Interactions** | Framer Motion, Canvas Confetti, Sonner Toasts |

---

## 📂 Repository Structure

`	ext
livwell-health/
??? app/
?   ??? about/              # Brand philosophy & team bio
?   ??? cart/               # Meal ordering cart & dynamic pricing
?   ??? checkout/           # Multi-step checkout & payment flow
?   ??? dishes/             # Nutritional breakdown & dish details
?   ??? dashboard/          # Interactive health & habit analytics
??? components/             # Reusable UI component library
??? lib/                    # State management, utilities & formatting
`

---

## ⚙️ Environment Configuration

Create a .env.local or .env file in the root directory:

`nv
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_APP_ENV=development
`

---

## 🚦 Getting Started

### 1. Clone the Repository
`ash
git clone https://github.com/chilkotiKartik/livwell-health.git
cd livwell-health
`

### 2. Install Dependencies
`ash
npm install
`

### 3. Run Development Server
`ash
npm run dev
`

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 👤 Author

**Kartik Chilkoti**
- **GitHub:** [@chilkotiKartik](https://github.com/chilkotiKartik)
- **Email:** [chilkotikartik@gmail.com](mailto:chilkotikartik@gmail.com)

---

<div align="center">
<sub>Engineered with precision by <strong>Kartik Chilkoti</strong> &bull; All rights reserved.</sub>
</div>
