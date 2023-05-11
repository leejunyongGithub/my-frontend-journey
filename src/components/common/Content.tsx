import { ReactNode, useEffect } from "react";
import styled, { css } from "styled-components";
import { usePathname } from "next/navigation";
import { Transition, TransitionGroup } from "react-transition-group";

function Content({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <TransitionGroup component={null}>
      <Transition key={pathname} timeout={{ enter: 500, exit: 500 }}>
        {(status) => (
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

  padding-top: 100px;
  padding-bottom: 50px;
  padding-left: 15rem;
  padding-right: 15rem;

  display: inline-flex;
  justify-content: flex-start;
  flex-direction: column;

  @media all and (max-width: 1024px) {
    position: absolute;
    top: 50px;
  }

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
