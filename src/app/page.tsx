"use client";
import { RecoilRoot } from "recoil";
import Layout from "./components/Layout/Layout";

export default function Home() {
  return (
    <RecoilRoot>
      <Layout />
    </RecoilRoot>
  );
}
