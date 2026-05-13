# HANDOFF.md

## Session Digest
빈 폴더에서 시작해 레드&블랙 테마의 소개 페이지 HTML을 제작하고 GitHub(Eunsunkeem/mypage)에 올린 뒤 Vercel(eunsunkim.vercel.app)에 배포했다. 이후 Next.js 16 + TypeScript + Tailwind CSS로 전면 마이그레이션하고, 컴포넌트 단위로 코드를 분리했다. `"use client"` 이슈를 해결해 빌드를 통과시킨 후 GitHub 푸시 및 Vercel 자동 재배포까지 완료했다.

---

## Progress
- [x] 프로젝트 디렉토리 초기화
- [x] 레드&블랙 테마 소개 페이지 HTML 생성
- [x] GitHub 저장소 생성 (Eunsunkeem/mypage) 및 초기 푸시
- [x] Vercel 배포 설정 및 프로덕션 배포 (eunsunkim.vercel.app)
- [x] Next.js 16 + TypeScript + Tailwind CSS 마이그레이션
- [x] 컴포넌트 분리: Header, Hero, StatsBar, About, Philosophy, Footer
- [x] `"use client"` 이슈 수정 후 빌드 통과
- [x] GitHub 푸시 + Vercel 자동 재배포

---

## Next Steps
1. 콘텐츠 보완 — 실제 프로필 사진, 이력/포트폴리오 항목 추가
2. SEO 최적화 — `metadata` 오브젝트(title, description, OG 태그) 설정
3. 반응형 점검 — 모바일/태블릿 뷰에서 레이아웃 깨짐 여부 확인
4. 연락처/SNS 링크 활성화 — Footer의 소셜 링크를 실제 URL로 교체
5. 다크모드 또는 테마 전환 기능 추가 고려
6. CI/CD 워크플로우 점검 — GitHub Actions 또는 Vercel Preview 브랜치 전략 수립

---

## Blockers
없음

---

## Watch Out
- `"use client"` 지시어: 브라우저 API(useState, useEffect 등)를 사용하는 컴포넌트에 반드시 선언해야 한다. 누락 시 빌드 오류 발생.
- Next.js 16(App Router) 구조이므로 Pages Router 방식(`pages/`) 혼용 금지.
- Tailwind CSS v4 계열은 설정 방식이 이전 버전과 다를 수 있으니 공식 문서를 확인할 것.
- Vercel 자동 배포는 `main` 브랜치 푸시 기준이므로, 실험적 작업은 별도 브랜치에서 진행 후 PR 병합 권장.

---

## Files Touched
- `/Users/dmate/Desktop/김은선/claud/mypage/src/app/page.tsx` — 메인 페이지 (컴포넌트 조합)
- `/Users/dmate/Desktop/김은선/claud/mypage/src/app/layout.tsx` — 루트 레이아웃 (폰트, 글로벌 스타일)
- `/Users/dmate/Desktop/김은선/claud/mypage/src/app/globals.css` — 전역 CSS (Tailwind 임포트 포함)
- `/Users/dmate/Desktop/김은선/claud/mypage/src/components/Header.tsx`
- `/Users/dmate/Desktop/김은선/claud/mypage/src/components/Hero.tsx`
- `/Users/dmate/Desktop/김은선/claud/mypage/src/components/StatsBar.tsx`
- `/Users/dmate/Desktop/김은선/claud/mypage/src/components/About.tsx`
- `/Users/dmate/Desktop/김은선/claud/mypage/src/components/Philosophy.tsx`
- `/Users/dmate/Desktop/김은선/claud/mypage/src/components/Footer.tsx`
- `/Users/dmate/Desktop/김은선/claud/mypage/next.config.ts` — Next.js 설정
- `/Users/dmate/Desktop/김은선/claud/mypage/package.json` — 의존성 및 스크립트
- `/Users/dmate/Desktop/김은선/claud/mypage/tsconfig.json` — TypeScript 설정
