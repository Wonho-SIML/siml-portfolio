import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  DatabaseZap,
  FileStack,
  Layers3,
  RadioTower,
  ShieldCheck,
} from "lucide-react";

import AnimatedSection from "@/components/animated-section";
import InteractiveCanvas from "@/components/interactive-canvas";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { calculateExperience } from "@/lib/utils";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const coreTech = [
  "React",
  "TypeScript",
  ".NET MAUI",
  "WebAssembly",
  "WebSocket",
  "BLE",
];

const strengths = [
  {
    icon: DatabaseZap,
    title: "오프라인 동기화",
    description:
      "앱이 백그라운드로 전환되거나 동기화가 겹칠 때 생기는 데이터 중복과 유실 위험을 추적하고, 저장과 복구 순서를 수정했습니다.",
  },
  {
    icon: FileStack,
    title: "대용량 PDF 처리",
    description:
      "수 GB 규모 문서를 나누어 전송하고, 해시 검증과 임시 파일 처리를 적용해 전송 중단과 불완전 저장을 감지하고 다시 처리할 수 있도록 했습니다.",
  },
  {
    icon: RadioTower,
    title: "실시간 협업과 음성 처리",
    description:
      "세션 연결과 재접속 처리를 정리하고, 실시간 STT 결과가 세션 종료 후 교정과 요약, 아카이브 분석으로 이어지도록 구성했습니다.",
  },
];

const highlights = [
  { value: calculateExperience(), label: "실무 개발 경력" },
  { value: "4개 플랫폼", label: "Android, iOS, Web, Windows" },
  { value: "웹과 네이티브", label: "React, .NET MAUI 연동" },
  { value: "실제 환경 검증", label: "회귀 테스트, 플랫폼별 QA, 패키징" },
];

export default function Portfolio() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <InteractiveCanvas />
      </div>

      <main className="relative z-10 break-keep">
        <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl flex-col justify-center px-5 py-16 sm:px-8 lg:px-10">
          <AnimatedSection className="max-w-5xl" animationType="fadeInUp">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-sky-400" aria-hidden="true" />
              <p className="font-display text-sm font-medium uppercase tracking-[0.18em] text-sky-300">
                Frontend / Hybrid Client Engineer
              </p>
            </div>

            <h1 className="text-balance font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-[5.6rem]">
              데이터와 문서가
              <br />끝까지 안전하게 흐르도록.
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-neutral-300 sm:text-xl sm:leading-9">
              React와 .NET MAUI로 웹 서비스와 하이브리드 앱을 개발하며 오프라인
              동기화, 대용량 PDF 처리, 실시간 협업, 음성 처리, BLE 펜 연동을 구현해
              온 서원호입니다.
            </p>

            <div className="mt-7 flex flex-wrap gap-2" aria-label="핵심 기술">
              {coreTech.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-neutral-700 bg-neutral-900/70 px-3 py-1 text-neutral-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-sky-400 text-neutral-950 hover:bg-sky-300"
              >
                <Link href="/projects">
                  프로젝트 사례 보기 <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-neutral-700 bg-neutral-950/60 text-neutral-200 hover:bg-neutral-800 hover:text-white"
              >
                <Link href="/resume">경력 요약 보기</Link>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-14" delay="120ms">
            <dl className="grid gap-px overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-800 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item) => (
                <div key={item.label} className="bg-neutral-950/90 p-5 sm:p-6">
                  <dt className="text-xs leading-5 text-neutral-400">{item.label}</dt>
                  <dd className="mt-1 font-display text-lg font-semibold text-white">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>
        </section>

        <section className="border-y border-neutral-800/80 bg-neutral-950/80">
          <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <AnimatedSection className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <div className="mb-4 flex items-center gap-2 text-sky-300">
                  <Layers3 className="h-5 w-5" aria-hidden="true" />
                  <p className="text-sm font-semibold uppercase tracking-[0.18em]">
                    주요 작업
                  </p>
                </div>
                <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                  실무에서 다음 문제를 주로 다뤘습니다.
                </h2>
                <p className="mt-5 text-base leading-7 text-neutral-400">
                  데이터 중복, 문서 전송 실패, 세션 끊김처럼 실제 사용 환경에서
                  발생한 문제를 재현해 수정하고, 관련 사용자 흐름을 회귀 테스트와
                  실기 검증으로 처음부터 끝까지 확인했습니다.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {strengths.map(({ icon: Icon, title, description }, index) => (
                  <AnimatedSection
                    key={title}
                    delay={`${index * 80}ms`}
                    className="rounded-2xl border border-neutral-800 bg-neutral-900/75 p-6"
                  >
                    <Icon className="h-6 w-6 text-sky-300" aria-hidden="true" />
                    <h3 className="mt-5 font-display text-lg font-semibold text-white">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-neutral-400">
                      {description}
                    </p>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <AnimatedSection className="rounded-3xl border border-sky-400/20 bg-gradient-to-br from-sky-400/10 via-neutral-900 to-neutral-950 p-7 sm:p-10">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-sky-300">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  <p className="text-sm font-semibold">경력과 프로젝트</p>
                </div>
                <h2 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">
                  그동안 맡아 온 주요 프로젝트를 정리했습니다.
                </h2>
                <p className="mt-4 text-sm leading-7 text-neutral-400 sm:text-base">
                  하이브리드 앱 NeoStudio2와 스마트펜 Web SDK, 문서 제작·출력 도구
                  CasterN, 실시간 협업 서비스 NeoCAST를 개발하며 맡은 역할과
                  해결한 문제를 프로젝트별로 소개합니다.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="shrink-0 border-sky-300/30 bg-transparent text-sky-100 hover:bg-sky-300 hover:text-neutral-950"
              >
                <Link href="/about">경험과 작업 방식 보기</Link>
              </Button>
            </div>
          </AnimatedSection>
        </section>
      </main>
    </>
  );
}
