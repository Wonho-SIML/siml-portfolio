import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

// 색상 값은 globals.css의 :root(라이트)/.dark(다크) CSS 변수가 단일 정본이다.
// rgb(... / <alpha-value>) 형태로 연결해 bg-brand/10 같은 알파 변형도 토큰 그대로 쓴다.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: token("background"),
        foreground: {
          DEFAULT: token("foreground"),
          soft: token("foreground-soft"),
          muted: token("foreground-muted"),
          subtle: token("foreground-subtle"),
        },
        card: {
          DEFAULT: token("card"),
          foreground: token("foreground"),
        },
        // muted.foreground는 shadcn 관례(보조 텍스트)라 subtle 단계를 가리킨다.
        // 사이트 고유 텍스트 램프는 text-foreground-{soft,muted,subtle}을 쓴다.
        muted: {
          DEFAULT: token("muted"),
          foreground: token("foreground-subtle"),
        },
        primary: {
          DEFAULT: token("primary"),
          foreground: token("primary-foreground"),
          hover: token("primary-hover"),
        },
        // secondary/accent는 ui/* shadcn 컴포넌트 호환용 별칭이다.
        // 표면색은 셋 다 --muted 하나를 공유하고 전경색만 역할별로 다르다.
        secondary: {
          DEFAULT: token("muted"),
          foreground: token("foreground-soft"),
        },
        accent: {
          DEFAULT: token("muted"),
          foreground: token("foreground"),
        },
        destructive: {
          DEFAULT: token("destructive"),
          foreground: token("destructive-foreground"),
        },
        brand: {
          DEFAULT: token("brand"),
          hover: token("brand-hover"),
        },
        success: token("success"),
        border: token("border"),
        input: token("input"),
        ring: token("ring"),
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
