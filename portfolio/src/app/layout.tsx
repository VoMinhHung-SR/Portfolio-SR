import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/layout/footer";
import { Fragment } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hiiro Portfolio",
  description: "Hiiro Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <html>
        {/* Hero Section */}
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </body>
  
      </html>
      <Footer />
    </Fragment>
  );
}
