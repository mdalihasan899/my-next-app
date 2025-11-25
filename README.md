# MiniGadgets — Next.js + NextAuth + Express

A polished, responsive mini eCommerce app built with Next.js (App Router), NextAuth (Google + credentials), and a simple Express backend. Public pages: Landing, Items, Item Details, Login. Protected pages: Add Product, Manage Products.

## Tech stack
- Next.js, TypeScript, Tailwind CSS, NextAuth
- Express.js backend with JSON store
- Deployed on Vercel (frontend) + Render (backend)

## Setup
1. Clone and install:
   - `npm i` (frontend)
   - `cd server && npm i` (backend)
2. Env vars:
   - Frontend `.env.local`:
     - `NEXTAUTH_URL=...`
     - `NEXTAUTH_SECRET=...`
     - `GOOGLE_CLIENT_ID=...`
     - `GOOGLE_CLIENT_SECRET=...`
     - `BACKEND_URL=...`
   - Backend `server/.env`:
     - `PORT=4000`
     - `CORS_ORIGIN=http://localhost:3000`
3. Run:
   - Backend: `cd server && npm run dev`
   - Frontend: `npm run dev`

## Routes summary
- `/` — Landing (Navbar, Hero, Features, Items preview, Testimonials, Banner, Footer)
- `/login` — Login/Register (Google + credentials; redirects to `/`)
- `/items` — Item List (title, description, search, category filter UI, grid of 6+ cards)
- `/items/[id]` — Item Details (image/banner, title, full description, price/date/priority, back button)
- `/add` — Protected Add Product (form, toast on success)
- `/manage` — Protected Manage Products (table/grid with View/Delete)

## Demo
- Frontend: [https://your-vercel-app.vercel.app](https://my-next-app-three-orpin.vercel.app/)
- Backend: https://your-backend-host.com
