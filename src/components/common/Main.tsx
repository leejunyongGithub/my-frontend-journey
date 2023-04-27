"use client";
import Layout from "./Layout";
import { RecoilRoot } from "recoil";

function Main(props: any) {
  const { children, posts } = props;

  return (
    <RecoilRoot>
      <Layout posts={posts}>{children}</Layout>
    </RecoilRoot>
  );
}

export default Main;
