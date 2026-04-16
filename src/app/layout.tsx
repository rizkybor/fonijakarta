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
    default: "FONI DKI Jakarta - Satu Peta Seribu Sinergi",
    template: "%s | FONI DKI Jakarta",
  },
  description: "Situs resmi Federasi Orienteering Nasional Indonesia Pengprov DKI Jakarta. Informasi event & kompetisi, klub klub terdaftar dan berita.",
  keywords: ["Orienteering Jakarta", "FONI", "FONI DKI", "FONI pengprov DKI", "KORMI DKI", "Navigasi Darat", "Event Orienteering", "Orienteering Indonesia", "Orienteering"],
  authors: [{ name: "FONI DKI Jakarta" }],
  creator: "FONI DKI Jakarta",
  publisher: "FONI DKI Jakarta",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" }
    ],
    apple: [
      { url: "/logo/logofonidki.png", type: "image/png" }
    ],
    shortcut: [
      { url: "/favicon.ico", type: "image/x-icon" }
    ],
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://fonijakarta.web.id",
    title: "FONI DKI Jakarta - Satu Peta Seribu Sinergi",
    description: "Situs resmi Federasi Orienteering Nasional Indonesia Pengprov DKI Jakarta. Informasi event & kompetisi, klub klub terdaftar dan berita.",
    siteName: "FONI DKI Jakarta",
    images: [
      {
        url: "https://fonijakarta.web.id/logo/LOGO_FONI_DKI.jpg",
        width: 1200,
        height: 630,
        alt: "FONI DKI Jakarta - Orienteering Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FONI DKI Jakarta - Satu Peta Seribu Sinergi",
    description: "Situs resmi Federasi Orienteering Nasional Indonesia Pengprov DKI Jakarta. Informasi event & kompetisi, klub klub terdaftar dan berita.",
    images: ["https://fonijakarta.web.id/logo/LOGO_FONI_DKI.jpg"],
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
