import type { ProjectDetail } from "../../model/types";

export const PROJECTS: ProjectDetail[] = [
  {
    name: "노바위키",

    description: "함께 만들어가는 위키 사이트",
    detail:
      "노바위키는 기존 위키의 느리고 단절된 소통 구조를 개선하기 위해 시작된 플랫폼입니다. Supabase Realtime Broadcast 기반의 채팅 기능을 통해 이용자 간 실시간 소통이 가능하며, 자체 개발한 마크다운 에디터로 보다 편안하고 직관적인 편집 환경을 제공합니다.",
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
      "Supabase Realtime Broadcast 기반 실시간 채팅 기능 구현",
      "마크다운 에디터 구현",
      "마크다운 파싱 라이브러리 remark와 호환되는 마크다운 파서 구현",
    ],
    issues: [
      {
        title: "Stale 데이터 노출 문제 해결을 위한 캐시 전략 개선",
        issue:
          "Next.js의 fetch 캐싱을 이용했으나, 데이터 수정 이후에도 이전(Stale) 데이터가 노출되는 문제가 있었습니다.",
        solve:
          "TanStack Query의 prefetchQuery를 도입하고, 데이터 변경 시 캐시를 갱신하도록 개선했습니다. 그 결과 검색창, 문서 상세, 홈페이지 전반에 최신(fresh) 데이터가 일관되게 반영되었습니다.",
      },
      {
        title: "한글 자모 분리를 통한 검색 정확도 개선",
        issue:
          "기존에는 검색어의 모든 글자가 정확히 일치해야만 검색 결과가 노출되는 문제가 있었습니다. (예: `토스` 검색 시, `토`는 검색되지만, `톳`은 검색되지 않음)",
        solve:
          "한글 자모를 분리하여 DB에 저장하고, 검색 시에도 동일하게 자모 단위로 분리해 비교하도록 수정했습니다. 그 결과 부분 입력만으로도 자연스럽게 검색이 가능해져 검색 편의성이 향상되었습니다.",
      },
      {
        title: "쿠키를 이용한 조회수 중복 기록 방지",
        issue:
          "'오늘의 인기문서', '문서 총 조회수'를 기록하려면 동일한 사용자의 반복 조회를 제거해야 했습니다. localStorage를 이용해 작업을 수행했으나, 클라이언트에서만 접근 가능해 사용자가 쉽게 조작할 수 있다는 신뢰성 문제가 있었습니다.",
        solve:
          "httpOnly 쿠키를 이용해 12시간의 만료 시간을 설정하였습니다. 그 결과 JavaScript를 통한 조작을 방지하고, 서버에서 중복 여부를 검증하여 보다 신뢰성 있는 조회수를 측정할 수 있게 되었습니다.",
      },
      // {
      //   title: "Myers Diff 알고리즘을 활용한 변경 내역 추적 개선",
      //   issue:
      //     "비교 페이지에서 문서 변경 내역을 효율적으로 추적하는 방법이 필요했습니다.",
      //   solve:
      //     "Git의 diff 방식을 참고해 Myers diff 알고리즘 기반 npm 패키지를 적용, 사용자에게 변경 내역을 효율적으로 제공했습니다.",
      // },
    ],
  },
  {
    name: "퍼즐데이",

    description: "사진으로 만드는 나만의 직소 퍼즐",
    detail:
      "퍼즐데이(Puzzle Days)는 사진을 업로드해 나만의 직소 퍼즐을 만들고, 다른 사람과 공유해 플레이할 수 있는 게임입니다.",
    techStack: [
      "React",
      "Capacitor",
      "Zustand",
      "Tanstack Query",
      "Supabase",
      "Tailwind",
    ],
    link: "https://puzzle-days.vercel.app/",
    videos:
      "https://www.youtube.com/watch?v=IJUxFOTX_64&list=PLxbRBTyPvzi8fqvDQ81sgqsTfpcHBQFHZ&index=1",
    github: "https://github.com/Leewonno/Puzzle-Days",
    works: [
      "Canvas를 활용한 직소 퍼즐 생성",
      "Capacitor를 이용해 웹앱을 모바일 앱으로 변환",
    ],
    issues: [
      {
        title: "네이티브 모듈 분리를 통한 웹 번들 최적화",
        issue:
          "AdMob과 같은 네이티브 전용 모듈이 웹 번들에 포함되면서 불필요한 용량 증가와 오류가 발생했습니다.",
        solve:
          "네이티브 환경에서만 로드되도록 특정 모듈을 동적으로 import했고, 그 결과 웹 번들 사이즈를 줄이고 웹/네이티브 환경 호환성을 확보했습니다.",
      },
      {
        title: "이미지 전처리를 통한 렌더링 성능 최적화",
        issue:
          "사용자가 업로드하는 이미지의 크기와 용량이 제각각이어서 일관된 렌더링과 성능 유지에 어려움이 있었습니다.",
        solve:
          "업로드 전 Canvas에서 1000x1000으로 크롭하고 JPEG 0.9로 압축해 크기와 용량을 표준화했습니다. 그 결과 이미지 용량을 줄이고 안정적인 렌더링 성능을 확보했습니다.",
      },
    ],
  },
  //   {
  //     name: "노벨피디아",

  //     description: "소설 · 만화를 리뷰하는 위키 사이트",
  //     detail:
  //       "노벨피디아는 졸업작품이자 저의 첫 웹 프로젝트로 소설 · 만화 정보를 공유하고 리뷰할 수 있는 위키 사이트 입니다.",
  //     techStack: [
  //       "JavaScript",
  //       "JQuey",
  //       "Firebase",
  //       "Python",
  //       "Scikit-Learn",
  //       "AWS",
  //     ],
  //     works: [
  //       "위키 시스템 구현",
  //       "Scikit-Learn 기반 아이템 기반 협업 필터링을 통한 작품 추천 로직 개발",
  //       "AWS Lambda 서비스를 이용한 작품 추천 로직 실행 환경 구축",
  //       "JQuery를 이용한 프론트엔드 개발",
  //     ],
  //     link: "https://novelpedia.com/",
  //   },
];

export const ALADIN: ProjectDetail[] = [
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
