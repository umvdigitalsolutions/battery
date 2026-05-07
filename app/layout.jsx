import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ANAY INFINITY Pvt Ltd — Batteries",
  description: "Scalable energy solutions: battery distribution, solar EPC, power backup, and exports.",
  icons: {
    icon: "/infi.jpeg",
    shortcut: "/infi.jpeg",
    apple: "/infi.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <title>ANAY INFINITY Pvt Ltd — Batteries</title>
        <meta name="description" content="Scalable energy solutions: battery distribution, solar EPC, power backup, and exports." />
        <link rel="icon" href="/infi.jpeg" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
