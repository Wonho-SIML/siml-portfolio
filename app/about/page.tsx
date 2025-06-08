"use client";
import type React from "react";
import Image from "next/image";
import { Code, Palette, Zap, ExternalLink } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import { calculateExperience, cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AnimatedSection from "@/components/animated-section";
import { skillsData } from "./skillData";
import { experiences } from "./experienceData";
import SkillCard from "./skillCard";
import ExperienceItem from "./experienceItem";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4">
      <AnimatedSection id="about-me" className="mt-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            About Me
          </h2>
          <div className="grid md:grid-cols-[7fr_3fr] gap-12 items-center">
            <AnimatedSection
              animationType="fadeInLeft"
              className="text-gray-300 space-y-6"
            >
              <p className="text-lg leading-relaxed">
                안녕하세요! {calculateExperience()} 이상 React 기반 프론트엔드
                개발을 해온 서원호입니다. React, TypeScript를 중심으로 한
                프론트엔드 생태계에 능숙하며, Canvas API, BLE 등 웹 표준 기술을
                활용한 고도화된 기능 구현 경험을 보유하고 있습니다.
              </p>
              <p className="text-lg leading-relaxed">
                기획, QA팀과의 긴밀한 협업을 통해 사용자 중심의 기능을
                성공적으로 구현하고 제품 안정성을 높인 경험을 갖고 있습니다.
                다양한 플랫폼 환경에 대한 높은 이해를 바탕으로 기술적 제약을
                극복하고 최적의 사용자 경험(UX)을 설계 및 제공합니다.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  {
                    icon: <Code className="text-blue-400" size={20} />,
                    text: "React 생태계 전문", // react, typescript, mobx, ..
                  },
                  {
                    icon: <Palette className="text-purple-400" size={20} />,
                    text: "고급 Canvas 활용", // canvas api
                  },
                  {
                    icon: <Zap className="text-yellow-400" size={20} />,
                    text: "성능 최적화 전문", // 메모리 관리, web worker 활용
                  },
                  {
                    icon: <ExternalLink className="text-green-400" size={20} />,
                    text: "웹 표준 기술 숙련", // websocket, canvas, ble
                  },
                ].map((item, idx) => (
                  <AnimatedSection
                    key={item.text}
                    animationType="fadeInUp"
                    delay={`${idx * 100}ms`}
                    className="flex items-center space-x-2 p-3 bg-white/5 rounded-lg"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="fadeInRight">
              <Image
                src="/about_my_photo.png?height=400&width=400"
                alt="Profile"
                width={400}
                height={400}
                className="rounded-lg mx-auto shadow-2xl"
              />
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="skills" className="my-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            My Skills
          </h2>
          <Carousel
            opts={{ align: "start", loop: true, slidesToScroll: 1 }}
            plugins={[
              Autoplay({
                delay: 1500,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
              }) as any,
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {skillsData.map((skill, index) => (
                <CarouselItem key={index} className="pl-4 basis-auto">
                  <SkillCard skill={skill} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="experience"
        className="bg-black/20 rounded-lg my-10 py-10"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-20">
            My Journey
          </h2>
          <div className="relative">
            <div className="hidden sm:block absolute w-0.5 h-full bg-blue-500/30 left-1/2 transform -translate-x-1/2 top-0"></div>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={cn(
                  "mb-12 flex",
                  index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"
                )}
              >
                <div className="hidden sm:flex sm:w-1/2"></div>
                <div className="hidden sm:flex relative px-4 w-auto justify-center items-center">
                  <div className="h-4 w-4 bg-blue-500 rounded-full absolute z-10 border-4 border-slate-900"></div>
                </div>
                <div
                  className={cn(
                    "w-full sm:w-1/2 p-1",
                    index % 2 === 0
                      ? "sm:pr-8 sm:text-right"
                      : "sm:pl-8 sm:text-left"
                  )}
                >
                  <ExperienceItem
                    item={exp}
                    index={index}
                    animationType={
                      index % 2 === 0 ? "fadeInLeft" : "fadeInRight"
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
