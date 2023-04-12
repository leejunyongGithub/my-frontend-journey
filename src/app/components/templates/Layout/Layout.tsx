import styled from "styled-components";
import MenuBar from "./MenuBar";
import Header from "./Header";
import Flex from "./Flex";
import Content from "./Content";

function Layout() {
  return (
    <StyledLayout>
      <Flex>
        <MenuBar />
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
`;
