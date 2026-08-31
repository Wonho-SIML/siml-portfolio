"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

// 첫 방문은 시스템 테마(prefers-color-scheme)를 따르고, 사용자가 수동으로
// 전환하면 next-themes가 localStorage("theme")에 저장해 이후 방문에 적용한다.
export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
