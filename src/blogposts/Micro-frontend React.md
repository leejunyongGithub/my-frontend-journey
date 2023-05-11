---
title: 마이크로
tags:
  - 회고
category: 회고
date: 2018-01-05 18:02:10
draft: false
info: false
author: Jun's
---

\*\* 비동기 처리
callback, promise, observeable

성공, 실패의 경우를 분리해 처리할 수 있다.
비즈니스 로직을 한눈에 파악할 수 있다.

로직을 분리하지 않으면 함수의 역활을 명시적으로 드러낼 수 없다.

swr, react-query

```javascript
function Profile() {
  const foo = useAsyncValue(() => {
    return fetchFoo();
  });

  const bar = useAsyncValue(() => {
    if (foo.error || !foo.data) {
      return undefined;
    }

    return fetchBar(foo.data);
  });

  if (foo.error || bar.error) return <div>로딩에 실패하였습니다.</div>;
  if (!foo.data || !bar.data) return <div>로딩 중 입니다.</div>;

  return; /* 다시 작성해보기 */
}
```

\*\*\* React가 일반적인 비동기 함수일 경우
성공하는 경우에만 집중해 복잡도를 낮춘다.
일반적으로 작성하는 동기 로직과 큰 차이가 없다.

\*\*\* React에서는 비동기 처리가 어렵다.
성공하는 경우에만 집중해 컴포넌트를 구성하기 어렵다.
2개 이상으 비동기 로직이 개입할 때, 비즈니스 로직이 어려워진다.

이걸 해결해주는것이 React에서 제공해주는 React Suspense

컴포넌트에서는 성공한 경우에만 집중하고 에러 또는 로딩은 외부에 위임한다.

```javascript
<ErrorBoundary fallback={<ErrorPage />}>
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
</ErrorBoundary>
```

Suspense를 사용할 떄 Recoil은 Async Selector / SWR, React-query에서는 옵션에 { suspense: true } 를 사용해주면 자동으로 Suspense 상태가 관리된다.

코드 조각을 감싸는 맥락으로 책임을 분리하는 방법을 대수적 효과(Algebraic Effects) 라고 한다.