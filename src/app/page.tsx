"use client";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { recoilStateOption } from "@/recoilState/recoilStateOption";

export default function Home() {
  const option = useRecoilValue(recoilStateOption);
  const { mode } = option;
  const fontColor = mode === "dark" ? "#fff" : "#495057";

  return (
    <>
      <HomeWrap>
        <HomeContentWrap fontColor={fontColor}>
          <HomeHeader>
            <HeaderContent>
              <span>안녕하세요</span>
              <div>
                <span className="header-title middle">프론트엔드 개발자, 이준용</span>입니다.
              </div>
              <div className="header-content">
                <span>단순히 동작을 위한 개발이 아닌 더 나은 개발을 위해 노력하고,공부하며</span>
                <span>
                  성장해나가고 있는 <span style={{ fontWeight: 700 }}>웹 프론트엔드 개발자 이준용</span>입니다.
                </span>
                <span>아름다운것을 좋아하며 또 다른 아름다움을 찾아 계속해서 나아가고 있으며,</span>
                <span>웹 프론트엔드 개발을 통해 저의 인생의 시작과 끝을 아름답게 맺고 싶습니다.</span>
              </div>
            </HeaderContent>
          </HomeHeader>
          {/* <HomeContent>경력</HomeContent> */}
        </HomeContentWrap>
      </HomeWrap>
    </>
  );
}

const HomeWrap = styled.article`
  color: red;
  width: 100%;
  height: 100%;
`;

const HomeContentWrap = styled.div<{
  fontColor: string;
}>`
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  padding: 2rem;

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

const HomeHeader = styled.div`
  width: 100%;
  height: 450px;
  display: inline-flex;
  justify-content: center;
`;

const HeaderContent = styled.header`
  width: 100%;
  max-width: 800px;
  height: 100%;

  font-size: 2rem;

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

const HomeContent = styled.article``;
