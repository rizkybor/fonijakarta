import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FONI DKI Jakarta | Federasi Orienteering Nasional Indonesia",
    template: "%s | FONI DKI Jakarta",
  },
  description: "Website Resmi Federasi Orienteering Nasional Indonesia (FONI) Pengurus Provinsi DKI Jakarta. Membangun dan mengembangkan olahraga orienteering di Ibukota. Cerdas bernavigasi, tangguh berlari.",
  keywords: ["orienteering", "foni dki jakarta", "olahraga navigasi", "orienteering indonesia", "kompetisi orienteering", "peta orienteering", "kormi dki", "lari navigasi"],
  authors: [{ name: "FONI DKI Jakarta" }],
  creator: "FONI DKI Jakarta",
  publisher: "FONI DKI Jakarta",
  icons: {
    icon: [
      { url: "/logo/logo-foni.png", type: "image/png", sizes: "32x32" },
      { url: "/logo/logo-foni-dki-icon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/logo/logo-foni.png", type: "image/png" }
    ],
    shortcut: [
      { url: "/logo/logo-foni.png", type: "image/png" }
    ],
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://fonijakarta.web.id",
    title: "FONI DKI Jakarta | Federasi Orienteering Nasional Indonesia",
    description: "Website Resmi Federasi Orienteering Nasional Indonesia (FONI) Pengurus Provinsi DKI Jakarta. Membangun dan mengembangkan olahraga orienteering di Ibukota.",
    siteName: "FONI DKI Jakarta",
    images: [
      {
        url: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Orienteering FONI DKI Jakarta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FONI DKI Jakarta | Federasi Orienteering Nasional Indonesia",
    description: "Website Resmi Federasi Orienteering Nasional Indonesia (FONI) Pengurus Provinsi DKI Jakarta.",
    images: ["https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://fonijakarta.web.id",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800 overflow-x-hidden">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
