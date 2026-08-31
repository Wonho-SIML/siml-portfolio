"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const GRID_SPACING = 32;
const DOT_BASE_RADIUS = 1.4;
const DOT_MAX_RADIUS = 3.8;
const POINTER_RADIUS = 150;
const BASE_ALPHA = 0.06;
const MAX_DPR = 2;

// 점 색상은 테마별로 배경과 대비되는 값을 쓴다(휴지 상태 → 포인터 근접 상태).
const DOT_COLORS = {
  dark: { base: [255, 255, 255], active: [56, 189, 248] },
  light: { base: [10, 10, 10], active: [3, 105, 161] },
} as const;

interface Dot {
  x: number;
  y: number;
  radius: number;
  alpha: number;
}

export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  // 테마가 바뀌면 effect가 다시 실행되어 새 색상으로 전체를 다시 그린다.
  // resolvedTheme는 서버 렌더에서만 undefined이므로 다크 폴백은 타입 방어용이다.
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const { base, active } =
      DOT_COLORS[resolvedTheme === "light" ? "light" : "dark"];

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const pointer = { x: -9999, y: -9999 };
    let dots: Dot[] = [];
    let frameId: number | null = null;
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;

    const setup = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const columns = Math.floor(width / GRID_SPACING) + 1;
      const rows = Math.floor(height / GRID_SPACING) + 1;
      dots = Array.from({ length: columns * rows }, (_, index) => ({
        x: (index % columns) * GRID_SPACING,
        y: Math.floor(index / columns) * GRID_SPACING,
        radius: DOT_BASE_RADIUS,
        alpha: BASE_ALPHA,
      }));
    };

    const draw = () => {
      frameId = null;
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const pointerRadiusSquared = POINTER_RADIUS * POINTER_RADIUS;
      let unsettled = false;

      context.clearRect(0, 0, width, height);

      for (const dot of dots) {
        const xDistance = dot.x - pointer.x;
        const yDistance = dot.y - pointer.y;
        const distanceSquared =
          xDistance * xDistance + yDistance * yDistance;
        const influence =
          !reducedMotion && distanceSquared < pointerRadiusSquared
            ? Math.pow(
                1 - Math.sqrt(distanceSquared) / POINTER_RADIUS,
                2
              )
            : 0;
        const targetRadius =
          DOT_BASE_RADIUS + (DOT_MAX_RADIUS - DOT_BASE_RADIUS) * influence;
        const targetAlpha = BASE_ALPHA + (0.55 - BASE_ALPHA) * influence;

        dot.radius += (targetRadius - dot.radius) * 0.18;
        dot.alpha += (targetAlpha - dot.alpha) * 0.18;
        unsettled ||=
          Math.abs(targetRadius - dot.radius) > 0.01 ||
          Math.abs(targetAlpha - dot.alpha) > 0.002;

        const colorMix = Math.max(
          0,
          Math.min(1, (dot.alpha - BASE_ALPHA) / (0.55 - BASE_ALPHA))
        );
        const red = Math.round(base[0] + (active[0] - base[0]) * colorMix);
        const green = Math.round(base[1] + (active[1] - base[1]) * colorMix);
        const blue = Math.round(base[2] + (active[2] - base[2]) * colorMix);

        context.beginPath();
        context.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${dot.alpha})`;
        context.fill();
      }

      if (unsettled && !document.hidden) {
        frameId = requestAnimationFrame(draw);
      }
    };

    const requestDraw = () => {
      if (frameId === null && !document.hidden) {
        frameId = requestAnimationFrame(draw);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      requestDraw();
    };

    const handlePointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
      requestDraw();
    };

    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setup();
        requestDraw();
      }, 120);
    };

    const handleVisibility = () => {
      if (document.hidden && frameId !== null) {
        cancelAnimationFrame(frameId);
        frameId = null;
      } else {
        requestDraw();
      }
    };

    setup();
    draw();

    if (!reducedMotion) {
      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      window.addEventListener("pointerleave", handlePointerLeave);
    }
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      if (resizeTimer) clearTimeout(resizeTimer);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
