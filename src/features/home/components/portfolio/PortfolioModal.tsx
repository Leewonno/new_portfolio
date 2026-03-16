"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

export interface ProjectDetail {
  name: string;
  description: string;
  detail?: string;
  techStack?: string[];
  role?: string;
  period?: string;
  link?: string;
}

interface PortfolioModalProps {
  project: ProjectDetail;
  children: React.ReactNode;
}

export function PortfolioModal({ project, children }: PortfolioModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/90 data-[state=open]:animate-[fade-in_0.2s_ease-out] data-[state=closed]:animate-[fade-out_0.15s_ease-in]" />
        <Dialog.Content className="fixed z-50 top-1/2 left-1/2 w-120 max-w-[90vw] max-h-[80vh] overflow-y-auto p-8 rounded-2xl text-white bg-[linear-gradient(to_bottom,#080810_0%,#04100d_100%)] border border-[rgba(255,255,255,0.12)] shadow-[0px_24px_64px_rgba(0,0,0,0.5)] data-[state=open]:animate-[modal-in_0.25s_ease-out_forwards] data-[state=closed]:animate-[modal-out_0.2s_ease-in_forwards] flex flex-col gap-6 outline-none will-change-[translate,opacity,scale]">
          {/* 헤더 */}
          <div className="flex items-start justify-between gap-4">
            <Dialog.Title className="text-2xl font-bold">
              {project.name}
            </Dialog.Title>
            <Dialog.Close className="text-white/40 hover:text-white transition-colors mt-1 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
              <span className="sr-only">닫기</span>
            </Dialog.Close>
          </div>

          {/* 설명 */}
          <Dialog.Description className="text-white/60 text-sm leading-relaxed">
            {project.detail ?? project.description}
          </Dialog.Description>

          {/* 메타 정보 */}
          {(project.role || project.period) && (
            <div className="flex flex-col gap-2">
              {project.role && (
                <div className="flex gap-3 text-sm">
                  <span className="text-white/40 w-14 shrink-0">역할</span>
                  <span className="text-white/80">{project.role}</span>
                </div>
              )}
              {project.period && (
                <div className="flex gap-3 text-sm">
                  <span className="text-white/40 w-14 shrink-0">기간</span>
                  <span className="text-white/80">{project.period}</span>
                </div>
              )}
            </div>
          )}

          {/* 기술 스택 */}
          {project.techStack && project.techStack.length > 0 && (
            <div className="flex flex-col gap-3">
              <span className="text-xs text-white/40 tracking-widest uppercase">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.12)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 링크 */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-white transition-colors underline underline-offset-4 w-fit"
            >
              {project.link}
            </a>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
