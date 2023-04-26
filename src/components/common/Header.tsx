import { recoilStateOption } from "@/recoilState/recoilStateOption";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { SlMouse, SlArrowRight, SlArrowLeft, SlGrid, SlSocialInstagram } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import ToggleButton from "./Button/ToggleButton";
import { LAYOUT_KEY } from "@/constants";
import { setItem } from "@/utils";
import Link from "next/link";

function Header() {
  const [option, setOption] = useRecoilState(recoilStateOption);

  const { expanded, menu: selected, subExpanded, mode } = option;

  const handleChangeMenuBar = () => {
    setItem(LAYOUT_KEY, {
      ...option,
      expanded: !option.expanded,
    });
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

    setItem(LAYOUT_KEY, {
      ...option,
      expanded: menu,
      ...payload,
    });
    setOption({
      ...option,
      menu: menu,
      ...payload,
    });
  };

  const handleChangeSubBar = () => {
    setItem(LAYOUT_KEY, {
      ...option,
      subExpanded: !option.subExpanded,
    });
    setOption({
      ...option,
      subExpanded: !option.subExpanded,
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

  return (
    <StyledHeader>
      <div style={{ paddingLeft: "8px", display: "inline-flex", gap: "8px" }}>
        <Link href="/">
          <MobileButton menu={selected === "logo"} onClick={() => handleChangeSide("logo")}>
            <div className="img-btn" />
          </MobileButton>
        </Link>
        <Link href="/post">
          <MobileButton menu={selected === "post"} onClick={() => handleChangeSide("post")}>
            <SlGrid />
          </MobileButton>
        </Link>
      </div>
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
        <ToggleButton width={40} height={20} toggle={mode === "light" ? false : true} onClick={handleChangeToggle} />
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
  ${({ theme }) => css`
    background: ${theme.colors.background};
    color: ${theme.colors.color};
    border-bottom: 1px solid ${theme.colors.borderBottom};
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
    width: 50px;
    height: 50px;

    .img-btn{
      width: 40px;
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
