"use client";

import { ALADIN, PROJECTS } from "./data";
import { PortfolioModal } from "./PortfolioModal";

export function PortfolioProjects({ q }: { q?: string }) {
  const displayList = q === "aladin" ? ALADIN : PROJECTS;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xs text-white/40 tracking-widest uppercase">
        Projects
      </h2>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
        {displayList.map((project) => (
          <PortfolioModal key={project.name} project={project}>
            <button
              type="button"
              suppressHydrationWarning
              className="sm:w-[calc(50%-4px)] text-left p-3 sm:p-4 rounded-lg bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] flex items-center justify-between gap-4 cursor-pointer hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] transition-colors group"
            >
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-white">{project.name}</span>
                <span className="text-xs sm:text-sm text-white/60">
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
