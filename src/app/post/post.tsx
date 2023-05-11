"use client";
import { useCallback, useMemo, useState } from "react";
import SearchInput from "@/components/common/Input/SearchInput";
import styled, { css } from "styled-components";
import { filterDate } from "@/utils";
import moment from "moment";
import { useRouter } from "next/navigation";
import { cloneDeep } from "lodash";

function Post(props: any) {
  const router = useRouter();
  const { posts } = props;
  const resData = filterDate(posts) || {};
  const { data: filterDateList, category } = resData;
  const [filter, setFilter] = useState(category);
  const [search, change] = useState("");

  const handleChangeValue = (e: any) => {
    const { value } = e.target;
    change(value);
  };

  const clearValue = () => {
    change("");
  };

  const handleChangeBedgeItem = (title: string) => {
    let copyList = cloneDeep(filter);
    if (title === "전체") {
      copyList = filter.length === category.length ? [] : category;
    } else {
      if (filter.includes(title)) {
        copyList = copyList.filter((item: string) => item !== title);
      } else {
        copyList.push(title);
      }
    }
    setFilter(copyList);
  };

  const parseFilterList = useCallback(
    (postList: any) => {
      return postList?.filter((item: any) => {
        const { frontMatter } = item;
        const { title, category: categoryItem } = frontMatter;
        return filter.length === category.length
          ? title.toLowerCase().includes(search.toLowerCase())
          : title.toLowerCase().includes(search.toLowerCase()) && filter.includes(categoryItem);
      });
    },
    [search, filter]
  );

  const parseListRen = useMemo(() => {
    return posts?.filter((item: any) => {
      const { frontMatter } = item;
      const { title, category: categoryItem } = frontMatter;
      return filter.length === category.length
        ? title.toLowerCase().includes(search.toLowerCase())
        : title.toLowerCase().includes(search.toLowerCase()) && filter.includes(categoryItem);
    });
  }, [search, filter]);

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
        <FilterBedge
          className={filter.length === category.length ? "selected" : ""}
          onClick={() => handleChangeBedgeItem("전체")}
        >
          <span>전체</span>
        </FilterBedge>
        {category.map((title: string) => (
          <FilterBedge
            key={title}
            className={filter?.includes(title) ? "selected" : ""}
            onClick={() => handleChangeBedgeItem(title)}
          >
            <span>{title}</span>
          </FilterBedge>
        ))}
      </PostFilter>
      {parseListRen.length > 0
        ? Object?.keys(filterDateList).map((item: any) => {
            return (
              <PostList key={item}>
                <PostTitle>{item}</PostTitle>
                <Line>
                  <div className="line"></div>
                </Line>
                {parseFilterList(filterDateList[item]).map((el: any) => {
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
          }) || []
        : "검색된 내용이 없습니다 :)"}
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
