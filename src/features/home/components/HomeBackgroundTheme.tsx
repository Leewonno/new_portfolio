import type { HomeBackgroundProps } from "../model/types";

export function HomeBackgroundTheme({ style, className }: HomeBackgroundProps) {
  return (
    <div
      className={`${className} w-full h-full fixed inset-0 z-[-1] animate-[circle-reveal_2s_ease-out_forwards] will-change-[clip-path]`}
      style={{ ...style, transform: "translateZ(0)" }}
    ></div>
  );
}
