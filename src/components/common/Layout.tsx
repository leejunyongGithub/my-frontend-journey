"use client";
import styled from "styled-components";
//import MenuBar from "./MenuBar";
import Header from "./Header";
import Content from "./Content";
//import PostList from "./PostList";
import ThemeLayout from "./\bThemeLayout";
import Footer from "./Footer";

//const notoSans = Noto_Sans_KR({ weight: "400", subsets: ["latin"] });

function Layout(props: any) {
  const { children, posts, directoryList } = props;

  return (
    <ThemeLayout>
      <StyledLayout id="content-body">
        {/* <MenuBar /> */}
        {/* <PostList posts={posts} directoryList={directoryList} /> */}
        {/* <div className="flex-layout"> */}
        <Header />
        {/* <ScrollProgressBar /> */}
        <Content>{children}</Content>
        <Footer />
        {/* </div> */}
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
  }
`;
