# PTC Group India — Next.js + Tailwind Website

Corporate home page for PTC Group India, showcasing all group companies.

## Tech Stack
- **Next.js 14** (App Router)
- **Tailwind CSS** (custom navy + gold theme)
- **TypeScript**

## Project Structure

```
ptcgroupindia/
├── app/
│   ├── globals.css        # Tailwind directives + custom utilities
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page (assembles all sections)
├── components/
│   ├── Logo.tsx           # Reusable PTCGRAM atom logo
│   ├── Navbar.tsx         # Fixed navbar with scroll behaviour
│   ├── HeroSection.tsx    # Hero with animated stat counters
│   ├── AboutSection.tsx   # About the group
│   ├── CompaniesSection.tsx  # Filterable company card grid
│   ├── CompanyCard.tsx    # Individual company card
│   ├── ContactSection.tsx # Contact info + enquiry form
│   └── Footer.tsx         # Site footer
├── lib/
│   └── companies.ts       # All 12 company data + types
├── public/
│   └── logo.png           # Drop your logo file here
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── next.config.js
```

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Your Logo

Replace `public/logo.png` with your actual logo file, then update `components/Logo.tsx` to use `<Image src="/logo.png" ... />` from `next/image`.

## Companies Listed
1. PTCGRAM Pvt. Ltd. — ptcgram.com
2. PTC Logistics — ptclogistics.in
3. Kedos — kedos.in
4. Devang Organics — devangorganics.com
5. The Himalayan Brewery — thehimalayanbrewery.com
6. The Himalayan Store — thehimalayanstore.shop
7. Zaura Care — zauracare.com
8. SS Packaging — sspackaging.co.in
9. PTC Group India — ptcgroupindia.in
10. Firebase Data Store (internal)
11. The FutureX — thefuturex.in
12. Ilika — ilika.in

## Firebase Integration (Contact Form)

To connect the contact form to Firebase:

```bash
npm install firebase
```

Then edit `components/ContactSection.tsx` and replace the `handleSubmit` function:

```ts
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const app = initializeApp({ /* your firebase config */ })
const db = getFirestore(app)

const handleSubmit = async (e) => {
  e.preventDefault()
  await addDoc(collection(db, 'enquiries'), { ...formData, createdAt: new Date() })
  setSubmitted(true)
}
```

## Color Theme

| Token | Hex | Usage |
|-------|-----|-------|
| `navy-600` | `#1A365D` | Primary dark blue |
| `navy-900` | `#0A1628` | Hero backgrounds |
| `gold-500` | `#C8912B` | Accent / CTA color |

## Build for Production

```bash
npm run build
npm start
```
