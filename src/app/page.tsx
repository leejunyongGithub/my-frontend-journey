"use client";
import { RecoilRoot } from "recoil";
import Layout from "./components/templates/layout/Layout";

export default function Home() {
  return (
    <RecoilRoot>
      <Layout />
    </RecoilRoot>
  );
}
