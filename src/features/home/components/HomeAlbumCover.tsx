import Image from "next/image";
import { useEffect, useState } from "react";
import type { HomeBackgroundProps } from "../model/types";

const FLOAT_ANIMATIONS = [
  "particle-float-a",
  "particle-float-b",
  "particle-float-c",
];

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  opacity: number;
  animationName: string;
  animationDuration: number;
  animationDelay: number;
}

export function HomeBackgroundTheme({
  style,
  className,
  icon,
}: HomeBackgroundProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        x: Math.random() * 90 + 5,
        y: Math.random() * 90 + 5,
        size: Math.random() * 70 + 40,
        rotation: Math.random() * 360,
        opacity: 0.1,
        animationName: FLOAT_ANIMATIONS[i % FLOAT_ANIMATIONS.length],
        animationDuration: Math.random() * 4 + 5,
        animationDelay: Math.random() * -6,
      })),
    );
  }, []);

  return (
    <div
      className={`${className} w-full h-full fixed inset-0 z-[-1] overflow-hidden animate-[circle-reveal_2s_ease-out_forwards] will-change-[clip-path]`}
      style={{ ...style, transform: "translateZ(0)" }}
    >
      {icon &&
        particles.map((p) => (
          <Image
            key={p.id}
            src={icon}
            alt=""
            width={p.size}
            height={p.size}
            style={
              {
                position: "absolute",
                left: `${p.x}%`,
                top: `${p.y}%`,
                transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`,
                opacity: p.opacity,
                filter: "blur(1px)",
                animation: `${p.animationName} ${p.animationDuration}s ease-in-out ${p.animationDelay}s infinite`,
                "--r": `${p.rotation}deg`,
              } as React.CSSProperties
            }
          />
        ))}
    </div>
  );
}
