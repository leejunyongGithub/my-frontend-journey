"use client";
import styled, { css } from "styled-components";
import { SlQuestion } from "react-icons/sl";
import Link from "next/link";

export default function PostNotFound() {
  return (
    <NotFoundWrap>
      <SlQuestion className='img' size={"15rem"} />
      <span>페이지를 찾을 수 없습니다:{")"}</span>
      <Link className="underline" href="/">홈으로 이동하기</Link>
    </NotFoundWrap>
  );
}

const NotFoundWrap = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  gap: 100px;
  align-items: center;
  background: yellow;
  ${({ theme }) => css`
    background: ${theme.colors.postBackground};
    color: ${theme.colors.text} !important;
  `};
  font-size: 3.25rem;
  user-select: none;

  .img{
    color: #e47f85;
  }


  .underline {
    color: #4fbffd;
    text-decoration: underline;
  }
`;
