"use client";

import { useEffect, useRef } from "react";
import type { Particle } from "@/lib/types";

// 캔버스 설정 값들
const NUMBER_OF_PARTICLES = 70;
const CONNECT_DISTANCE = 120;
const MOUSE_INTERACTION_DISTANCE = 100;
const PARTICLE_BASE_HUE = 180; // 파티클 기본 색상 (Hue)
const CONNECTION_LINE_COLOR = "rgba(100, 200, 200, 0.3)"; // 연결선 기본 색상

export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particlesArray: Particle[] = [];

    const mouse = {
      x: Number.POSITIVE_INFINITY,
      y: Number.POSITIVE_INFINITY,
    };

    const resizeCanvas = () => {
      // TODO: 리사이즈될때마다 파티클을 새로 만드는 이슈 (성능 문제) -> 기존 파티클 위치를 캔버스 크기에 맞춰 조정하는 방식은 어떤가
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particlesArray.length = 0;
      for (let i = 0; i < NUMBER_OF_PARTICLES; i++) {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const speedX = (Math.random() - 0.5) * 0.8;
        const speedY = (Math.random() - 0.5) * 0.8;
        const saturation = Math.random() * 30 + 70;
        const lightness = Math.random() * 30 + 50;
        const color = `hsl(${PARTICLE_BASE_HUE}, ${saturation}%, ${lightness}%)`;
        particlesArray.push({ x, y, size, speedX, speedY, color });
      }
    };
    resizeCanvas();

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX - canvas.getBoundingClientRect().left;
      mouse.y = event.clientY - canvas.getBoundingClientRect().top;
    };
    const handleMouseOut = () => {
      mouse.x = Number.POSITIVE_INFINITY;
      mouse.y = Number.POSITIVE_INFINITY;
    };
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseout", handleMouseOut);

    function updateParticles() {
      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i];
        if (p.x + p.size > (canvas?.width || 0) || p.x - p.size < 0) {
          p.speedX = -p.speedX;
        }
        if (p.y + p.size > (canvas?.height || 0) || p.y - p.size < 0) {
          p.speedY = -p.speedY;
        }
        const dxMouse = p.x - mouse.x;
        const dyMouse = p.y - mouse.y;
        const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distanceMouse < MOUSE_INTERACTION_DISTANCE) {
          const forceDirectionX = dxMouse / distanceMouse;
          const forceDirectionY = dyMouse / distanceMouse;
          const force =
            (MOUSE_INTERACTION_DISTANCE - distanceMouse) /
            MOUSE_INTERACTION_DISTANCE;
          const directionX = forceDirectionX * force * 1.5;
          const directionY = forceDirectionY * force * 1.5;
          p.x += directionX;
          p.y += directionY;
        }
        p.x += p.speedX;
        p.y += p.speedY;
      }
    }

    function drawParticles() {
      if (!ctx) return;
      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
    }

    function drawConnections() {
      if (!ctx) return;
      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i + 1; j < particlesArray.length; j++) {
          const p1 = particlesArray[i];
          const p2 = particlesArray[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECT_DISTANCE) {
            const opacity = 1 - distance / CONNECT_DISTANCE;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const baseColorMatch = CONNECTION_LINE_COLOR.match(
              /rgba\((\d+),(\d+),(\d+),([0-9.]+)\)/
            );
            if (baseColorMatch) {
              const r = baseColorMatch[1];
              const g = baseColorMatch[2];
              const b = baseColorMatch[3];
              const baseAlpha = parseFloat(baseColorMatch[4]);
              ctx.strokeStyle = `rgba(${r},${g},${b},${opacity * baseAlpha})`;
            } else {
              ctx.strokeStyle = `rgba(100, 200, 200, ${opacity * 0.3})`;
            }
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "transparent";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      updateParticles();
      drawConnections();
      drawParticles();
    }

    animate();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
