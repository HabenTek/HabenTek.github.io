import type { Metadata } from "next";
import "./globals.scss";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";
import { site } from "@/content/site-config";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bodyContainer">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
