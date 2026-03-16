"use client";

import { PortfolioModal, type ProjectDetail } from "./PortfolioModal";

const PROJECTS: ProjectDetail[] = [
  {
    name: "노바위키",

    description: "직접 설계하고 개발한 위키 사이트",
    detail:
      "직접 설계하고 개발한 위키 사이트입니다. 직접 개발한 마크다운 에디터를 적용하였습니다.",
    role: "기획 · 디자인 · 개발 (개인 프로젝트)",
    techStack: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "Tanstack Query",
      "Supabase",
      "Tailwind",
    ],
  },
  {
    name: "노바위키2",

    description: "직접 설계하고 개발한 위키 사이트",
    detail:
      "직접 설계하고 개발한 위키 사이트입니다. 직접 개발한 마크다운 에디터를 적용하였습니다.",
    role: "기획 · 디자인 · 개발 (개인 프로젝트)",
    techStack: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "Tanstack Query",
      "Supabase",
      "Tailwind",
    ],
  },
];

export function PortfolioProjects() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs text-white/40 tracking-widest uppercase">
        Projects
      </h2>
      <div className="flex gap-2">
        {PROJECTS.map((project) => (
          <PortfolioModal key={project.name} project={project}>
            <button
              type="button"
              suppressHydrationWarning
              className="w-1/2 text-left p-4 rounded-lg bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] flex items-center justify-between gap-4 cursor-pointer hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] transition-colors group"
            >
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-white">{project.name}</span>
                <span className="text-sm text-white/60">
                  {project.description}
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/30 shrink-0 group-hover:text-white/60 transition-colors"
                aria-hidden="true"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </PortfolioModal>
        ))}
      </div>
    </div>
  );
}
