"use client";
import styled from "styled-components";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props: any) {
  const { children } = props;

  return (
    <StyledLayout id="content-body">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </StyledLayout>
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
