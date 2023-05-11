"use client";
import styled from "styled-components";
import Content from "./Content";
import Footer from "./Footer";
import ThemeLayout from "./\bThemeLayout";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./Header"), {
  ssr: false,
});

function Layout(props: any) {
  const { children, posts, directoryList } = props;

  return (
    <ThemeLayout>
      <StyledLayout id="content-body">
        <Header />
        <Content>{children}</Content>
        <Footer />
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
