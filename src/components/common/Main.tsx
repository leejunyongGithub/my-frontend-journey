"use client";
import { useEffect } from "react";
import Layout from "../layouts/Layout";
import { RecoilRoot } from "recoil";

function Main(props: any) {
  const { children, posts, directoryList } = props;

  useEffect(() => {
    console.log("%c준키위키 블로그", `color:#3d5afe; font-size: 4rem; font-weight: bold`);
  }, []);

  return (
    <RecoilRoot>
      <Layout posts={posts} directoryList={directoryList}>
        {children}
      </Layout>
    </RecoilRoot>
  );
}

export default Main;
