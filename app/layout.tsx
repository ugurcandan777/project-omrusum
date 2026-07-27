import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ömrüşüm 🤍",
  description: "Damla ve Uğur'un küçük dünyası...",

  manifest: "/manifest.json",

  icons: {
    icon: [
      {
        url: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Ömrüşüm 🤍",
  },
};

export const viewport: Viewport = {
  themeColor: "#020611",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-[#020611] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
