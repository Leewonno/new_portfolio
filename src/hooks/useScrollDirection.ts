"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollDirectionContext } from "@/context/ScrollDirectionContext";

export function useScrollDirection(
  peak = 5,
  bounce = 2,
  duration = 300,
  delay = 0,
) {
  const direction = useScrollDirectionContext();
  const [translateY, setTranslateY] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (direction === null) return;
    const dir = direction === "down" ? -1 : 1;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setTranslateY(dir * peak);
      timeoutRef.current = setTimeout(() => {
        setTranslateY(dir * -bounce);
        timeoutRef.current = setTimeout(() => setTranslateY(0), duration);
      }, duration);
    }, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [direction, peak, bounce, duration, delay]);

  return translateY;
}
