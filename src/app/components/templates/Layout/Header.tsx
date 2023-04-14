import { recoilStateOption } from "@/app/recoilState/recoilStateOption";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { SlFire, SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import ToggleButton from "../../molecules/ToggleButton/ToggleButton";
import { useState } from "react";

function Header() {
  const [option, setOption] = useRecoilState(recoilStateOption);
  const [toggle, change] = useState<boolean>(false);
  const { expanded, menu, subExpanded } = option;

  const handleChangeMenuBar = () => {
    setOption({
      ...option,
      expanded: !option.expanded,
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
      <HeaderButton onClick={handleChangeMenuBar}>
        {expanded ? <SlArrowLeft size={20} /> : <SlArrowRight size={20} />}
      </HeaderButton>
      <HeaderButton onClick={handleChangeSubBar}>
        {menu === "post" && <>{subExpanded ? <SlFire size={25} /> : <SlFire size={25} color="red" />}</>}
      </HeaderButton>
      <HeaderToggleButton>
        <HiOutlineSun size={20} />
        <ToggleButton width={40} height={20} toggle={toggle} onClick={handleChangeToggle} />
        <HiOutlineMoon size={20} />
      </HeaderToggleButton>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  height: 50px;
  background: #ededed;
  position: relative;
  display: inline-flex;
  align-items: center;
  padding-right: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 2px;
`;

const HeaderButton = styled.div`
  width: 50px;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const HeaderToggleButton = styled.div`
  position: absolute;
  right: 12px;
  display: inline-flex;
  gap: 8px;
  align-items: center;
`;
