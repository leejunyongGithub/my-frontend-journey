"use client";
import SearchInput from "@/components/common/Input/SearchInput";
import styled, { css } from "styled-components";

function Post(props: any) {
  return (
    <PostWrap>
      <SearchInput placeholder="검색할 텍스트를 입력해주세요" style={{ height: "50px", width: "100%" }} />
    </PostWrap>
  );
}

export default Post;

const PostWrap = styled.div`
  width: 100%;
  ${({ theme }) => css`
    background: ${theme.colors.content} !important;
    color: ${theme.colors.text} !important;
    transition: all 0.3s ease-in-out;
  `};

  padding: 5rem;
  padding-left: 25rem;
  padding-right: 25rem;
  position: absolute;
  display: inline-flex;
  justify-content: center;
  flex-direction: column;

  gap: 24px;

  @media all and (min-width: 280px) and (max-width: 1024px) {
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
  }
  @media all and (min-width: 280px) and (max-width: 1024px) {
    display: inline-flex;
    width: 100%;
  }
`;

const PostTitle = styled.div``;

const PostFilter = styled.div``;

const PostList = styled.div``;
