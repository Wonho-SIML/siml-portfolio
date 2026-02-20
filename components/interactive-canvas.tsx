"use client";

import { useEffect, useRef } from "react";

const GRID_SPACING = 32;
const DOT_BASE_RADIUS = 1.5;
const DOT_MAX_RADIUS = 4;
const MOUSE_RADIUS = 150;
const BASE_COLOR = { r: 255, g: 255, b: 255, a: 0.06 };
const ACTIVE_COLOR = { r: 56, g: 189, b: 248 }; // sky-400
const MAX_DPR = 2;

interface Dot {
  x: number;
  y: number;
  currentRadius: number;
  currentAlpha: number;
  targetRadius: number;
  targetAlpha: number;
  isActive: boolean;
}

export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let dots: Dot[] = [];
    let cols = 0;
    let rows = 0;

    const mouse = { x: -9999, y: -9999 };
    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

    let resizeTimeout: ReturnType<typeof setTimeout>;

    const setupCanvas = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      cols = Math.floor(width / GRID_SPACING) + 1;
      rows = Math.floor(height / GRID_SPACING) + 1;

      dots = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          dots.push({
            x: col * GRID_SPACING,
            y: row * GRID_SPACING,
            currentRadius: DOT_BASE_RADIUS,
            currentAlpha: BASE_COLOR.a,
            targetRadius: DOT_BASE_RADIUS,
            targetAlpha: BASE_COLOR.a,
            isActive: false,
          });
        }
      }
    };

    setupCanvas();

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseOut = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        setupCanvas();
      }, 100);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("resize", handleResize);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    function animate() {
      if (!ctx || !canvas) return;
      animationFrameId = requestAnimationFrame(animate);

      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      ctx.clearRect(0, 0, width, height);

      const mouseRadiusSq = MOUSE_RADIUS * MOUSE_RADIUS;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Calculate distance to mouse
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < mouseRadiusSq) {
          const dist = Math.sqrt(distSq);
          const influence = 1 - dist / MOUSE_RADIUS;
          // Ease the influence for smoother falloff
          const easedInfluence = influence * influence;

          dot.targetRadius = DOT_BASE_RADIUS + (DOT_MAX_RADIUS - DOT_BASE_RADIUS) * easedInfluence;
          dot.targetAlpha = BASE_COLOR.a + (0.6 - BASE_COLOR.a) * easedInfluence;
          dot.isActive = true;
        } else {
          dot.targetRadius = DOT_BASE_RADIUS;
          dot.targetAlpha = BASE_COLOR.a;
          dot.isActive = false;
        }

        // Smoothly interpolate current values toward targets
        const lerpSpeed = 0.15;
        dot.currentRadius = lerp(dot.currentRadius, dot.targetRadius, lerpSpeed);
        dot.currentAlpha = lerp(dot.currentAlpha, dot.targetAlpha, lerpSpeed);

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.currentRadius, 0, Math.PI * 2);

        if (dot.isActive || dot.currentAlpha > BASE_COLOR.a + 0.005) {
          // Blend from base white to sky-400
          const blendFactor = (dot.currentAlpha - BASE_COLOR.a) / (0.6 - BASE_COLOR.a);
          const r = Math.round(lerp(BASE_COLOR.r, ACTIVE_COLOR.r, blendFactor));
          const g = Math.round(lerp(BASE_COLOR.g, ACTIVE_COLOR.g, blendFactor));
          const b = Math.round(lerp(BASE_COLOR.b, ACTIVE_COLOR.b, blendFactor));
          ctx.fillStyle = `rgba(${r},${g},${b},${dot.currentAlpha})`;
        } else {
          ctx.fillStyle = `rgba(${BASE_COLOR.r},${BASE_COLOR.g},${BASE_COLOR.b},${BASE_COLOR.a})`;
        }

        ctx.fill();
      }
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
