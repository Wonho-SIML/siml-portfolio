import type React from "react";
import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR, Outfit } from "next/font/google";

import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import ThemeProvider from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";

const siteUrl = "https://siml-portfolio.vercel.app";

// 경력 연차(calculateExperience)와 푸터 저작권 연도가 빌드 시점 값으로
// 영구 고정되지 않도록 전체 라우트를 하루 주기로 재생성한다.
export const revalidate = 86400;

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  preload: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  preload: true,
});

// 수동 토글 값까지는 반영하지 못하지만, 시스템 테마 기준으로
// 모바일 브라우저 UI 색을 페이지 배경과 맞춘다.
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "서원호 | Frontend / Hybrid Client Engineer",
    template: "%s | 서원호",
  },
  description:
    "React와 TypeScript, .NET MAUI로 웹 서비스와 하이브리드 앱을 개발하며 오프라인 동기화, 대용량 PDF 처리, 실시간 협업과 BLE 연동을 구현한 서원호의 포트폴리오입니다.",
  keywords: [
    "Frontend Engineer",
    "React",
    "TypeScript",
    ".NET MAUI",
    "WebAssembly",
    "PDF",
    "Hybrid App",
    "서원호",
  ],
  authors: [{ name: "Wonho Seo", url: siteUrl }],
  creator: "Wonho Seo",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "Wonho Seo — Engineering Portfolio",
    title: "서원호 | Frontend / Hybrid Client Engineer",
    description:
      "웹과 네이티브의 경계에서 데이터와 문서가 끝까지 안전하게 흐르도록 만듭니다.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "서원호 Frontend / Hybrid Client Engineer 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "서원호 | Frontend / Hybrid Client Engineer",
    description:
      "웹과 네이티브의 경계에서 데이터와 문서가 끝까지 안전하게 흐르도록 만듭니다.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Wonho Seo",
    alternateName: "서원호",
    url: siteUrl,
    jobTitle: "Frontend / Hybrid Client Engineer",
    sameAs: [
      "https://github.com/Wonho-SIML",
      "https://www.linkedin.com/in/siml-seo/",
    ],
    knowsAbout: [
      "React",
      "TypeScript",
      ".NET MAUI",
      "WebAssembly",
      "Offline-first applications",
      "PDF processing",
    ],
  };

  return (
    // suppressHydrationWarning: next-themes가 하이드레이션 전에 <html>의
    // class와 color-scheme을 저장된 테마로 바꾸므로 속성 불일치 경고를 막는다.
    <html lang="ko" suppressHydrationWarning>
      <body
        className={cn(
          notoSansKR.variable,
          outfit.variable,
          "flex min-h-screen flex-col bg-background font-body text-foreground"
        )}
      >
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            본문으로 건너뛰기
          </a>
          <Navigation />
          <div id="main-content" tabIndex={-1} className="flex-grow pt-16">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
