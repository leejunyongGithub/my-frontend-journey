"use client";
import { ReactNode } from "react";
import Layout from "./Layout";
import { RecoilRoot } from "recoil";

function Main({ children }: { children: ReactNode }) {
  return (
    <RecoilRoot>
      <Layout>{children}</Layout>
    </RecoilRoot>
  );
}

export default Main;
