"use client";
import Layout from "./Layout";
import { RecoilRoot } from "recoil";

function Main(props: any) {
  const { children, posts,directoryList } = props;

  return (
    <RecoilRoot>
      <Layout posts={posts} directoryList={directoryList}>{children}</Layout>
    </RecoilRoot>
  );
}

export default Main;
