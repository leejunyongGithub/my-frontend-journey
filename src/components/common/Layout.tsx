import styled, { ThemeProvider } from "styled-components";
import MenuBar from "./MenuBar";
import Header from "./Header";
import Flex from "./Flex";
import Content from "./Content";
import PostList from "./PostList";
import { useRecoilValue } from "recoil";
import { recoilStateOption } from "@/recoilState/recoilStateOption";
import { Noto_Sans_KR } from "next/font/google";

const light = {
  colors: {
    background: "#fbfbfa",
    color: "#5d5d5d",
    selected: "#5882fa",
    postBackground: "#fafafa",
    hover: "#ededed",
    scroll: "#58acfa",
    content: "#fff",
    tooltip: "",
    text: "#000",
    contentHover: "#95c3f5",
    borderBottom: "#ededed",
  },
};

const dark = {
  colors: {
    background: "#353332",
    color: "#fff",
    selected: "#e52b88",
    postBackground: "#272727",
    hover: "#5d5959",
    scroll: "#ca1560",
    content: "#292929",
    tooltip: "#e52b88",
    text: "#fff",
    contentHover: "#353332",
    borderBottom: "#3f3f3f",
  },
};

const notoSans = Noto_Sans_KR({ weight: "400", subsets: ["latin"] });

function Layout(props: any) {
  const option = useRecoilValue(recoilStateOption);
  const { mode } = option;
  const { children, postData } = props;

  return (
    <ThemeProvider theme={mode === "dark" ? dark : light}>
      <StyledLayout className={notoSans.className}>
        <Flex>
          <MenuBar />
          <PostList postData={postData} />
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
