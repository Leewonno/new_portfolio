import type { HomeBackgroundProps } from "../model/types";

export function HomeBackgroundTheme({ style, className }: HomeBackgroundProps) {
  return (
    <div
      className={`${className} w-full h-full fixed inset-0 z-[-1] animate-[circle-reveal_1.5s_ease-out_forwards]`}
      style={style}
    ></div>
  );
}
