import styled, { css } from "styled-components";
import { recoilStateOption } from "@/recoilState/recoilStateOption";
import { useRecoilValue } from "recoil";
import MenuSelectList from "../../molecules/MenuSelectList/MenuSelectList";
import MenuButton from "../../molecules/MenuButton/MenuButton";
import { SlFolder } from "react-icons/sl";

const CATEGORY = ["프론트엔드", "React", "잡담", "키위와포도"];
const OPTIONS = ["테스트글1", "테스트글2", "테스트글3", "테스트글4"];

function PostList() {
  const option = useRecoilValue(recoilStateOption);
  const { subExpanded, category } = option;

  return (
    <PostListWrap expanded={subExpanded}>
      <ListContent className={subExpanded ? "show" : ""}>
        {CATEGORY.map((item: any) => (
          <MenuSelectList
            className="no-scrollbar"
            key={item}
            trigger={
              <MenuButton icon={<SlFolder />}>
                <span>{item}</span>
              </MenuButton>
            }
            options={OPTIONS}
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
