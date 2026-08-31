import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Mail,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { buildPageMetadata } from "@/lib/metadata";
import { calculateExperience } from "@/lib/utils";

export const metadata: Metadata = buildPageMetadata({
  title: "Resume",
  description:
    "Frontend / Hybrid Client Engineer 서원호의 경력 요약과 핵심 기술, 대표 성과입니다.",
  path: "/resume",
});

const achievements = [
  {
    title: "장시간 음성 스트림 재설계와 아카이브 분석",
    detail:
      "장시간 세션에서 끊기던 실시간 음성 스트림의 수명주기를 발화 단위로 재설계하고, 녹음부터 LLM 교정과 요약, 아카이브 분석까지 이어지는 파이프라인을 구축했습니다.",
    href: "/projects/realtime-collaboration-platform",
  },
  {
    title: "오프라인 동기화와 복구 개선",
    detail:
      "앱이 백그라운드로 전환되거나 동기화가 겹칠 때 노트와 페이지가 중복 생성되거나 잘못 복구되던 문제를 바로잡아, 데이터가 사라지거나 겹치는 경우를 줄였습니다.",
    href: "/projects/hybrid-note-application",
  },
  {
    title: "대용량 문서 전송 안정화",
    detail:
      "수 GB 규모 문서를 나누어 전송하고 크기와 해시로 완전 수신을 검증한 뒤에만 파일을 공개하도록 구현해, 전송이 중단되거나 일부만 저장된 경우를 감지하고 다시 처리할 수 있게 했습니다.",
    href: "/projects/document-production-platform",
  },
  {
    title: "WebAssembly PDF 편집과 인쇄 규격 출력",
    detail:
      "PDF 파일을 열고 편집하고 출력하는 과정의 파일 입출력과 이미지 처리 오류를 수정하고, 인쇄 규격(PDF/X-1a)과 CMYK 출력 대응을 계약 테스트와 함께 구현했습니다.",
    href: "/projects/document-production-platform",
  },
  {
    title: "브라우저와 Windows 앱 인쇄 연동",
    detail:
      "웹의 여러 문서 화면에서 같은 방식으로 Windows 인쇄 기능을 쓸 수 있도록 공통 인쇄 화면을 만들고, 앱 설치 상태 확인과 실패 후 재시도까지 연결했습니다.",
    href: "/projects/realtime-collaboration-platform",
  },
];

const skills = [
  {
    label: "Frontend",
    items:
      "React, TypeScript, Next.js, MobX, Jotai, Zustand, Canvas, Web Worker, WebAssembly",
  },
  {
    label: "Hybrid / Native",
    items: ".NET MAUI, C#, Hybrid WebView, JS bridge",
  },
  {
    label: "Data / Document",
    items: "IndexedDB, 오프라인 동기화, PDF",
  },
  {
    label: "Realtime / Device",
    items: "WebSocket, STT, LLM 연동, Web Bluetooth, BLE 스마트펜",
  },
];

export default function ResumePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-24 pt-14 sm:px-8 lg:px-10">
      <header className="grid gap-10 border-b pb-12 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Resume
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            서원호 <span className="text-foreground-subtle">Wonho Seo</span>
          </h1>
          <p className="mt-5 text-xl text-foreground-soft">
            Frontend / Hybrid Client Engineer
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-foreground-subtle">
            웹과 네이티브의 경계에서 데이터와 문서가 끝까지 안전하게 흐르도록
            만듭니다. 실무에서 오프라인 동기화, 대용량 PDF, 실시간 협업·음성
            처리와 BLE 펜 연동을 구현하고 여러 플랫폼에서 검증해 왔습니다.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground-subtle">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" /> 대한민국
            </span>
            <span className="inline-flex items-center gap-2">
              <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
              {calculateExperience()} 경력
            </span>
          </div>
        </div>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary-hover">
          <a href="mailto:swh1182@gmail.com">
            <Mail aria-hidden="true" /> 이메일로 연락하기
          </a>
        </Button>
      </header>

      <div className="grid gap-14 pt-14 lg:grid-cols-[0.72fr_1.28fr]">
        <aside className="space-y-12">
          <section aria-labelledby="experience-heading">
            <h2
              id="experience-heading"
              className="font-display text-xl font-semibold text-foreground"
            >
              Experience
            </h2>
            <div className="mt-5 border-l border-brand/30 pl-5">
              <p className="text-sm text-brand">2021.11 — 현재</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                네오랩컨버전스
              </h3>
              <p className="mt-1 text-sm text-foreground-subtle">책임연구원</p>
              <p className="mt-4 text-sm leading-7 text-foreground-subtle">
                React 기반 웹 서비스와 .NET MAUI 하이브리드 앱, 문서 엔진과 SDK의
                프론트엔드와 클라이언트 개발을 담당합니다.
              </p>
            </div>
          </section>

          <section aria-labelledby="skills-heading">
            <h2
              id="skills-heading"
              className="font-display text-xl font-semibold text-foreground"
            >
              Technical scope
            </h2>
            <dl className="mt-5 space-y-5">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <dt className="text-sm font-medium text-foreground-soft">
                    {skill.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-foreground-subtle">
                    {skill.items}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </aside>

        <section aria-labelledby="impact-heading">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground-subtle">
            Selected impact
          </p>
          <h2
            id="impact-heading"
            className="mt-2 font-display text-3xl font-semibold text-foreground"
          >
            직접 맡아 해결한 주요 문제
          </h2>

          <ol className="mt-8 space-y-4">
            {achievements.map((achievement) => (
              <li
                key={achievement.title}
                className="rounded-2xl border bg-card/65 p-6"
              >
                <div className="flex gap-3">
                  <CheckCircle2
                    className="mt-1 h-5 w-5 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {achievement.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-foreground-subtle">
                      {achievement.detail}
                    </p>
                    <Link
                      href={achievement.href}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-hover"
                    >
                      구현 사례 보기 <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>

    </main>
  );
}
