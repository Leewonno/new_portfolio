"use client";

import Image from "next/image";
import logo_1 from "@/assets/images/logo_letter_1.svg";
import logo_2 from "@/assets/images/logo_letter_2.svg";
import logo_3 from "@/assets/images/logo_letter_3.svg";
import logo_4 from "@/assets/images/logo_letter_4.svg";
import logo_5 from "@/assets/images/logo_letter_5.svg";
import { HomeBackgroundDefault } from "./components/HomeBackgroundDefault";
import { HomeBackgroundTheme } from "./components/HomeBackgroundTheme";
import { useState } from "react";

const LOGO_LETTERS = [
  { src: logo_1, id: "n", title: "NMIXX" },
  { src: logo_2, id: "m", title: "NMIXX" },
  { src: logo_3, id: "i", title: "NMIXX" },
  { src: logo_4, id: "x1", title: "NMIXX" },
  { src: logo_5, id: "x2", title: "NMIXX" },
];

const BG_COLORS = [
  "bg-[linear-gradient(to_bottom,#080810_0%,#0D1A14_50%,#0A2820_100%)]", // AD MARE
  "bg-[linear-gradient(160deg,#8AAEE8_0%,#6B82D4_40%,#5060B8_100%)]", // Blue Valentine
  "bg-[linear-gradient(to_bottom,#9AAAB8_0%,#708090_45%,#383848_100%)]", // Fe3O4: STICK OUT
  "bg-[linear-gradient(to_bottom,#5AAEE0_0%,#82C0E8_50%,#B8D8F0_100%)]", // exprego
  "bg-[linear-gradient(135deg,#0A0C18_0%,#141E2C_55%,#0A1820_100%)]", // Fe3O4: FORWARD
  "bg-[linear-gradient(to_top,#F0C010_0%,#E06020_30%,#C03018_60%,#6A0808_100%)]", // ENTWURF
];

export function HomeIntro() {
  const [bgIndex, setBgIndex] = useState<number>(0);
  const [prevBgIndex, setPrevBgIndex] = useState<number>(0);
  const [circlePos, setCirclePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();

    let bgIdx: number = 0;
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const id = e.currentTarget.id;

    if (id === "n") {
      bgIdx = 1;
    } else if (id === "m") {
      bgIdx = 2;
    } else if (id === "i") {
      bgIdx = 3;
    } else if (id === "x1") {
      bgIdx = 4;
    } else if (id === "x2") {
      bgIdx = 5;
    }

    setCirclePos({ x, y });
    setPrevBgIndex(bgIndex);
    setBgIndex(bgIdx);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <div className="flex gap-16">
        {LOGO_LETTERS.map((v) => {
          return (
            <Image
              key={`logo_letters_${v.id}`}
              src={v.src}
              className="h-75 w-auto drop-shadow-[0_0_5px_white] cursor-pointer select-none hover:drop-shadow-[0_0_20px_white] transition duration-300"
              alt="logo_letters"
              title={v.title}
              id={v.id}
              onClick={(e) => handleClick(e)}
            />
          );
        })}
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
        key={`${bgIndex}-${circlePos.x}-${circlePos.y}`}
        className={BG_COLORS[bgIndex]}
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
