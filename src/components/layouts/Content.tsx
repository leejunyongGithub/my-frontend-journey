import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Transition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

function Content({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  return (
    <TransitionGroup
      // `component` prop에 `null`을 넘겨주지 않으면 `<div>`로 한단계 감싸집니다.
      component={null}
    >
      <Transition
        // 현재 pathname을 key prop으로 넘겨주어
        // 페이지가 전환될 때 이전 페이지가 TransitionGroup에서 빠지고
        // 새 페이지가 들어온 것으로 간주되도록 합니다.
        key={pathName}
        // timeout prop으로 넘겨준 시간(ms 단위)에 따라 `status`가 변화합니다.
        timeout={{ enter: 300, exit: 300 }}
      >
        {(status) => (
          // 전환 상태(`status` 인자)는
          // `unmounted`, `exited`, `entering`, `entered`, `exiting`
          // 이렇게 들어오는데, Transition 엘리먼트가 아예 자식 목록에서 빠져버리면
          // `unmounted` 상태가 들어올 일이 없습니다.
          // 따라서 뒤쪽의 네가지 상태만 들어온다고 생각하면 됩니다.
          <StyledContent id="main-content" className={`content-wrap page ${status}`}>
            {children}
          </StyledContent>
        )}
      </Transition>
    </TransitionGroup>
  );
}

export default Content;

const StyledContent = styled.div`
  width: 100%;
  position: relative;
  background: #fff;

  margin-top: 50px;

  min-height: calc(100vh - 60px - 100px);

  padding-top: 100px;
  padding-bottom: 50px;
  padding-left: 15rem;
  padding-right: 15rem;

  display: inline-flex;
  justify-content: flex-start;
  flex-direction: column;

  @media all and (min-width: 1024px) and (max-width: 1200px) {
    width: 100%;
    padding-left: 64px;
    padding-right: 64px;
    box-sizing: border-box;
  }

  @media all and (min-width: 280px) and (max-width: 1024px) {
    width: 100%;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 12px;
    box-sizing: border-box;
  }
`;
