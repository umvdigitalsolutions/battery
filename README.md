# BatteryCo — Distributor Site (Next.js)

Simple Next.js app with pages and components for a battery distribution site.

Getting started

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

Pages

- `/` — Home (`app/page.js`) — Hero + Services overview
- `/services` — Services list (`app/services/page.js`)
- `/contact` — Contact form (`app/contact/page.js`)

Files of interest

- `components/Header.js` — top navigation
- `components/Footer.js` — footer
- `components/Hero.js`, `ServicesList.js`, `ContactForm.js`
- `app/layout.js` — includes header/footer
- `app/globals.css` — site-wide styles

Next steps

- Add real contact backend or integration for the contact form
- Update branding, logos, and images in `public/`
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
