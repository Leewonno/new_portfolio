"use client";

import { PortfolioModal, type ProjectDetail } from "./PortfolioModal";

const PROJECTS: ProjectDetail[] = [
  {
    name: "노바위키",
    description: "직접 설계하고 개발한 위키 사이트",
    detail:
      "직접 설계하고 개발한 위키 사이트입니다. 사용자가 문서를 작성하고 편집할 수 있으며, 마크다운을 지원합니다.",
    role: "기획 · 디자인 · 개발 (개인 프로젝트)",
    techStack: ["Next.js", "TypeScript", "React"],
  },
];

export function PortfolioProjects() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xs text-white/40 tracking-widest uppercase">
        Projects
      </h2>
      <div className="flex flex-col gap-2">
        {PROJECTS.map((project) => (
          <PortfolioModal key={project.name} project={project}>
            <button
              type="button"
              className="w-full text-left p-4 rounded-lg bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] flex flex-col gap-1 cursor-pointer hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] transition-colors"
            >
              <span className="font-semibold text-white">{project.name}</span>
              <span className="text-sm text-white/60">
                {project.description}
              </span>
            </button>
          </PortfolioModal>
        ))}
      </div>
    </div>
  );
}
