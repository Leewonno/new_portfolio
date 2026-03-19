"use client";

import type { ProjectDetail } from "../../model/types";
import { PortfolioModal } from "./PortfolioModal";

const PROJECTS: ProjectDetail[] = [
  {
    name: "노바위키",

    description: "함께 만들어가는 위키 사이트",
    detail:
      "함께 만들어가는 위키 사이트입니다. 직접 개발한 마크다운 에디터를 적용하였습니다.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "Tanstack Query",
      "Supabase",
      "Tailwind",
    ],
    link: "https://novawiki.vercel.app",
    github: "https://github.com/Leewonno/novawiki",
    works: [
      "위키 시스템 구현",
      "마크다운 에디터 구현",
      "마크다운 파싱 라이브러리 remark와 호환되는 마크다운 파서 구현",
    ],
  },
  {
    name: "노벨피디아",

    description: "소설 · 만화를 리뷰하는 위키 사이트",
    detail: "소설 · 만화 정보를 공유하고 리뷰할 수 있는 위키 사이트 입니다.",
    techStack: [
      "JavaScript",
      "JQuey",
      "Firebase",
      "Python",
      "Scikit-Learn",
      "AWS",
    ],
    works: [
      "위키 시스템 구현",
      "Scikit-Learn 기반 아이템 기반 협업 필터링을 통한 작품 추천 로직 개발",
      "AWS Lambda 서비스를 이용한 작품 추천 로직 실행 환경 구축",
      "JQuery를 이용한 프론트엔드 개발",
    ],
    link: "https://novelpedia.com/",
  },
];

const ALADIN: ProjectDetail[] = [
  ...PROJECTS,
  {
    name: "노벨컷",
    description: "웹소설 연재 사이트",
    detail:
      "NOVELCUT(노벨컷) 은 사용자가 직접 웹소설을 작성하고 공유할 수 있는 연재 플랫폼입니다. 네이버웹툰의 컷툰 서비스처럼 컷 형식 보기 방식을 도입했습니다.",
    techStack: [
      "React",
      "JavaScript",
      "Styled Components",
      "Node.js",
      "Firebase",
      "MySQL",
    ],
    link: "https://novelcut-1f6f2.web.app/",
    github: "https://github.com/Leewonno/novelcut",
    works: [
      "소설은 문단 단위로 분리해 네이버 컷툰 형식의 웹소설 뷰어 개발",
      "Atomic Design 패턴 기반 컴포넌트 구조 설계로 재사용성과 확장성 확보",
      "배포 비용 절감을 위한 AWS → Firebase로 프로젝트 리팩토링",
    ],
  },
];

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
