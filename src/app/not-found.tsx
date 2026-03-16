"use client";

import Link from "next/link";
import {
  PortfolioModal,
  type ProjectDetail,
} from "@/features/home/components/portfolio/PortfolioModal";

const HIDDEN_PROJECTS: ProjectDetail[] = [
  {
    name: "프로젝트 이름",
    description: "한 줄 설명",
    detail: "상세 설명을 여기에 작성합니다.",
    role: "기획 · 디자인 · 개발 (개인 프로젝트)",
    period: "2024.01 ~ 2024.03",
    techStack: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/leewonno/example",
  },
  {
    name: "프로젝트 이름 2",
    description: "한 줄 설명",
    detail: "상세 설명을 여기에 작성합니다.",
    role: "프론트엔드 개발",
    period: "2023.06 ~ 2023.09",
    techStack: ["Next.js", "TypeScript", "Zustand"],
  },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#04060f] text-white flex flex-col items-center justify-center px-6 py-20">
      {/* 404 헤더 */}
      <div className="flex flex-col items-center gap-2 mb-16">
        <span className="text-sm text-white/30 tracking-widest uppercase">
          404
        </span>
        <h1 className="text-3xl font-bold">페이지를 찾을 수 없습니다.</h1>
        <p className="text-white/40 text-sm mt-1">
          대신, 미처 포트폴리오에 올리지 못한 프로젝트들을 마련해 봤습니다.
        </p>
      </div>

      {/* 프로젝트 목록 */}
      {HIDDEN_PROJECTS.length > 0 && (
        <div className="w-full max-w-xl flex flex-col gap-4 mb-16">
          <span className="text-xs text-white/30 tracking-widest uppercase">
            Hidden Projects
          </span>
          <div className="flex flex-wrap gap-2">
            {HIDDEN_PROJECTS.map((project) => (
              <PortfolioModal key={project.name} project={project}>
                <button
                  type="button"
                  suppressHydrationWarning
                  className="w-[calc(50%-4px)] text-left p-4 rounded-lg bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] flex items-center justify-between gap-4 cursor-pointer hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] transition-colors group"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      {project.name}
                    </span>
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
      )}

      {/* 홈으로 */}
      <Link
        href="/"
        className="px-5 py-2.5 rounded-lg border border-[rgba(255,255,255,0.15)] text-sm text-white/60 hover:text-white hover:border-[rgba(255,255,255,0.35)] transition-colors"
      >
        ← 홈으로 돌아가기
      </Link>
    </main>
  );
}
