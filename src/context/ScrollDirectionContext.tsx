"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

type ScrollDirection = "up" | "down" | null;

const ScrollDirectionContext = createContext<ScrollDirection>(null);

export function ScrollDirectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [direction, setDirection] = useState<ScrollDirection>(null);
  const lastScrollY = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setDirection(currentY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentY;

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setDirection(null), 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <ScrollDirectionContext.Provider value={direction}>
      {children}
    </ScrollDirectionContext.Provider>
  );
}

export function useScrollDirectionContext() {
  return useContext(ScrollDirectionContext);
}
