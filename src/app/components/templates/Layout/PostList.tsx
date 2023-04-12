import styled from "styled-components";
import { recoilStateOption } from "@/app/recoilState/recoilStateOption";
import { useRecoilState } from "recoil";

function PostList() {
  const [option, setOption] = useRecoilState(recoilStateOption);
  const { subExpanded } = option;

  return <PostListWrap expanded={subExpanded}></PostListWrap>;
}

export default PostList;

const PostListWrap = styled.div<{
  expanded: boolean;
}>`
  width: ${(props) => (props.expanded ? "250px" : "0px")};
  height: 100%;
  min-height: 100vh;
  display: inline-flex;
  flex-direction: column;
  background: #d4e6ee;
  transition: all 0.5s;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.024) -1px 0px 0px 0px inset;
  overflow: ${(props) => (props.expanded ? "" : "hidden")};
`;
