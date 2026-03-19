"use client";

import Link from "next/link";
import { PortfolioModal } from "@/features";
import type { ProjectDetail } from "@/features";

const HIDDEN_PROJECTS: ProjectDetail[] = [
  {
    name: "MyLog",
    description: "DB 없이 운영하는 나만의 블로그",
    detail:
      "MyLog는 Next.js를 이용해 개발된 개인 블로그입니다. 별도의 데이터베이스 서버 없이 JSON 파일로 데이터를 관리하며, Markdown 문법을 이용해 간편하게 글을 작성할 수 있습니다.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux",
      "Styled Components",
      "vercel",
    ],
    link: "https://mylog-leewonno.vercel.app/",
    github: "https://github.com/Leewonno/mylog",
    works: [
      "JSON 파일을 통해 게시글 CRUD",
      "반응형 디자인으로 최적화된 화면 제공",
      "다크/라이트 모드 선택 기능 제공",
    ],
  },
  {
    name: "LYRICS",
    description: "가사 자막 입력 도우미",
    detail:
      "입력한 가사를 Adobe Premiere Pro에서 이용할 수 있는 SRT 자막 형식으로 변환할 수 있는 기능을 제공하는 엔믹스 팬페이지입니다. 자막변환 페이지에서 가사를 입력하면 자막 파일을 생성·복사·다운로드할 수 있습니다.",
    techStack: [
      "React",
      "TypeScript",
      "Redux",
      "Styled Components",
      "Firebase",
    ],
    link: "https://nmixxfantube-96477.web.app/",
    github: "https://github.com/Leewonno/lyrics",
    works: [
      "가사 변환 및 SRT 파일 다운로드 기능 제공",
      "Google Analytics 4를 이용한 방문자수 집계",
    ],
  },
  {
    name: "NOVELCUT",
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
  {
    name: "Demure",
    description: "가구 쇼핑몰",
    detail:
      "Demure는 이케아(IKEA) 데이터를 활용한 가구 쇼핑몰 입니다. React와 NestJS를 활용해 사이트를 구현했습니다.",
    techStack: [
      "React",
      "TypeScript",
      "NestJS",
      "AWS EC2",
      "AWS RDS",
      "AWS S3",
      "PostgreSQL",
    ],
    github: "https://github.com/KDT9Demure",
    works: [
      "NodeMailer를 이용한 이메일 인증 기능 구현",
      "카카오 소셜 로그인",
      "장바구니, 쿠폰 적용, 포인트 적립 등 이커머스 플로우 구현",
    ],
  },
  {
    name: "MangoZ",
    description: "음악 스트리밍 사이트",
    detail:
      "MangoZ(망고즈) 는 음악 스트리밍, 실시간 채팅 기능을 제공하는 음악 플랫폼입니다. 사용자는 음악을 재생하고, 플레이리스트를 만들고, 다른 사용자와 관심있는 아티스트에 대해 실시간 채팅을 통해 소통할 수 있습니다.",
    techStack: [
      "React",
      "TypeScript",
      "NestJS",
      "AWS EC2",
      "AWS RDS",
      "AWS S3",
      "PostgreSQL",
    ],
    github: "https://github.com/Leewonno/mangoz",
    works: [
      "음악 스트리밍 기능 구현",
      "Drog & Drop 으로 곡 순서 변경 기능 구현",
      "Socket.io를 이용한 실시간 채팅 기능 구현",
    ],
  },
  {
    name: "NMIXX FANS",
    description: "음악 스트리밍 사이트",
    detail:
      "JYP 엔터테인먼트의 자회사 Blue Garage에서 개발·운영하는 FANS 서비스를 기반으로 제작한 NMIXX FANS 서비스입니다. React Native로 앱을 개발했으며, 백엔드 서버는 Django와 GraphQL을 이용하여 구축했습니다.",
    techStack: [
      "React Native",
      "TypeScript",
      "Django",
      "GraphQL",
      "AWS S3",
      "MySQL",
    ],
    github: "https://github.com/Leewonno/NMIXX-FANS-APP",
    works: [
      "Django 와 GraphQL을 이용한 API 서버 개발",
      "React Native를 이용한 모바일(크로스 플랫폼) 앱 개발",
    ],
  },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#04060f] text-white flex flex-col items-center justify-center px-5 sm:px-6 py-20">
      {/* 404 헤더 */}
      <div className="flex flex-col items-center gap-2 mb-16">
        <span className="text-sm text-white/30 tracking-widest uppercase">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold">
          페이지를 찾을 수 없습니다.
        </h1>
        <p className="text-white/40 text-xs sm:text-sm mt-1">
          포트폴리오에 올리지 못한 프로젝트들을 준비해 봤습니다.
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
                  className="w-full sm:w-[calc(50%-4px)] text-left p-4 rounded-lg bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] flex items-center justify-between gap-4 cursor-pointer hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] transition-colors group"
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
