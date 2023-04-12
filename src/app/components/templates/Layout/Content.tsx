import styled from "styled-components";

function Content() {
  return (
    <StyledContent className="content-wrap">
      <div style={{ height: "2000px" }}></div>
    </StyledContent>
  );
}

export default Content;

const StyledContent = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  max-height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  background: #fff;

  &.content-wrap::-webkit-scrollbar {
    width: 10px; /* 스크롤바의 너비 */
  }

  &.content-wrap::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #58acfa; /* 스크롤바의 색상 */
  }

  &.content-wrap::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1); /*스크롤바 뒷 배경 색상*/
  }
`;
