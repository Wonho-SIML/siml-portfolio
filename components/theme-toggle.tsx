"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};

// 서버 렌더와 하이드레이션 첫 렌더에서는 false, 이후 true를 돌려주는
// 하이드레이션 안전 마운트 판별이다.
const useMounted = () =>
  useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

// 아이콘 전환은 .dark CSS 변형으로 처리한다. 서버는 테마를 알 수 없으므로
// 상태 기반으로 아이콘을 고르면 하이드레이션 불일치가 생긴다.
// aria-label만 마운트 이후 현재 테마를 반영해 전환 방향을 알린다.
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const label = !mounted
    ? "라이트/다크 테마 전환"
    : resolvedTheme === "dark"
      ? "라이트 테마로 전환"
      : "다크 테마로 전환";

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={label}
      className="rounded-lg p-2 text-foreground-subtle transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Sun className="h-5 w-5 dark:hidden" aria-hidden="true" />
      <Moon className="hidden h-5 w-5 dark:block" aria-hidden="true" />
    </button>
  );
}
