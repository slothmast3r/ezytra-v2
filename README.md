# Oskar Straszyński — Ezytra Portfolio

A high-end personal website and digital craft studio portfolio built with Next.js 15, Payload CMS 3.0, and PostgreSQL.

## ✨ Features

- **Modern Tech Stack**: Next.js 15 (App Router), TypeScript, and Payload CMS 3.0.
- **Custom Design**: Hand-crafted CSS with premium animations and transitions.
- **Project Showcase**: Interactive work archive with collapsible previews and detailed case studies.
- **Journal**: A clean, readable blog for sharing insights on design and code.
- **Services**: Detailed breakdown of digital craft offerings and philosophy.
- **Custom Cursor**: (Optional) Stylized chevron cursor for desktop users.
- **Performance Optimized**: Built for speed, high Core Web Vitals, and technical SEO.
- **Cloud Database**: Powered by Neon PostgreSQL.

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **CMS**: [Payload CMS 3.0](https://payloadcms.com/)
- **Database**: [Neon PostgreSQL](https://neon.tech/)
- **Styling**: Vanilla CSS (PostCSS)
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Quick Start

### 1. Clone the repo
```bash
git clone https://github.com/your-username/personal-website.git
cd personal-website
```

### 2. Environment Variables
Create a `.env` file in the root directory:
```env
DATABASE_URL=your_postgresql_connection_string
PAYLOAD_SECRET=your_payload_secret
```

### 3. Install and Run
```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.
Access the admin panel at [http://localhost:3000/admin](http://localhost:3000/admin).

## 📁 Project Structure

- `src/app/(frontend)`: Next.js frontend pages and components.
- `src/collections`: Payload CMS collection configurations (Users, Media, Projects, Posts).
- `src/migrations`: Database schema migrations.
- `src/seed.ts`: Initial data seeding script.

## 📝 License

MIT © [Oskar Straszyński](https://ezytra.com)
