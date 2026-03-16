"use client";

import { forwardRef, useRef, useState } from "react";
import { useScrollDirection } from "@/hooks/useScrollDirection";

interface HomeNavigationButtonProps {
  ref: HTMLButtonElement;
  type: "prev" | "next";
  handleAction: () => void;
}

const HomeNavigationButton = forwardRef<
  HTMLButtonElement,
  HomeNavigationButtonProps
>(({ type, handleAction }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      onClick={handleAction}
      className="transition duration-200 border border-transparent cursor-pointer p-1 rounded-4xl bg-[rgba(255,255,255,0.25)] hover:border-white hover:-translate-y-0.5 disabled:cursor-not-allowed"
      aria-label={`Scroll Down to ${type === "prev" ? "Prev" : "Next"} Section`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={type === "prev" ? "rotate-180" : ""}
        aria-hidden="true"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
});

export function HomeNavigation() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [section, setSection] = useState<"portfolio" | "intro">("intro");
  const translateY = useScrollDirection(5, 2, 300, 100);

  const handleNextSection = (type: "prev" | "next") => {
    let id: "portfolio" | "intro" | null = null;

    if (type === "prev") {
      if (section === "portfolio") {
        id = "intro";
        setSection("intro");
      }
    } else {
      if (section === "intro") {
        id = "portfolio";
        setSection("portfolio");
      }
    }

    if (prevRef.current) prevRef.current.disabled = id === "intro";
    if (nextRef.current) nextRef.current.disabled = id === "portfolio";
    if (!id) return;

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed bottom-8 right-8 flex gap-2 text-white text-sm p-2 rounded-4xl select-none bg-[rgba(255,255,255,0.12)] backdrop-blur-lg border border-[rgba(255,255,255,0.14)] shadow-[0px_8px_32px_rgba(0, 0, 0, 0.15)] transition-transform duration-300 ease-in-out"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <HomeNavigationButton
        ref={prevRef}
        type="prev"
        handleAction={() => handleNextSection("prev")}
      />
      <HomeNavigationButton
        ref={nextRef}
        type="next"
        handleAction={() => handleNextSection("next")}
      />
    </div>
  );
}
