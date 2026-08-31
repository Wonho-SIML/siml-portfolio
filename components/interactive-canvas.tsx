"use client";

import { useEffect, useRef } from "react";

const GRID_SPACING = 32;
const DOT_BASE_RADIUS = 1.4;
const DOT_MAX_RADIUS = 3.8;
const POINTER_RADIUS = 150;
const BASE_ALPHA = 0.06;
const MAX_DPR = 2;

interface Dot {
  x: number;
  y: number;
  radius: number;
  alpha: number;
}

export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

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
        const red = Math.round(255 + (56 - 255) * colorMix);
        const green = Math.round(255 + (189 - 255) * colorMix);
        const blue = Math.round(255 + (248 - 255) * colorMix);

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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
