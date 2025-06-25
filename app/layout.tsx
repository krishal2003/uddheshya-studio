import type React from "react";
import type { Metadata } from "next";
import { Mona_Sans as FontSans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LoadingScreen from "@/components/loading-screen";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "UDDHESHYA STUDIO | Redefining Marketing for the Digital Age",
  description:
    "UDDHESHYA STUDIO is a cutting-edge marketing company providing innovative solutions for businesses worldwide. We specialize in digital advertising, brand development, web development, and comprehensive marketing strategies.",
  keywords:
    "marketing agency, digital marketing, brand development, web development, SEO, social media marketing, advertising",
  authors: [{ name: "UDDHESHYA STUDIO" }],
  creator: "UDDHESHYA STUDIO",
  publisher: "UDDHESHYA STUDIO",
  generator: "v0.dev",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://uddheshyastudio.com",
    title: "UDDHESHYA STUDIO | Redefining Marketing for the Digital Age",
    description: "Cutting-edge marketing solutions for businesses worldwide",
    siteName: "UDDHESHYA STUDIO",
  },
  twitter: {
    card: "summary_large_image",
    title: "UDDHESHYA STUDIO | Redefining Marketing for the Digital Age",
    description: "Cutting-edge marketing solutions for businesses worldwide",
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
        <link rel="icon" href="short.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${fontSans.variable} font-sans antialiased cursor-premium`}
      >
        <LoadingScreen />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
