# 포트폴리오

## 💾 프로젝트 개요

Next.js 기반의 포트폴리오 사이트입니다. 인터랙티브한 UI와 애니메이션을 통해 저를 소개합니다.

<br />

## ⚡️ 주요 기능

- 텍스트 클릭 시 테마가 전환되는 인터랙티브 인트로 화면
- 경력, 학력, 기술 스택, 프로젝트를 담은 포트폴리오 카드

<br />

## ⚙️ 사용 기술

- **Next.js 16** : App Router 기반 SSR 및 페이지 구성
- **React 19** : UI 컴포넌트 구성
- **TypeScript** : 타입 안정성 확보
- **Tailwind CSS v4** : 유틸리티 기반 스타일링
- **Radix UI (Dialog)** : 접근성을 고려한 모달 구현
- **Biome** : 린팅 및 포맷팅

<br />

## 🗂️ 프로젝트 구조

```
src/
 ├── app/             # Next.js App Router 진입점 및 페이지
 ├── assets/          # 폰트, 이미지, SVG 등 정적 리소스
 ├── context/         # 전역 Context (ScrollDirectionContext)
 ├── features/        # 기능 단위 컴포넌트
 │   ├── home/        # 홈 페이지 관련 컴포넌트
 │   │   └── components/
 │   │       └── portfolio/   # 포트폴리오 섹션 서브 컴포넌트
 │   └── nav/         # 공통 Footer
 └── hooks/           # 커스텀 훅 (useScrollDirection)
```

<br />

## 🌐 배포

Vercel을 통해 배포되었습니다.
