import { ReactNode } from "react";
import styled, { css } from "styled-components";

function Content({ children }: { children: ReactNode }) {
  return <StyledContent className="content-wrap">{children}</StyledContent>;
}

export default Content;

const StyledContent = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;

  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 15rem;
  padding-right: 15rem;

  display: inline-flex;
  justify-content: flex-start;
  flex-direction: column;

  ${({ theme }) => css`
    background: ${theme.colors.content};
    transition: all 0.3s ease-in-out;
  `};

  &.content-wrap::-webkit-scrollbar {
    width: 10px; /* 스크롤바의 너비 */
  }

  &.content-wrap::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    ${({ theme }) => css`
      background: ${theme.colors.scroll};
    `};
  }

  .markdown-body-content {
    ${({ theme }) => css`
      background: ${theme.colors.content};
      color: ${theme.colors.text};
      transition: all 0.3s ease-in-out;
    `};
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

  &.content-wrap::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1); /*스크롤바 뒷 배경 색상*/
  }
`;
