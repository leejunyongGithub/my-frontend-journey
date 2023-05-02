"use client";
import moment from "moment";
import styled, { css } from "styled-components";
import Flex from "./Flex";
import { NextSeo } from "next-seo";

interface Props {
  data: any;
}

function PostHeader({ data }: Props) {
  const { title, tags, date, author } = data;
  const parseDate = moment(date).format("YYYY년 MM월 DD일");

  return (
    <>
      <NextSeo title="Home Page Title" description="Home page description of the page" />
      <PostHeaderWrap>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderItem>
          <Flex>
            {tags.map((item: any, index: number) => (
              <Tag key={index}>{`#${item}`}</Tag>
            ))}
          </Flex>
        </HeaderItem>
        <HeaderItem>Written by {author}</HeaderItem>
        <HeaderItem>{parseDate}</HeaderItem>
      </PostHeaderWrap>
    </>
  );
}

export default PostHeader;

const PostHeaderWrap = styled.div`
  width: 100%;
  min-height: 200px;
  display: inline-flex;
  flex-direction: column;
  gap: 16px;
`;

const HeaderTitle = styled.div`
  width: 100%;
  height: 100%;
  font-size: 3rem;
  font-weight: 700;
`;

const HeaderItem = styled.div`
  width: 100%;
  height: 100%;
`;

const Tag = styled.div`
  min-width: 50px;
  padding: 4px;
  box-sizing: border-box;
  background: blue;
  border-radius: 1rem;
  text-align: center;
  font-weight: 400;
  ${({ theme }) => css`
    background: ${theme.colors.bedge};
    color: ${theme.colors.bedgeColor} !important;
  `};
`;
