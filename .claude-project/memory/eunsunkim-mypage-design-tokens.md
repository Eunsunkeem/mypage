---
name: eunsunkim-mypage-design-tokens
description: 김은선 소개 페이지 레드&블랙 테마 CSS 변수 정의
type: reference
created: 2026-05-13
---

`src/app/globals.css`에 정의된 테마 토큰:

```css
--red: #e63030;
--red-dark: #b01c1c;
--red-glow: rgba(230, 48, 48, 0.3);
--black: #0a0a0a;
--black-2: #111111;
--black-3: #1a1a1a;
```

배경에 60px 그리드 패턴(레드 3% 투명도)이 `body::before` 고정 오버레이로 깔려 있음. 영문 레이블/수치에는 `'Space Grotesk'` 폰트 사용.

**Why:** 새 컴포넌트나 섹션 추가 시 디자인 시스템 변수를 참조하기 위함.

**How to apply:** 색상 지정 시 하드코딩 대신 `style={{ color: "var(--red)" }}` 형태로 CSS 변수 사용.
