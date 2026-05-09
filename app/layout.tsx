import type { Metadata } from "next";
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
  title: "Noobz Streaming",
  description: "Nonton Film dan Series Bahasa Indonesia",
  openGraph: {
    title: "Noobz Streaming",
    description: "Nonton Film dan Series Bahasa Indonesia",
    siteName: "Noobz Streaming",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Noobz Streaming" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noobz Streaming",
    description: "Nonton Film dan Series Bahasa Indonesia",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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
      <body className="min-h-full">{children}</body>
    </html>
  );
}
