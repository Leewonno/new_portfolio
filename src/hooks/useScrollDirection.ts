"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollDirection(peak = 5, bounce = 2, duration = 300, delay = 0) {
  const [translateY, setTranslateY] = useState(0);
  const lastScrollY = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const dir = currentY > lastScrollY.current ? -1 : 1;
      lastScrollY.current = currentY;

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setTranslateY(dir * peak);
        timeoutRef.current = setTimeout(() => {
          setTranslateY(dir * -bounce);
          timeoutRef.current = setTimeout(() => setTranslateY(0), duration);
        }, duration);
      }, delay);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [peak, bounce, duration, delay]);

  return translateY;
}
