import styled, { ThemeProvider } from "styled-components";
import MenuBar from "./MenuBar";
import Header from "./Header";
import Flex from "./Flex";
import Content from "./Content";
import PostList from "./PostList";
import { useRecoilValue } from "recoil";
import { recoilStateOption } from "@/recoilState/recoilStateOption";

const light = {
  colors: {
    background: "#fbfbfa",
    color: "#5d5d5d",
    selected: "#5882fa",
    postBackground: "#d4e6ee",
    hover: "#ededed",
    scroll: "#58acfa",
    content: "#fff",
    tooltip: "",
    contentHover: "#95c3f5",
  },
};

const dark = {
  colors: {
    background: "#353332",
    color: "#fff",
    selected: "#e52b88",
    postBackground: "#666",
    hover: "#5d5959",
    scroll: "#ca1560",
    content: "#4a4a4a",
    tooltip: "#e52b88",
    contentHover: "#353332",
  },
};

function Layout(props: any) {
  const option = useRecoilValue(recoilStateOption);
  const { mode } = option;
  const { children } = props;

  return (
    <ThemeProvider theme={mode === "dark" ? dark : light}>
      <StyledLayout>
        <Flex>
          <MenuBar />
          <PostList />
          <Flex mode="column">
            <Header />
            <Content>{children}</Content>
          </Flex>
        </Flex>
      </StyledLayout>
    </ThemeProvider>
  );
}

export default Layout;

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
