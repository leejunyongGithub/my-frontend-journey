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
    <HomeContentWrap fontColor={fontColor}>
        <HeaderContent>
          <MarkdownView post={post} />
        </HeaderContent>
    </HomeContentWrap>
  );
}

const HomeContentWrap = styled.div<{
  fontColor: string;
}>`
  width: 100%;
  display: inline-flex;
  flex-direction: column;

  color: ${(props) => props.fontColor};

  animation: fadein 1s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const HeaderContent = styled.div`
  width: 100%;
  height: 100%;

  display: inline-flex;
  flex-direction: column;
  gap: 16px;

  .header-title {
    font-weight: 700;
  }

  .header-content {
    margin-top: 24px;
    font-weight: 400px;
    font-size: 24px;
    display: inline-flex;
    flex-direction: column;
    gap: 8px;
    font-size: 1rem;
  }

  .bold-text {
    font-weight: 700;
  }

  .large {
    font-size: 48px;
  }

  .middle {
    font-size: 32px;
  }
`;
