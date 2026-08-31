import type { Metadata } from "next";

const socialImages = [
  {
    url: "/og.png",
    width: 1200,
    height: 630,
    alt: "서원호 Frontend / Hybrid Client Engineer 포트폴리오",
  },
];

// Next.js metadata는 openGraph/twitter 필드를 얕은 병합으로 통째로 교체하므로,
// 페이지에서 title·description만 선언하면 루트 레이아웃의 이미지·카드 설정이 사라진다.
// 페이지별 소셜 미리보기가 필요한 정적 페이지는 이 헬퍼로 전체 필드를 재선언한다.
export function buildPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const socialTitle = `${title} | 서원호`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: "Wonho Seo — Engineering Portfolio",
      title: socialTitle,
      description,
      url: path,
      images: socialImages,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: socialImages,
    },
  };
}
