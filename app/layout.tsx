import { cn } from "@/lib/utils";
import type React from "react";
import type { Metadata } from "next";
import { Noto_Sans_KR, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-body",
  preload: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  preload: true,
});

export const metadata: Metadata = {
  title: "SWH's Portfolio",
  description:
    "A portfolio showcasing interactive canvas projects and frontend development skills.",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body
        className={cn(
          notoSansKR.variable,
          outfit.variable,
          "font-body bg-neutral-950 text-gray-100 min-h-screen flex flex-col"
        )}
      >
        <Navigation />
        <main className="flex-grow pt-16 sm:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
