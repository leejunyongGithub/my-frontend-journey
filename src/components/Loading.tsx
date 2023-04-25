"use client";
import styled from "styled-components";

function Loading() {

  const imgSrc = "/light_cat.svg";

  return (
    <LoadingWrap>
      <img
        src={imgSrc}
        style={{
          width: "30%",
          height: "30%",
        }}
      />
      <span style={{ marginTop: "24px", fontSize: "2rem", fontWeight: 700, color: "#000" }}>Loading...</span>
    </LoadingWrap>
  );
}

export default Loading;

const LoadingWrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  background: #f2f0f0;
`;
