"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import moment from "moment";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { cloneDeep } from "lodash";

function Post(props: any) {
  const { posts } = props;
  const router = useRouter();
  const category = Object.keys(posts).filter((item: any) => posts[item].length > 0) || [];

  const [filterList, change] = useState<string[]>(category);

  const handleChangeBedge = useCallback(
    (item: string, index: number) => {
      let copyList = cloneDeep(filterList);
      if (filterList.includes(item)) {
        copyList[index] = "";
      } else {
        copyList[index] = item;
      }

      change(copyList);
    },
    [filterList]
  );

  if (!posts) {
    return <></>;
  }

  return (
    <PostWrap>
      <PostDescription>
        <h1>Blog</h1>
        <p>프론트엔드 개발을 하면서 생각을 정리하고 기록하는 공간입니다 🧐</p>
      </PostDescription>
      <FilterCategory>
        <CategoryList>
          {category.map((bedge: string, index: number) => (
            <Bedge
              key={bedge}
              onClick={() => handleChangeBedge(bedge, index)}
              selected={filterList.includes(bedge) ? true : false}
            >
              {bedge}
            </Bedge>
          ))}
        </CategoryList>
      </FilterCategory>
      {filterList.map(
        (title) =>
          posts?.[title]?.length > 0 && (
            <React.Fragment key={title}>
              <PostTitle>
                {title}
                <span style={{ fontSize: "1.5rem" }}>{`(${posts?.[title]?.length || 0})`}</span>
              </PostTitle>
              <GridWrap>
                {posts?.[title].map((item: any) => (
                  <PostCard
                    key={item.slug}
                    onClick={() => router.push(`/posts/${item.frontMatter.category}/${item.slug}`)}
                  >
                    <CardThumbnail>
                      <Image
                        src={item?.frontMatter?.thumbnail ? `/${item?.frontMatter?.thumbnail}` : "/none.png"}
                        alt={item?.slug}
                        width={300}
                        height={300}
                      />
                    </CardThumbnail>
                    <CardKeyword>
                      <PostFilter>
                        {item?.frontMatter?.tags?.length > 0 &&
                          item.frontMatter?.tags.map((tag: string) => (
                            <FilterBedge key={`${title}-${tag}`}>{tag}</FilterBedge>
                          ))}
                      </PostFilter>
                    </CardKeyword>
                    <CardTitle>{item?.frontMatter?.title || ""}</CardTitle>
                    <CardDescription>
                      <span>{item?.frontMatter?.description || "설명이 없습니다."}</span>
                    </CardDescription>
                    <CardDate>{moment(item?.frontMatter.date || "").format("YYYY년 MM월 DD일")}</CardDate>
                    <CardWriter>
                      <CircleBedge />
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

const PostDescription = styled.div`
  width: 100%;

  h1 {
    font-weight: 700;
    font-size: 3rem;
  }
`;

const FilterCategory = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 16px;
`;

const CategoryList = styled.div`
  display: inline-flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const CircleBedge = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("/logo.webp");
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid #ededed;
  border-radius: 50%;
`;

const Bedge = styled.div<{
  selected: boolean;
}>`
  height: 30px;
  border-radius: 1rem;
  background: ${(props) => (props.selected ? "#007bff" : "#6c757d")};
  color: #fff;
  display: inline-flex;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease-out;
  &: hover {
    transform: translateY(-5px) translateZ(0);
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
    transform: translateY(-5px) translateZ(0);
  }

  cursor: pointer;
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
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
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
  display: inline-flex;
  align-items: center;
  gap: 16px;
  color: #333;
`;

const SkeletonCard = styled.div``;
