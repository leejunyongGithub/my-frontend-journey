"use client";
import Layout from "./Layout";
import { RecoilRoot } from "recoil";

function Main(props: any) {
  const { children, postData } = props;

  return (
    <RecoilRoot>
      <Layout postData={postData}>{children}</Layout>
    </RecoilRoot>
  );
}

export default Main;
