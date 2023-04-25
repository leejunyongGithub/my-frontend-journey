"use client";
import styled from "styled-components";
import MenuBar from "./MenuBar";
import Header from "./Header";
import Flex from "./Flex";
import Content from "./Content";
import PostList from "./PostList";
import { Noto_Sans_KR } from "next/font/google";
import ThemeLayout from "./\bThemeLayout";

const notoSans = Noto_Sans_KR({ weight: "400", subsets: ["latin"] });

function Layout(props: any) {
  const { children, postData } = props;

  return (
    <ThemeLayout>
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
    </ThemeLayout>
  );
}

export default Layout;

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
