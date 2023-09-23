"use client";
import styled, { ThemeProvider } from "styled-components";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { RecoilRoot } from "recoil";
import { useEffect, useRef, ReactNode } from "react";
import { usePathname } from "next/navigation";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  const renderRef = useRef<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    console.log("%c준키위키 블로그", `color:#3d5afe; font-size: 4rem; font-weight: bold`);
  }, []);

  useEffect(() => {
    if (!renderRef.current) {
      renderRef.current = true;
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <ThemeProvider theme={{}}>
      <RecoilRoot>
        <StyledLayout id="content-body">
          <Header />
          <Content>{children}</Content>
          <Footer />
        </StyledLayout>
      </RecoilRoot>
    </ThemeProvider>
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
