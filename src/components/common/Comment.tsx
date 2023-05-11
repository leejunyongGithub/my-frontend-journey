"use client";
import { stat } from "fs";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function Comment() {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<{ status: "pending" | "success" | "failure" }>({ status: "pending" });

  useEffect(() => {
    const check = ref?.current?.children || [];

    if (check.length > 0) return;

    const scriptEl = document.createElement("script");

    scriptEl.onerror = () => {
      setState({ status: "failure" });
    };

    scriptEl.async = true;

    scriptEl.src = "https://utteranc.es/client.js";
    scriptEl.setAttribute("repo", "leejunyongGithub/my-frontend-journey");
    scriptEl.setAttribute("issue-term", "title");
    scriptEl.setAttribute("theme", "github-light");
    scriptEl.setAttribute("crossorigin", "anonymous");

    scriptEl.onload = () => {
      setState({ status: "success" });
    };

    ref.current?.appendChild(scriptEl);
  }, []);

  return (
    <CommentWrap>
      {(state.status === "pending" || state.status === "failure") && <BlurBox />}
      <div ref={ref}></div>
    </CommentWrap>
  );
}

export default Comment;

const CommentWrap = styled.div`
  margin-top: 10px;
  width: 100%;
  min-height: 310px;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  position: relative;
`;

const BlurBox = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  background: #ededed;
  filter: blur(5px);
  opacity: 0.9;
  position: absolute;
  z-index: 999;
`;
