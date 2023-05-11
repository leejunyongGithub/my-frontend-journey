import { recoilStateOption } from "@/recoilState/recoilStateOption";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import ToggleButton from "./Button/ToggleButton";
import { LAYOUT_KEY } from "@/constants";
import { setItem } from "@/utils";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { CiViewList } from "react-icons/ci";

function Header() {
  const [width, setWidth] = useState<number>(0);
  // 스크롤 진행도에 따른 width 상태 관리
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [option, setOption] = useRecoilState(recoilStateOption);
  const { menu: selected, mode } = option;

  const handleChangeSide = (menu: string) => {
    if (menu === selected) return;

    setItem(LAYOUT_KEY, {
      ...option,
      expanded: menu,
    });
    setOption({
      ...option,
      menu: menu,
    });
  };

  const handleChangeToggle = () => {
    const check = mode === "light" ? "dark" : "light";

    setItem(LAYOUT_KEY, {
      ...option,
      mode: check,
    });

    setOption({
      ...option,
      mode: check,
    });
  };

  const handleScroll = useCallback((): void => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop === 0) {
      // 스크롤바가 가장 위에있을때는 0으로 처리
      setWidth(0);
      return;
    }

    const windowHeight: number = scrollHeight - clientHeight;
    // 스크롤바 크기 = (내용 전체의 높이) - (스크롤바를 제외한 클라이언트 높이)

    const currentPercent: number = scrollTop / windowHeight;
    // 스크롤바 크기 기준으로 scrollTop이 내려온만큼에 따라 계산 (계산시 소수점 둘째자리까지 반환)

    setWidth(currentPercent * 100);
    // 소수점 둘째자리 까지이므로, 100을 곱하여 정수로 만들어줍니다.
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [handleScroll]);

  return (
    <StyledHeader scroll={window.scrollY}>
      <div style={{ display: "inline-flex", height: "40px", gap: "16px" }}>
        <Link href="/">
          <MobileButton menu={selected === "logo"} onClick={() => handleChangeSide("logo")}>
            <div className="img-btn" />
          </MobileButton>
        </Link>
        <Link href="/post">
          <MobileButton menu={selected === "post"} onClick={() => handleChangeSide("post")}>
            <CiViewList size={40} />
          </MobileButton>
        </Link>
      </div>
      <HeaderToggleButton>
        {/* <div>
          <a href="https://www.instagram.com/kiwipodo/" target="_blank">
            <MobileButton menu={selected === "instagram"} onClick={() => handleChangeSide("instagram")}>
              <SlSocialInstagram size={20} />
            </MobileButton>
          </a>
          <a href="https://github.com/leejunyongGithub/" target="_blank">
            <MobileButton menu={selected === "github"} onClick={() => handleChangeSide("github")}>
              <VscGithubAlt size={20} />
            </MobileButton>
          </a>
        </div> */}
        <HiOutlineSun size={20} />
        <ToggleButton width={40} height={20} toggle={mode === "light" ? false : true} onClick={handleChangeToggle} />
        <HiOutlineMoon size={20} />
      </HeaderToggleButton>
      {window.scrollY > 1 && (
        <div className="scroll-progress" ref={progressRef}>
          <div className="scroll-progress-gauage" style={{ width: width + "%" }}></div>
        </div>
      )}
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header<{
  scroll: number;
}>`
  overflow: hidden;
  width: ${(props) => (props.scroll > 1 ? "80%" : "100%")};
  border-radius: ${(props) => (props.scroll > 1 ? "2rem" : "0")};
  text-align: center;
  height: 60px;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;
  z-index: 999;
  background: #fff;
  margin-top: ${(props) => (props.scroll > 1 ? "10px" : "0px")};
  box-shadow: ${(props) =>
    props.scroll > 1 ? "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" : "none"};

  padding-left: ${(props) => (props.scroll > 1 ? "25px" : "15rem")};
  padding-right: ${(props) => (props.scroll > 1 ? "25px" : "15rem")};

  @media all and (min-width: 280px) and (max-width: 1024px) {
    border-bottom: ${(props) => (props.scroll > 1 ? "none" : "1px solid #ededed")};
    width: ${(props) => (props.scroll > 1 ? "90%" : "100%")};
  }

  @media all and (min-width: 1024px) and (max-width: 1200px) {
    height: 50px;
    padding-left: 64px;
    padding-right: 64px;
    box-sizing: border-box;
  }

  @media all and (min-width: 280px) and (max-width: 1024px) {
    height: 50px;
    padding-left: 12px;
    padding-right: 12px;
    box-sizing: border-box;
  }
`;

const MobileButton = styled.div<{
  menu: boolean;
}>`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  .img-btn{
    width: 40px;
    height: 40px;
    background-image: url("/logo.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #ceecf5;
    border-radius: 0.3rem;
  }

  @media all and (min-width: 280px) and (max-width: 1024px){
    display: inline-flex;
  }

  @media all and (min-width: 280px) and (max-width: 512px){
    width: 50px;
  }
}
`;

const HeaderToggleButton = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  user-select: none;
  cursor: pointer;
`;
