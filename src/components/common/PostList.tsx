"use client";
import styled, { css } from "styled-components";
import { recoilStateOption } from "@/recoilState/recoilStateOption";
import { useRecoilValue } from "recoil";
import { SlArrowRight } from "react-icons/sl";
import { filterCategoryList, filterPostList } from "@/utils";
import MenuSelectList from "./Dropdown/MenuSelectList";
import MenuButton from "./Button/MenuButton";
import React, { useState } from "react";
import SearchInput from "./Input/SearchInput";

function PostList(props: any) {
  const [search, change] = useState<string>("");
  const { posts } = props;
  const option = useRecoilValue(recoilStateOption);
  const { subExpanded, mode } = option;

  const handleChangeValue = (e: any) => {
    const { value } = e.target;
    change(value);
  };
  const clearValue = () => {
    change("");
  };

  const filterList =
  posts?.filter((item: any) => {
      const { frontMatter } = item;
      const { title } = frontMatter;
      return title.toLowerCase().includes(search.toLowerCase());
    }) || [];

  const categoryList = filterCategoryList(posts);
  const filterData = filterPostList(filterList);

  return (
    <PostListWrap expanded={subExpanded}>
      <ListContent className={subExpanded ? "show" : ""}>
        <div style={{ marginBottom: "5px" }}>
          글 <span style={{ color: "#978c8c !important" }}>{`(${posts?.length || 0})`}</span>
        </div>
        <SearchInput value={search} onChange={handleChangeValue} clear={clearValue} placeholder="검색.." />
        {categoryList?.map((item: any) => (
          <MenuSelectList
            className="no-scrollbar"
            key={item.frontMatter.category}
            trigger={
              <MenuButton icon={<SlArrowRight size={16} />} color={mode === "dark" ? "#fff" : "#5c6975"}>
                <span>{item.frontMatter.category}</span>
              </MenuButton>
            }
            options={filterData?.[item.frontMatter.category] || []}
          />
        ))}
      </ListContent>
    </PostListWrap>
  );
}

export default React.memo(PostList);

const PostListWrap = styled.div<{
  expanded: boolean;
}>`
  width: ${(props) => (props.expanded ? "250px" : "0px")};
  display: inline-flex;
  flex-direction: column;
  transition: width 0.5s;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.024) -1px 0px 0px 0px inset;
  gap: 6px;
  padding: ${(props) => (props.expanded ? "16px" : "0px")};
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media all and (max-width: 1024px) {
    display: none;
  }

  ${({ theme }) => css`
    background: ${theme.colors.postBackground};
    color: ${theme.colors.color};
    border-right: 1px solid ${theme.colors.borderBottom};
  `};
  transition: all 0.3s ease-in-out;
`;

const ListContent = styled.div`
  opacity: 0;
  transition: opacity 0s ease-in-out;

  &.show {
    opacity: 1;
    transition: opacity 1s ease-in-out;
  }
`;
