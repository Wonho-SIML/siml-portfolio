"use client";
import type React from "react";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string; // section의 고유 ID
  className?: string; // 추가 스타일 클래스
  threshold?: number; // 애니메이션 트리거 임계값 (0.1 = 10%)
  delay?: string; // CSS transition-delay 값
  animationType?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "default"; // 애니메이션 타입
}

export default function AnimatedSection({
  children,
  id,
  className,
  threshold = 0.1,
  delay,
  animationType = "default",
}: AnimatedSectionProps) {
  const [observe, entry] = useIntersectionObserver({ threshold });
  const isVisible = entry?.isIntersecting; // 요소 뷰포트 진입 시 애니메이션

  let animationClasses = "";
  switch (animationType) {
    case "fadeInUp":
      animationClasses = isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10";
      break;
    case "fadeInLeft":
      animationClasses = isVisible
        ? "opacity-100 translate-x-0"
        : "opacity-0 -translate-x-10";
      break;
    case "fadeInRight":
      animationClasses = isVisible
        ? "opacity-100 translate-x-0"
        : "opacity-0 translate-x-10";
      break;
    default:
      animationClasses = isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10";
      break;
  }

  const style = delay
    ? ({ transitionDelay: delay } as React.CSSProperties)
    : undefined;

  return (
    <section
      id={id}
      ref={observe} // 애니메이션 트리거 요소
      className={cn(
        "transition-all duration-1000 ease-out", // 기본 트랜지션
        animationClasses,
        className
      )}
      style={style} // 애니메이션 지연 시간 설정
    >
      {children}
    </section>
  );
}
