"use client";

import Image from "next/image";
import logo_1 from "@/assets/images/logo_letter_1.svg";
import logo_2 from "@/assets/images/logo_letter_2.svg";
import logo_3 from "@/assets/images/logo_letter_3.svg";
import logo_4 from "@/assets/images/logo_letter_4.svg";
import logo_5 from "@/assets/images/logo_letter_5.svg";
import candy from "@/assets/images/candy.svg";
import dice from "@/assets/images/dice.svg";
import jellyfish from "@/assets/images/jellyfish.svg";
import rocket from "@/assets/images/rocket.svg";
import ship from "@/assets/images/ship.svg";
import star from "@/assets/images/star.svg";
import { HomeBackgroundDefault } from "./HomeBackgroundDefault";
import { HomeBackgroundTheme } from "./HomeBackgroundTheme";
import { useRef, useState } from "react";

const LOGO_LETTERS = [
  { src: logo_1, id: "n", title: "NMIXX" },
  { src: logo_2, id: "m", title: "NMIXX" },
  { src: logo_3, id: "i", title: "NMIXX" },
  { src: logo_4, id: "x1", title: "NMIXX" },
  { src: logo_5, id: "x2", title: "NMIXX" },
];

const ID_TO_BG_IDX: Record<string, number> = {
  n: 1,
  m: 2,
  i: 3,
  x1: 4,
  x2: 5,
};

const BG_COLORS = [
  "bg-[linear-gradient(to_bottom,#080810_0%,#04100d_100%)]", // AD MARE
  "bg-[linear-gradient(160deg,#8AAEE8_0%,#6B82D4_40%,#5060B8_100%)]", // Blue Valentine
  "bg-[linear-gradient(135deg,#0A0C18_0%,#141E2C_55%,#0A1820_100%)]", // Fe3O4: FORWARD
  "bg-[linear-gradient(to_bottom,#9AAAB8_0%,#708090_45%,#383848_100%)]", // Fe3O4: STICK OUT
  "bg-[linear-gradient(to_bottom,#5AAEE0_0%,#82C0E8_50%,#B8D8F0_100%)]", // exprego
  "bg-[linear-gradient(to_top,#F0C010_0%,#E06020_30%,#C03018_60%,#6A0808_100%)]", // ENTWURF
];

const BG_ICONS = [ship, candy, rocket, star, jellyfish, dice];

export function HomeIntro() {
  const [bgIndex, setBgIndex] = useState<number>(0);
  const [prevBgIndex, setPrevBgIndex] = useState<number>(0);
  const [circlePos, setCirclePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const isAnimating = useRef(false);

  const handleClick = (e: React.MouseEvent) => {
    if (isAnimating.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const bgIdx = ID_TO_BG_IDX[e.currentTarget.id] ?? 0;

    isAnimating.current = true;
    setTimeout(() => {
      isAnimating.current = false;
    }, 1000);

    setCirclePos({ x, y });
    setPrevBgIndex(bgIndex);
    setBgIndex(bgIdx);
  };

  return (
    <div
      id="intro"
      className="w-full h-screen flex flex-col gap-16 justify-center items-center relative"
    >
      <div className="flex gap-8">
        {LOGO_LETTERS.map((v) => {
          return (
            <Image
              key={`logo_letters_${v.id}`}
              src={v.src}
              className="h-25 w-auto drop-shadow-[0_0_5px_white] cursor-pointer select-none hover:drop-shadow-[0_0_10px_white] transition duration-400"
              alt="logo_letters"
              title={v.title}
              id={v.id}
              onClick={(e) => handleClick(e)}
            />
          );
        })}
      </div>
      <div className="text-white text-sm p-3 px-4 rounded-4xl select-none bg-[rgba(255,255,255,0.28)] backdrop-blur-lg border border-[rgba(255,255,255,0.14)] shadow-[0px_8px_32px_rgba(0, 0, 0, 0.15)] transition-transform duration-200 hover:-translate-y-0.5 hover:border-white">
        👆 문자를 하나씩 클릭해 보세요
      </div>
      {/* 이전 배경 — 항상 아래에 정적으로 깔림 */}
      {prevBgIndex === 0 ? (
        <HomeBackgroundDefault />
      ) : (
        <div
          className={`${BG_COLORS[prevBgIndex]} w-full h-full fixed inset-0 z-[-2]`}
        />
      )}
      {/* 새 배경 — 원 애니메이션으로 위에서 덮음 */}
      <HomeBackgroundTheme
        key={`${bgIndex}`}
        className={BG_COLORS[bgIndex]}
        icon={BG_ICONS[bgIndex]}
        style={
          {
            "--x": `${circlePos.x}px`,
            "--y": `${circlePos.y}px`,
          } as React.CSSProperties
        }
      />
    </div>
  );
}
