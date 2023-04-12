import styled from "styled-components";
import MenuBar from "./MenuBar";
import Header from "./Header";
import Flex from "./Flex";
import Content from "./Content";
import PostList from "./PostList";

function Layout() {
  return (
    <StyledLayout>
      <Flex>
        <MenuBar />
        <PostList />
        <Flex mode="column">
          <Header />
          <Content />
        </Flex>
      </Flex>
    </StyledLayout>
  );
}

export default Layout;

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
