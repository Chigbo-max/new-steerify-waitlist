import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Steerify Cleaning - Join the Waitlist",
  description:
    "Join the next evolution of trusted cleaning services. AI-matched providers, secure payments, and effortless scheduling.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {/* Header Navigation */}
        <header className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-30">
          <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
            <a
              href="/"
              className="font-bold text-lg tracking-tight flex items-center gap-2"
            >
              <img
                src="/images/steerify-logo-new.png"
                alt="Steerify Logo"
                className="h-7 w-auto"
              />
              <span className="hidden sm:inline">Steerify</span>
            </a>
            <div className="flex gap-6 text-base font-medium">
              <a href="/" className="hover:text-primary transition-colors px-2 py-2">
                Home
              </a>
              <a href="/about" className="hover:text-primary transition-colors px-2 py-2">
                About
              </a>
              {/* Join Waitlist Button */}
              <a 
                href="#waitlist-form" 
                className="bg-steerify-blue hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
              >
                Join Waitlist
              </a>
            </div>
          </nav>
        </header>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}