"use client";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { recoilStateOption } from "@/recoilState/recoilStateOption";
import dynamic from "next/dynamic";

const MarkdownView = dynamic(() => import("@/components/common/MarkdownView"));

export default function Main(props: any) {
  const { post } = props;
  const option = useRecoilValue(recoilStateOption);
  const { mode } = option;
  const fontColor = mode === "dark" ? "#fff" : "#495057";

  return (
    <div className="markdown-body-content">
      <div id="markdown-view">
        <MarkdownView post={post} />
      </div>
    </div>
  );
}