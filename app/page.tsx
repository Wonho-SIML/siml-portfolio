"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ArrowRight, Code, Layers, Monitor, Cpu } from "lucide-react";
import InteractiveCanvas from "@/components/interactive-canvas";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import { calculateExperience } from "@/lib/utils";

const coreTech = [
  "React",
  "TypeScript",
  "Next.js",
  "Canvas API",
  "C# / MAUI",
  "MobX",
];

const highlights = [
  {
    icon: <Code className="h-5 w-5" />,
    label: "경력",
    value: calculateExperience() + "+",
    description: "React 기반 프론트엔드",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    label: "전문 분야",
    value: "크로스플랫폼",
    description: "MAUI + React 하이브리드",
  },
  {
    icon: <Monitor className="h-5 w-5" />,
    label: "핵심 역량",
    value: "Canvas & BLE",
    description: "웹 표준 고급 기술 활용",
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    label: "성과",
    value: "레거시 전환",
    description: "QT/C++ → 웹 기반 전환",
  },
];

export default function Portfolio() {
  return (
    <>
      {/* Full-viewport particle background */}
      <div className="fixed inset-0 z-0">
        <InteractiveCanvas />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero + Highlights in one viewport */}
        <section
          id="home"
          className="min-h-screen flex flex-col -mt-16 sm:-mt-20"
        >
          {/* Hero content - vertically centered in remaining space */}
          <div className="flex-1 flex items-center pt-16 sm:pt-20">
            <AnimatedSection
              animationType="fadeInUp"
              className="w-full max-w-5xl mx-auto"
            >
              <div className="space-y-6">
                {/* Label */}
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-sky-400" />
                  <span className="font-display text-sky-400 text-sm font-medium tracking-widest uppercase">
                    Frontend Developer
                  </span>
                </div>

                {/* Name */}
                <h1 className="font-display text-7xl md:text-[8rem] lg:text-[10rem] font-bold text-white tracking-tighter leading-[0.9]">
                  서원호
                </h1>

                {/* English name */}
                <p className="font-display text-2xl md:text-3xl font-light text-neutral-500 tracking-tight -mt-2">
                  Wonho Seo
                </p>

                {/* One-liner */}
                <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl">
                  웹과 하드웨어의 경계를 넘나드는 개발자
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {coreTech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-neutral-700 text-neutral-300 bg-neutral-900/50 hover:border-sky-400/50 hover:text-sky-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-400/20 transition-all duration-200 px-3 py-1 text-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    size="lg"
                    className="bg-sky-500 hover:bg-sky-600 text-white"
                    asChild
                  >
                    <a href="/swh_resume.pdf" download="swh_resume.pdf">
                      <Download className="mr-2 h-4 w-4" />
                      이력서 다운로드
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white"
                    asChild
                  >
                    <Link href="/projects">
                      프로젝트 보기
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Highlights - anchored to bottom of viewport */}
          <AnimatedSection className="pb-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {highlights.map((item, idx) => (
                  <AnimatedSection
                    key={item.label}
                    animationType="fadeInUp"
                    delay={`${idx * 100}ms`}
                    className="group p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 card-hover-glow transition-all duration-300"
                  >
                    <div className="text-sky-400 mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
                      {item.icon}
                    </div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className={`font-display text-2xl md:text-3xl font-bold mb-1 transition-colors ${item.label === "경력" ? "text-amber-400" : "text-white group-hover:text-amber-400"}`}>
                      {item.value}
                    </p>
                    <p className="text-sm text-neutral-400">
                      {item.description}
                    </p>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </>
  );
}
