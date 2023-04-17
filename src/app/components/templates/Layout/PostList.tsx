import styled from "styled-components";
import { recoilStateOption } from "@/app/recoilState/recoilStateOption";
import { useRecoilValue } from "recoil";
import MenuSelectList from "../../molecules/MenuSelectList/MenuSelectList";
import MenuButton from "../../molecules/MenuButton/MenuButton";
import { FcFolder, FcOpenedFolder } from "react-icons/fc";

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
              <MenuButton icon={category === item ? <FcOpenedFolder /> : <FcFolder />}>
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
  background: #d4e6ee;
  transition: width 0.5s;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.024) -1px 0px 0px 0px inset;
  gap: 6px;
  padding: ${(props) => (props.expanded ? "16px" : "0px")};
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ListContent = styled.div`
  opacity: 0;
  transition: opacity 0s ease-in-out;

  &.show {
    opacity: 1;
    transition: opacity 1s ease-in-out;
  }
`;
