import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  GitPullRequestArrow,
  ScanSearch,
  TestTubeDiagonal,
} from "lucide-react";

import AnimatedSection from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "웹 서비스와 하이브리드 앱에서 데이터 흐름과 플랫폼 간 연동 문제를 해결해 온 Frontend / Hybrid Client Engineer 서원호를 소개합니다.",
  path: "/about",
});

const principles = [
  {
    icon: ScanSearch,
    title: "전체 흐름을 확인합니다",
    description:
      "화면에 나타난 증상만 보지 않고 데이터가 만들어지고 저장되고 전달되는 과정을 따라가며 문제가 시작된 지점을 확인합니다.",
  },
  {
    icon: Boxes,
    title: "연결되는 지점을 분명히 합니다",
    description:
      "React와 .NET MAUI, C#과 TypeScript, 웹과 Windows처럼 서로 다른 환경이 연결될 때 각 영역이 맡을 일과 오류 처리 방식을 정리합니다.",
  },
  {
    icon: TestTubeDiagonal,
    title: "문제를 재현하고 실제 환경에서 확인합니다",
    description:
      "문제가 발생한 조건을 먼저 재현하고, 수정한 뒤에는 관련 사용자 흐름을 처음부터 끝까지 확인한 다음 필요한 플랫폼에서도 다시 점검합니다.",
  },
  {
    icon: GitPullRequestArrow,
    title: "설치와 배포까지 확인합니다",
    description:
      "코드 수정으로 끝내지 않고 패키지 버전과 설치 파일, 배포 경로까지 확인합니다.",
  },
];

const skillGroups = [
  {
    title: "Product frontend",
    description:
      "React, TypeScript, Next.js, MobX, Jotai, Zustand, TanStack Query, i18n",
  },
  {
    title: "Hybrid clients",
    description: ".NET MAUI, C#, Hybrid WebView, JS bridge, Android, iOS, Windows",
  },
  {
    title: "Documents & offline",
    description: "Canvas, PDF.js, WebAssembly, Web Worker, IndexedDB/OPFS, streaming I/O",
  },
  {
    title: "Realtime & devices",
    description: "WebSocket, STT, LLM integration, Web Bluetooth, BLE smartpen",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 pb-24 pt-14 sm:px-8 lg:px-10">
      <AnimatedSection className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            About
          </p>
          <h1 className="mt-4 text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            웹과 앱 사이에서 생기는 문제를
            <br />분명하게 정리합니다.
          </h1>
          <div className="mt-7 max-w-3xl space-y-5 text-base leading-8 text-foreground-muted sm:text-lg">
            <p>
              안녕하세요. React를 중심으로 웹 서비스를 개발해 왔고, 현재는 .NET
              MAUI와 React를 함께 사용하는 하이브리드 앱도 개발하고 있는
              서원호입니다.
            </p>
            <p>
              Canvas API와 Web Bluetooth 같은 웹 표준 기술을 활용해 스마트펜
              SDK와 웹 기반 문서 작성 도구를 개발했고, 오프라인에서도 사용할 수
              있는 하이브리드 앱도 만들었습니다. 그 과정에서 대용량 PDF 처리, BLE
              기기 연동, 실시간 협업과 음성 처리 기능을 맡았습니다.
            </p>
            <p>
              저는 문제가 생기면 화면에 보이는 오류만 고치지 않고, 데이터가
              어디에서 잘못됐는지 직접 추적해가며 원인을 찾습니다. 수정한 뒤에는
              문제가 발생했던 환경에서 같은 사용자 흐름을 다시 실행해 결과를
              확인합니다. 기능을 다시 동작하게 만드는 데서 끝내지 않고, 같은
              문제가 다시 생기지 않게 원인을 막는 것까지가 수정이라고
              생각합니다.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary-hover">
              <Link href="/projects">
                구현 사례 보기 <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-input bg-transparent text-foreground-muted hover:bg-muted hover:text-foreground"
            >
              <Link href="/resume">경력 요약 보기</Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand/20 via-transparent to-violet-400/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border bg-card p-3">
            <Image
              src="/about_my_photo.png"
              alt="Frontend / Hybrid Client Engineer 서원호"
              width={400}
              height={400}
              priority
              className="aspect-square w-full rounded-2xl object-cover"
            />
            <div className="p-5">
              <p className="font-display text-xl font-semibold text-foreground">
                Wonho Seo
              </p>
              <p className="mt-1 text-sm text-foreground-subtle">
                Frontend / Hybrid Client Engineer
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <section aria-labelledby="principles" className="mt-24">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Engineering principles
          </p>
          <h2
            id="principles"
            className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl"
          >
            제가 문제를 푸는 방식
          </h2>
        </AnimatedSection>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {principles.map(({ icon: Icon, title, description }, index) => (
            <AnimatedSection
              key={title}
              delay={`${index * 70}ms`}
              className="rounded-2xl border bg-card/65 p-6 sm:p-7"
            >
              <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-foreground-subtle">
                {description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="career"
        className="mt-24 grid gap-10 border-y py-14 lg:grid-cols-[0.7fr_1.3fr]"
      >
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Experience
          </p>
          <h2
            id="career"
            className="mt-3 font-display text-3xl font-bold text-foreground"
          >
            네오랩컨버전스
          </h2>
          <p className="mt-2 text-foreground-subtle">책임연구원 · 2021.11 — 현재</p>
        </AnimatedSection>

        <AnimatedSection delay="80ms">
          <ul className="space-y-4 text-sm leading-7 text-foreground-muted sm:text-base">
            <li className="border-l border-brand/40 pl-5">
              React와 .NET MAUI 기반 하이브리드 문서 앱 NeoStudio2에서 사용자가
              작성한 문서의 오프라인 동기화, 웹과 네이티브 연동, 플랫폼별
              호환성을 개선했습니다.
            </li>
            <li className="border-l border-brand/40 pl-5">
              문서 제작·출력 도구 CasterN에서 WebAssembly PDF 엔진과 수 GB
              규모 문서의 저장, 전송, 출력, 패키징 경로를 구현하고 실제
              환경에서 검증했습니다.
            </li>
            <li className="border-l border-brand/40 pl-5">
              실시간 협업 서비스 NeoCAST를 프로토타입 단계에서 이어받아 세션
              관리, 실시간 자막과 아카이브 분석, 브라우저에서 네이티브 앱으로
              이어지는 인쇄 흐름까지 프론트엔드와 서버 전반을 개발했습니다.
            </li>
            <li className="border-l border-brand/40 pl-5">
              브라우저용 스마트펜 Web SDK에서 여러 펜의 연결 상태 처리를
              맡고, 공개 API와 타입, 샘플, 문서를 함께 관리하고 있습니다.
            </li>
            <li className="border-l border-brand/40 pl-5">
              입사 초기에는 드로잉 보드 제품 그리다보드의 펜 연동 기능 개선에
              참여했습니다.
            </li>
          </ul>
        </AnimatedSection>
      </section>

      <section aria-labelledby="skills" className="mt-24">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Technical scope
          </p>
          <h2
            id="skills"
            className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl"
          >
            실무에서 활용해 온 기술
          </h2>
        </AnimatedSection>
        <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-background p-6">
              <dt className="font-display text-lg font-semibold text-foreground">
                {group.title}
              </dt>
              <dd className="mt-2 text-sm leading-7 text-foreground-subtle">
                {group.description}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
