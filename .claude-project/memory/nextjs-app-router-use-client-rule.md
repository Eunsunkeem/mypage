---
name: nextjs-app-router-use-client-rule
description: Next.js App Router에서 이벤트 핸들러가 있는 컴포넌트에 "use client" 지시어 필수
type: feedback
created: 2026-05-13
---

Next.js 16 App Router 환경에서 `onMouseEnter`, `onMouseLeave`, `onClick` 등 이벤트 핸들러를 포함하는 컴포넌트는 파일 최상단에 `"use client";` 선언이 없으면 빌드 오류가 발생한다. 이 프로젝트에서 `Hero.tsx`와 `Philosophy.tsx`가 누락으로 빌드 실패 → `"use client"` 추가로 해결했다.

**Why:** 같은 실수를 반복하지 않고, 컴포넌트 작성 시 이벤트 핸들러 존재 여부를 보는 즉시 필요성을 판단하기 위함.

**How to apply:** 새 컴포넌트 작성 또는 이벤트 핸들러 추가 시 파일 상단 `"use client";` 여부를 먼저 확인. Server Component로 유지해야 하면 이벤트 로직을 별도 Client Component로 분리.
