"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import SearchInput from "@/components/common/Input/SearchInput";
import styled, { css } from "styled-components";
import { filterDate } from "@/utils";
import moment from "moment";
import { useRouter } from "next/navigation";

function Post(props: any) {
  const { posts } = props;
  const router = useRouter();
  const category = Object.keys(posts) || [];

  return (
    <PostWrap>
      {category.map(
        (title) =>
          posts?.[title]?.length > 0 && (
            <React.Fragment key={title}>
              <PostTitle>{title}</PostTitle>
              <GridWrap>
                {posts?.[title].map((item: any) => (
                  <PostCard
                    key={item.slug}
                    onClick={() =>
                      router.push(`/posts/${item.frontMatter.category}/${item.slug}`)
                    }
                  >
                    <CardThumbnail />
                    <CardKeyword>
                      <PostFilter>
                        {item?.frontMatter?.tags?.length > 0 &&
                          item.frontMatter?.tags.map((tag: string) => (
                            <FilterBedge key={`${title}-${tag}`}>{tag}</FilterBedge>
                          ))}
                      </PostFilter>
                    </CardKeyword>
                    <CardTitle>{item?.frontMatter.title || ""}</CardTitle>
                    <CardDescription>
                      <span>설명란 입니다asdasdasdasdasdasdasdasdasd.</span>
                    </CardDescription>
                    <CardDate>{moment(item?.frontMatter.date || "").format("YYYY년 MM월 DD일")}</CardDate>
                    <CardWriter>
                      <span>{item?.frontMatter.author || ""}</span>
                    </CardWriter>
                  </PostCard>
                ))}
              </GridWrap>
            </React.Fragment>
          )
      )}
    </PostWrap>
  );
}

export default Post;

const PostWrap = styled.div`
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  gap: 16px;

  @media all and (min-width: 1024px) and (max-width: 1080px) {
    width: 100%;
    padding-left: 7rem;
    padding-right: 7rem;
    box-sizing: border-box;
  }

  @media all and (min-width: 280px) and (max-width: 1024px) {
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
  }
`;

const GridWrap = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  column-gap: 20px;
  row-gap: 20px;
  padding: 16px;
  box-sizing: border-box;
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
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
`;

const FilterBedge = styled.div<{
  selected?: boolean;
}>`
  min-width: 50px;
  height: 30px;
  background: #666;
  display: inline-flex;
  padding: 16px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;

  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  user-select: none;
  cursor: pointer;

  ${({ theme }) => css`
    background: ${theme.colors.bedge};
    color: #000;

    &.selected {
      color: #fff;
      background: ${theme.colors.selectedBedge};
    }
  `};
`;

const PostCard = styled.div`
  width: 100%;
  min-heihgt: 450px;
  display: inline-flex;
  flex-direction: column;
  border-radius: 0.2rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  overflow: hidden;
  transition: all 0.3s ease-out;
  &: hover {
    transform: translateY(-5px) scale(1.005) translateZ(0);
  }
`;

const CardTitle = styled.div`
  height: 50px;
  font-weight: 700;
  color: #666;
  padding: 16px;
  box-sizing: border-box;
`;

const CardThumbnail = styled.div`
  width: 100%;
  height: 200px;
  background: gray;
`;

const CardDescription = styled.div`
  height: 50px;
  text-overflow: ellipsis;
  padding: 16px;
  box-sizing: border-box;
  overflow: hidden;
`;

const CardDate = styled.div`
  height: 50px;
  padding: 16px;
  box-sizing: border-box;
  font-size: 12px;
  color: #5d5d5d;
`;

const CardKeyword = styled.div`
  min-height: 50px;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 5px;
  box-sizing: border-box;
`;

const CardWriter = styled.div`
  height: 50px;
  font-weight: 700;
  border-top: 1px solid #ededed;
  padding: 16px;
  box-sizing: border-box;
`;

const SkeletonCard = styled.div``;
