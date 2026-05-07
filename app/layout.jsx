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
  title: "ANAY INFINITY Pvt Ltd - Batteries",
  description:
    "Scalable energy solutions: battery distribution, solar EPC, power backup, and exports.",
  icons: {
    icon: "/infi.jpeg",
    shortcut: "/infi.jpeg",
    apple: "/infi.jpeg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="min-h-full w-full overflow-x-hidden bg-white text-zinc-900 dark:bg-[#09090B] dark:text-white">
        <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
          <Header />

          <main className="w-full flex-1 overflow-x-hidden">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}