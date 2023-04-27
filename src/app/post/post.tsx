"use client";
import { useState } from "react";
import SearchInput from "@/components/common/Input/SearchInput";
import styled, { css } from "styled-components";
import { filterDate } from "@/utils";
import moment from "moment";
import { useRouter } from "next/navigation";

function Post(props: any) {
  const router = useRouter();
  const { posts } = props;
  const [search, change] = useState("");

  const handleChangeValue = (e: any) => {
    const { value } = e.target;
    change(value);
  };

  const clearValue = () => {
    change("");
  };

  const filterDateList = filterDate(posts) || {};

  return (
    <PostWrap>
      <SearchInput
        placeholder="검색할 텍스트를 입력해주세요"
        style={{ height: "40px", width: "100%" }}
        value={search}
        onChange={handleChangeValue}
        clear={clearValue}
      />
      <PostFilter>
        <FilterBedge>
          <span>전체</span>
        </FilterBedge>
      </PostFilter>
      {Object?.keys(filterDateList).map((item: any) => {
        return (
          <PostList key={item}>
            <PostTitle>{item}</PostTitle>
            <Line>
              <div className="line"></div>
            </Line>
            {filterDateList[item].map((el: any) => {
              const { frontMatter, slug } = el;
              const { date, title } = frontMatter;
              const parseDate = moment(date).format("MM월DD일");
              return (
                <PostItem key={slug} onClick={() => router.push(`/post/${slug}`)}>
                  <span className="title">{title}</span>
                  <span className="date">{parseDate}</span>
                </PostItem>
              );
            })}
          </PostList>
        );
      }) || []}
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
  padding-left: 20rem;
  padding-right: 20rem;
  position: absolute;
  display: inline-flex;
  flex-direction: column;
  gap: 16px;

  @media all and (min-width: 1024px) and (max-width: 1440px) {
    padding-left: 15rem;
    padding-right: 15rem;
  }

  @media all and (min-width: 280px) and (max-width: 1024px) {
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
  }
`;

const PostTitle = styled.div`
  font-size: 3rem;
  font-weight: 700;
  padding-left: 16px;
  padding-right: 16px;
`;

const PostFilter = styled.div`
  width: 100%;
  min-height: 50px;
  display: inline-flex;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const FilterBedge = styled.div`
  min-width: 50px;
  height: 30px;
  background: #666;
  display: inline-flex;
  padding: 4px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;

  ${({ theme }) => css`
    background: ${theme.colors.bedge};
    color: ${theme.colors.bedgeColor};
  `};
`;

const PostList = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
`;

const PostItem = styled.div`
  height: 50px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  ${({ theme }) => css`
    color: ${theme.colors.selectedText} !important;
  `};

  padding: 16px;

  border-radius: 0.5rem;

  &: hover {
    ${({ theme }) => css`
      background: ${theme.colors.listHoverBackground} !important;
      color: ${theme.colors.text} !important;
      transition: all 0.3s ease-in-out;
    `};
  }

  .title {
    font-weight: 700;
  }

  .date {
    font-weight: 400;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  .line {
    ${({ theme }) => css`
      background: ${theme.colors.listText} !important;
    `};
    height: 1px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
