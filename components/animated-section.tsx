import type React from "react";

import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  threshold?: number;
  delay?: string;
  animationType?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "default";
}

const animationClasses: Record<
  NonNullable<AnimatedSectionProps["animationType"]>,
  string
> = {
  fadeInUp: "reveal-up",
  fadeInLeft: "reveal-left",
  fadeInRight: "reveal-right",
  default: "reveal-up",
};

export default function AnimatedSection({
  children,
  id,
  className,
  delay,
  animationType = "default",
}: AnimatedSectionProps) {
  const style = delay
    ? ({ animationDelay: delay } as React.CSSProperties)
    : undefined;

  return (
    <div
      id={id}
      className={cn("reveal", animationClasses[animationType], className)}
      style={style}
    >
      {children}
    </div>
  );
}
