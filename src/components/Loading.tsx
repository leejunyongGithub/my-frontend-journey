"use client";
import { LAYOUT_KEY } from "@/constants";
import { getItem } from "@/utils";
import styled from "styled-components";

function Loading() {
  const option = getItem(LAYOUT_KEY);
  const { mode } = option;

  const imgSrc = mode === "dark" ? "/dark_cat.svg" : "/light_cat.svg";

  return (
    <LoadingWrap mode={mode}>
      <img
        src={imgSrc}
        style={{
          width: "30%",
          height: "30%",
        }}
      />
      <span style={{ marginTop: "24px", fontSize: "2rem", fontWeight: 700, color: mode === 'dark' ? "#fff" : "#000" }}>Loading...</span>
    </LoadingWrap>
  );
}

export default Loading;

const LoadingWrap = styled.div<{
  mode: string;
}>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  background: ${(props) => (props.mode === "light" ? "#f2f0f0" : "#5e5656")};
`;
