import type { Metadata } from "next";
import { Github, Linkedin, Mail } from "lucide-react";

import AnimatedSection from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Frontend / Hybrid Client Engineer 서원호에게 채용 및 프로젝트 관련 연락을 보낼 수 있습니다.",
  path: "/contact",
});

const fit = [
  "React와 TypeScript 기반 웹 서비스 프론트엔드",
  "웹과 .NET MAUI를 연결하는 하이브리드 클라이언트",
  "오프라인 데이터, 대용량 PDF, 실시간 협업처럼 상태 처리가 중요한 서비스와 앱",
  "문제 재현부터 회귀 테스트와 플랫폼별 QA, 릴리스까지 함께하는 역할",
];

export default function ContactPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center px-5 py-16 sm:px-8 lg:px-10">
      <AnimatedSection className="grid w-full gap-10 overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/65 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Contact
          </p>
          <h1 className="mt-4 text-balance font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
            서비스와 앱의 어려운 문제를
            <br />함께 풀고 싶습니다.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
            채용 포지션, 팀이 해결하고 있는 문제와 기대 역할을 알려주시면
            관련 경험을 중심으로 답변드리겠습니다.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              size="lg"
              className="bg-sky-400 text-neutral-950 hover:bg-sky-300"
            >
              <a href="mailto:swh1182@gmail.com?subject=Portfolio%20inquiry">
                <Mail aria-hidden="true" /> 이메일 보내기
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-neutral-700 bg-transparent text-neutral-300 hover:bg-neutral-800 hover:text-white"
            >
              <a
                href="https://www.linkedin.com/in/siml-seo/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin aria-hidden="true" /> LinkedIn
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-neutral-700 bg-transparent text-neutral-300 hover:bg-neutral-800 hover:text-white"
            >
              <a
                href="https://github.com/Wonho-SIML"
                target="_blank"
                rel="noreferrer"
              >
                <Github aria-hidden="true" /> GitHub
              </a>
            </Button>
          </div>
        </div>

        <aside className="rounded-2xl border border-white/5 bg-neutral-950/65 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
            Good fit
          </p>
          <h2 className="mt-3 font-display text-xl font-semibold text-white">
            이런 역할과 잘 맞습니다
          </h2>
          <ul className="mt-6 space-y-4">
            {fit.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-neutral-300">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </AnimatedSection>
    </main>
  );
}
