import { useState } from "react";
import { recoilStateOption } from "@/app/recoilState/recoilStateOption";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { FcHome, FcDocument } from "react-icons/fc";

function MenuBar() {
  const [option, setOption] = useRecoilState(recoilStateOption);
  const { expanded, menu: selected } = option;

  const handleChangeSide = (menu: string) => {
    if (menu === selected) return;
    setOption({
      ...option,
      menu: menu,
    });
  };

  return (
    <StyledMenuBar expanded={expanded}>
      <BarHeader
        expanded={expanded}
        className={selected === "logo" ? "selected-item" : ""}
        onClick={() => handleChangeSide("logo")}
      >
        <HeaderLogo />
      </BarHeader>
      <BarList>
        <BarListItem className={selected === "home" ? "selected-item" : ""} onClick={() => handleChangeSide("home")}>
          <FcHome size={50} />
        </BarListItem>
        <BarListItem className={selected === "post" ? "selected-item" : ""} onClick={() => handleChangeSide("post")}>
          <FcDocument size={50} />
        </BarListItem>
      </BarList>
    </StyledMenuBar>
  );
}

export default MenuBar;

const StyledMenuBar = styled.div<{
  expanded: boolean;
}>`
  width: ${(props) => (props.expanded ? "100px" : "0px")};
  height: 100%;
  min-height: 100vh;
  display: inline-flex;
  flex-direction: column;
  background: #fbfbfa;
  transition: all 0.5s;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.024) -1px 0px 0px 0px inset;
  overflow: ${(props) => (props.expanded ? "" : "hidden")};
`;

const BarHeader = styled.div<{
  expanded: boolean;
}>`
  width: 100%;
  height: 90px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  position: relative;

  &: hover {
    background: #ededed;
  }

  &.selected-item::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 4px;
    background-color: #5882fa;
  }
`;

const HeaderLogo = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 0.3rem;
  background-image: url("/logo.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #ceecf5;
  user-select: none;
`;

const BarList = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin-top: 16px;
`;

const BarListItem = styled.div`
  width: 100%;
  height: 90px;
  &: hover {
    background: #ededed;
  }
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &.selected-item::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 4px;
    background-color: #5882fa;
  }
`;
