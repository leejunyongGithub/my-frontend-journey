"use client";
import styled from "styled-components";
import MenuBar from "./MenuBar";
import Header from "./Header";
import Content from "./Content";
import PostList from "./PostList";
//import { Noto_Sans_KR } from "next/font/google";
import ThemeLayout from "./\bThemeLayout";

//const notoSans = Noto_Sans_KR({ weight: "400", subsets: ["latin"] });

function Layout(props: any) {
  const { children, posts } = props;

  return (
    <ThemeLayout>
      <StyledLayout>
        <div
          style={{
            display: "flex",
          }}
        >
          <MenuBar />
          <PostList posts={posts} />
          <div className="flex-layout">
            <Header />
            <Content>{children}</Content>
          </div>
        </div>
      </StyledLayout>
    </ThemeLayout>
  );
}

export default Layout;

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;

  .flex-layout {
    display: inline-flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden
  }
`;
