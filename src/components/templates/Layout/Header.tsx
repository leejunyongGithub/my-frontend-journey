import { recoilStateOption } from "@/recoilState/recoilStateOption";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { SlMouse, SlArrowRight, SlArrowLeft, SlHome, SlGrid, SlSocialInstagram } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import ToggleButton from "../../molecules/ToggleButton/ToggleButton";
import { useState } from "react";
import Link from "next/link";

function Header() {
  const [option, setOption] = useRecoilState(recoilStateOption);
  const [toggle, change] = useState<boolean>(false);
  const { expanded, menu: selected, subExpanded } = option;

  const handleChangeMenuBar = () => {
    setOption({
      ...option,
      expanded: !option.expanded,
    });
  };

  const handleChangeSide = (menu: string) => {
    if (menu === selected) return;

    let payload = {};
    if (menu === "post") payload = { subExpanded: true };
    if (menu !== "post" && subExpanded) payload = { subExpanded: false };

    setOption({
      ...option,
      menu: menu,
      ...payload,
    });
  };

  const handleChangeSubBar = () => {
    setOption({
      ...option,
      subExpanded: !option.subExpanded,
    });
  };

  const handleChangeToggle = () => {
    const check = toggle ? "light" : "dark";
    setOption({
      ...option,
      mode: check,
    });
    change((prev) => !prev);
  };

  return (
    <StyledHeader>
      <Link href="/">
        <MobileButton menu={selected === "logo"} onClick={() => handleChangeSide("logo")}>
          <div className="img-btn" />
        </MobileButton>
      </Link>
      <Link href="/introduce">
        <MobileButton menu={selected === "home"} onClick={() => handleChangeSide("home")}>
          <SlHome />
        </MobileButton>
      </Link>
      <Link href="/post">
        <MobileButton menu={selected === "post"} onClick={() => handleChangeSide("post")}>
          <SlGrid />
        </MobileButton>
      </Link>
      <HeaderButton onClick={handleChangeMenuBar}>
        {expanded ? <SlArrowLeft size={20} /> : <SlArrowRight size={20} />}
      </HeaderButton>

      {selected === "post" && (
        <HeaderButton onClick={handleChangeSubBar}>
          <>{subExpanded ? <SlMouse size={25} /> : <SlMouse size={25} color="red" />}</>
        </HeaderButton>
      )}
      <HeaderToggleButton>
        <div>
          <a href="https://www.instagram.com/kiwipodo/" target="_blank">
            <MobileButton menu={selected === "instagram"} onClick={() => handleChangeSide("instagram")}>
              <SlSocialInstagram />
            </MobileButton>
          </a>
          <a href="https://github.com/leejunyongGithub/" target="_blank">
            <MobileButton menu={selected === "github"} onClick={() => handleChangeSide("github")}>
              <VscGithubAlt />
            </MobileButton>
          </a>
        </div>
        <HiOutlineSun size={20} />
        <ToggleButton width={40} height={20} toggle={toggle} onClick={handleChangeToggle} />
        <HiOutlineMoon size={20} />
      </HeaderToggleButton>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  background: #ededed;
  position: relative;
  display: inline-flex;
  align-items: center;
  padding-right: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 2px;
  ${({ theme }) => css`
    background: ${theme.colors.background};
    color: ${theme.colors.color};
  `};
  transition: all 0.3s ease-in-out;
`;

const HeaderButton = styled.div`
  width: 50px;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;

  @media all and (max-width: 1024px) {
    display: none;
  }
`;

const MobileButton = styled.div<{
  menu: boolean;
}>`
  display: none;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;

  border-bottom: ${(props) => (props.menu ? `3px solid ${props.theme.colors.selected}` : "none")};

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
    width: 30px;
    height: 50px;

    .img-btn{
      width: 30px;
      height: 40px;
    }
  }
}
`;

const HeaderToggleButton = styled.div`
  position: absolute;
  right: 12px;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  user-select: none;
  cursor: pointer;
`;
