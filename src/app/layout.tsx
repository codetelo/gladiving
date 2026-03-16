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
  title: "Greater Lafayette Area Diving - Excellence in Diving | GLAD",
  description: "Professional diving instruction and competitive teams in Indiana. Training divers from beginners to national competitors in springboard and platform diving. Join GLAD for diving excellence.",
  keywords: "diving, springboard diving, platform diving, diving lessons, competitive diving, Indiana diving, Purdue diving, Greater Lafayette Area Diving, GLAD, diving coach, diving team, high school diving, diving practice, diving competition, diving championships, diving lessons for kids, diving training, diving skills, diving fundamentals, diving programs, diving academy, diving school, diving instruction, diving development, diving excellence, diving champions, diving results, diving meets, diving schedule, diving calendar, West Lafayette diving",
  authors: [{ name: "Greater Lafayette Area Diving" }],
  creator: "Greater Lafayette Area Diving",
  publisher: "Greater Lafayette Area Diving",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gladiving.com'),
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Greater Lafayette Area Diving - Excellence in Diving",
    description: "Professional diving instruction and competitive teams in Indiana. Training divers from beginners to national competitors in springboard and platform diving.",
    url: 'https://gladiving.com',
    siteName: 'Greater Lafayette Area Diving',
    images: [
      {
        url: '/gladiving-logo.png',
        width: 1200,
        height: 630,
        alt: 'Greater Lafayette Area Diving - Diving Excellence',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Greater Lafayette Area Diving - Excellence in Diving',
    description: 'Professional diving instruction and competitive teams in Indiana.',
    images: ['/gladiving-logo.png'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="GLAD Diving" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
