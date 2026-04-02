import type { ProjectDetail } from "../../model/types";

export const PROJECTS: ProjectDetail[] = [
  {
    name: "범일운수 ERP",

    description: "서울소프트 ERP 개발 프로젝트",
    detail: "서울 시내버스 회사 범일운수의 ERP 시스템 구축 프로젝트입니다.",
    techStack: ["Django", "JQuery", "AWS", "Firebase"],
    works: [
      "배차생성, 급여산정, 자재입·출고, 연차수당계산 등 핵심 비즈니스 로직 개발",
    ],
    issues: [
      {
        title: "대용량 테이블 렌더링 성능 개선",
        issue:
          "Django 서버 사이드 렌더링 방식에서 10,000건 이상의 데이터를 테이블로 출력하면서, 템플릿 렌더링 과정에서 병목이 발생해 로딩 시간이 약 30초 이상 소요되는 문제가 있었습니다.",
        solve:
          "서버의 렌더링 부담을 줄이기 위해, 서버는 페이지 레이아웃만 렌더링하고 테이블 데이터는 JSON 형태로 응답하도록 변경했습니다. 이후 클라이언트에서 Tabulator를 활용해 테이블을 렌더링하도록 구조를 개선했습니다.",
        result:
          "렌더링 부담을 클라이언트로 분산시켜 로딩 시간을 약 30초에서 2초 내외로 단축하고, 사용자 체감 성능을 크게 개선했습니다.",
      },
      {
        title: "바코드 입력 UX 개선",
        issue:
          "바코드 리더기를 사용하는 환경에서, 특정 input에 포커스가 없으면 스캔 값이 입력되지 않아 작업 흐름이 자주 끊기는 문제가 있었습니다.",
        solve:
          "바코드 입력 전용 hidden input을 구성하고, 페이지 내 클릭 등 사용자 이벤트 발생 시 해당 input에 자동으로 포커싱되도록 처리했습니다. 또한 다른 입력 필드 사용 시에는 자동 포커싱을 비활성화하고, 입력 종료 후 다시 활성화되도록 예외 처리를 적용했습니다.",
        result:
          "입력 누락 및 포커스 문제로 인한 작업 지연을 줄이고, 바코드 기반 업무 처리 효율을 향상시켰습니다.",
      },
      {
        title: "앱 알림 대량 전송 오류 수정",
        issue:
          "앱 알림 전송 과정에서 이용하던 서비스의 전송 제한으로, 500명이 넘는 사용자에게 알림 전송 시 에러가 발생했습니다.",
        solve:
          "전송 제한(최대 500건)을 고려해, 토큰을 500개 단위로 분할(chunking)하여 순차 전송하도록 로직을 개선했습니다.",
        result:
          "500명 이상의 사용자에게 대량 알림 전송 시 발생하던 에러를 해결하고, 안정적인 전송이 가능하도록 개선했습니다.",
      },

      // {
      //   title: "사원 검색 로직 개선 (시점 기반 필터링)",
      //   issue:
      //     "사원 검색 autocomplete 기능이 현재 재직자만 기준으로 동작하여, 퇴직자의 데이터 조회가 필요한 경우에도 검색 결과에 나타나지 않는 문제가 있었습니다. 특히 autocomplete 특성상 직접 입력이 불가능해, 사용자가 해당 사원을 선택할 수 없는 상황이 발생했습니다.",
      //   solve:
      //     "검색 조건에 포함된 일자를 기준으로 재직 여부를 판단하도록 로직을 개선했습니다. 사원 검색 로직을 분리하고, 해당 시점에 재직 중인 사원만 반환하도록 필터링을 적용했습니다.",
      //   result:
      //     "퇴직자를 포함한 과거 시점 기준 검색이 가능해져, 급여 및 근무 이력 조회 업무를 정상적으로 수행할 수 있도록 개선했습니다.",
      // },
    ],
  },
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
          "TanStack Query의 prefetchQuery를 도입하고, 데이터 변경 시 캐시를 갱신하도록 개선했습니다.",
        result:
          "검색 페이지, 문서 상세 페이지, 홈페이지 등 전반에 최신(fresh) 데이터가 일관되게 반영되었습니다.",
      },
      {
        title: "한글 자모 분리를 통한 검색 편의성 개선",
        issue:
          "기존에는 검색어의 모든 글자가 정확히 일치해야만 검색 결과가 노출되는 문제가 있었습니다. (예: `토스` 검색 시, `토`는 검색되지만, `톳`은 검색되지 않음)",
        solve:
          "한글 자모를 분리하여 DB에 저장하고, 검색 시에도 동일하게 자모 단위로 분리해 비교하도록 수정했습니다.",
        result:
          "부분 입력만으로도 자연스럽게 검색이 가능해져 검색 편의성이 향상되었습니다.",
      },
      {
        title: "쿠키를 이용한 조회수 중복 기록 방지",
        issue:
          "'오늘의 인기문서', '문서 총 조회수'를 기록하려면 동일한 사용자의 반복 조회를 제거해야 했습니다. localStorage를 이용해 작업을 수행했으나, 클라이언트에서만 접근 가능해 사용자가 쉽게 조작할 수 있다는 신뢰성 문제가 있었습니다.",
        solve:
          "httpOnly 쿠키를 이용해 중복을 체크하도록 수정하고 만료 시간을 12시간으로 설정하였습니다.",
        result:
          "JavaScript를 통한 조작을 방지하고, 서버에서 중복 여부를 검증하여 보다 신뢰성 있게 조회수를 측정할 수 있게 되었습니다.",
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
    name: "퍼즐데이즈",

    description: "사진으로 만드는 나만의 직소 퍼즐",
    detail:
      "퍼즐데이즈(Puzzle Days)는 사진을 업로드해 나만의 직소 퍼즐을 만들고, 다른 사람과 공유해 플레이할 수 있는 게임입니다.",
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
          "네이티브 환경에서만 로드되도록 특정 모듈을 동적으로 import 하도록 수정했습니다.",
        result:
          "웹 번들 사이즈를 줄이고 웹/네이티브 환경 호환성을 확보했습니다.",
      },
      {
        title: "이미지 전처리를 통한 렌더링 성능 최적화",
        issue:
          "사용자가 업로드하는 이미지의 크기와 용량이 제각각이어서 일관된 렌더링과 성능 유지에 어려움이 있었습니다.",
        solve:
          "업로드 전 Canvas에서 1000x1000으로 크롭하고 JPEG 0.9로 압축해 크기와 용량을 표준화했습니다.",
        result:
          "업로드 할 이미지 용량을 줄이고 안정적인 렌더링 성능을 확보했습니다.",
      },
    ],
  },
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
