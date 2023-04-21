import styled, { css } from "styled-components";
import { recoilStateOption } from "@/recoilState/recoilStateOption";
import { useRecoilValue } from "recoil";
import { SlFolder } from "react-icons/sl";
import { filterCategoryList, filterPostList } from "@/utils";
import MenuSelectList from "./Dropdown/MenuSelectList";
import MenuButton from "./Button/MenuButton";

function PostList(props: any) {
  const { postData } = props;
  const option = useRecoilValue(recoilStateOption);
  const { subExpanded } = option;

  const categoryList = filterCategoryList(postData);
  const filterData = filterPostList(postData);

  return (
    <PostListWrap expanded={subExpanded}>
      <ListContent className={subExpanded ? "show" : ""}>
        {categoryList?.map((item: any) => (
          <MenuSelectList
            className="no-scrollbar"
            key={item.frontMatter.category}
            trigger={
              <MenuButton icon={<SlFolder size={16} />}>
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

export default PostList;

const PostListWrap = styled.div<{
  expanded: boolean;
}>`
  width: ${(props) => (props.expanded ? "250px" : "0px")};
  height: 100vh;
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
    * {
      color: ${theme.colors.color} !important;
    }
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
