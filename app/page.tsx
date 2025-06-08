"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import InteractiveCanvas from "@/components/interactive-canvas";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import { calculateExperience } from "@/lib/utils";

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4">
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-16 sm:-mt-20"
      >
        <InteractiveCanvas />
        <AnimatedSection
          animationType="fadeInUp"
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            서원호, FRONTEND
            <br />
            DEVELOPER
          </h1>
          <h3 className="text-xl md:text-2xl mb-4 text-gray-200">
            {calculateExperience()} 이상 React 기반 프론트엔드 개발자
          </h3>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            MAUI와 React를 활용한 크로스플랫폼 하이브리드 앱 개발로
            <br />
            다양한 환경에서의 기술 통합 및 문제 해결 능력을 보유하고 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href="/swh_resume.pdf" download="swh_resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                이력서 다운로드
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black"
              asChild
            >
              <Link href="/projects">프로젝트 보기</Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
