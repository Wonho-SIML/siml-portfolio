"use client";
import { useState, useEffect, useRef, useCallback } from "react";

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [node, setNode] = useState<HTMLElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const observe = useCallback((element: HTMLElement | null) => {
    setNode(element);
  }, []);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    if (node) {
      const newObserver = new IntersectionObserver(([entry]) => {
        setEntry(entry);
      }, options);
      newObserver.observe(node);
      observer.current = newObserver;
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [node, options]);

  return [observe, entry] as const;
};
