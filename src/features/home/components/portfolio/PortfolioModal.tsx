"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import type { ProjectDetail } from "../../model/types";

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
            <div className="flex items-center gap-2">
              <Dialog.Title className="text-2xl font-bold">
                {project.name}
              </Dialog.Title>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors mt-1"
                  aria-label={`${project.name} 사이트로 이동`}
                >
                  <span className="sr-only">{project.name} 사이트로 이동</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors mt-1"
                  aria-label={`${project.name} GitHub 저장소`}
                >
                  <span className="sr-only">{project.name} GitHub 저장소</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>
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

          {/* 작업 내용 */}
          {project.works && project.works.length > 0 && (
            <div className="flex flex-col gap-3">
              <span className="text-xs text-white/40 tracking-widest uppercase">
                Works
              </span>
              <ul className="flex flex-col gap-2 pl-5 list-disc list-outside">
                {project.works.map((work) => (
                  <li key={work} className="text-sm text-white/70">
                    <span>{work}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 이슈 및 해결 내용 */}
          {project.issues && project.issues.length > 0 && (
            <div className="flex flex-col gap-3">
              <span className="text-xs text-white/40 tracking-widest uppercase">
                ISSUES
              </span>
              {project.issues.map((issue, index) => (
                <div
                  key={`${issue.title}_${index}`}
                  className="flex flex-col gap-2"
                >
                  <div className="flex gap-2 items-center">
                    <span className="px-3 py-1 text-xs rounded-full text-green-300 bg-[rgba(0,255,17,0.08)] border border-[rgba(0,255,17,0.12)]">
                      ISSUE
                    </span>
                    <h2 className="text-sm text-white/70">{issue.title}</h2>
                  </div>
                  <span className="text-sm text-white/70">{issue.content}</span>
                </div>
              ))}
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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
