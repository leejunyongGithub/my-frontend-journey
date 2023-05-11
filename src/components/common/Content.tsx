import { ReactNode } from "react";
import styled from "styled-components";

function Content({ children }: { children: ReactNode }) {
  return (
    <StyledContent id="main-content" className={`content-wrap`}>
      {children}
    </StyledContent>
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
