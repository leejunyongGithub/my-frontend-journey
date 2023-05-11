import "react-tooltip/dist/react-tooltip.css";
import { recoilStateOption } from "@/recoilState/recoilStateOption";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialInstagram, SlGrid } from "react-icons/sl";
import { Tooltip } from "react-tooltip";
import Link from "next/link";
import { setItem } from "@/utils";
import { LAYOUT_KEY } from "@/constants";

function MenuBar() {
  const [option, setOption] = useRecoilState(recoilStateOption);
  const { expanded, menu: selected, subExpanded } = option;

  const handleChangeSide = (menu: string) => {
    if (menu === selected) return;

    let payload = {};
    if (menu === "post") payload = { subExpanded: true };
    if (menu !== "post" && subExpanded) payload = { subExpanded: false };

    setItem(LAYOUT_KEY, {
      ...option,
      menu: menu,
      ...payload,
    });

    setOption({
      ...option,
      menu: menu,
      ...payload,
    });
  };

  return (
    <StyledMenuBar expanded={expanded}>
      <Link href="/">
        <BarHeader
          expanded={expanded}
          className={selected === "logo" ? "selected-item" : ""}
          onClick={() => handleChangeSide("logo")}
        >
          <HeaderLogo id="main" />
        </BarHeader>
      </Link>
      <BarList>
        <Link href="/post">
          <BarListItem
            id="content"
            className={selected === "post" ? "selected-item" : ""}
            onClick={() => handleChangeSide("post")}
          >
            <SlGrid size={30} />
          </BarListItem>
        </Link>
      </BarList>

      <div style={{ position: "absolute", left: "0px", bottom: "0px", width: "100%" }}>
        <a href="https://github.com/leejunyongGithub/" target="_blank">
          <BarListItem
            id="github"
            className={selected === "github" ? "selected-item" : ""}
            onClick={() => handleChangeSide("github")}
          >
            <VscGithubAlt size={30} />
          </BarListItem>
        </a>
      </div>
      <div style={{ position: "absolute", left: "0px", bottom: "90px", width: "100%" }}>
        <a href="https://www.instagram.com/kiwipodo/" target="_blank">
          <BarListItem
            id="instagram"
            className={selected === "instagram" ? "selected-item" : ""}
            onClick={() => handleChangeSide("instagram")}
          >
            <SlSocialInstagram size={30} />
          </BarListItem>
        </a>
      </div>
      <StyledTooltip variant="info" anchorId="home" place="right" content="홈" />
      <StyledTooltip variant="info" anchorId="main" place="right" content="저는 고양이를 좋아하는 개발자입니다." />
      <StyledTooltip variant="info" anchorId="content" place="right" content="고양이와 함께 작성한 글" />
      <StyledTooltip variant="info" anchorId="github" place="right" content="Github" />
      <StyledTooltip variant="info" anchorId="instagram" place="right" content="키위와 포도의 일상" />
    </StyledMenuBar>
  );
}

export default MenuBar;

const StyledMenuBar = styled.aside<{
  expanded: boolean;
}>`
  position: relative;
  width: ${(props) => (props.expanded ? "85px" : "0px")};
  height: 100%;
  min-height: 100vh;
  display: inline-flex;
  flex-direction: column;
  background: #fbfbfa;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.024) -1px 0px 0px 0px inset;
  transition: width 0.5s;
  ${({ theme }) => css`
    background: ${theme.colors.background};
    color: ${theme.colors.color};
  `};

  user-select: none;

  transition: all 0.3s ease-in-out;

  @media all and (max-width: 1024px) {
    display: none;
  }

  overflow: hidden;
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
    ${({ theme }) => css`
      background: ${theme.colors.hover};
    `};
  }

  &.selected-item::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 4px;
    ${({ theme }) => css`
      background: ${theme.colors.selected};
    `};
  }
`;

const HeaderLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 0.3rem;
  background-image: url("/logo.webp");
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

  a {
    width: 100%;
  }
`;

const BarListItem = styled.div`
  width: 100%;
  height: 90px;
  &: hover {
    ${({ theme }) => css`
      background: ${theme.colors.hover};
    `};
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
    ${({ theme }) => css`
      background: ${theme.colors.selected};
    `};
  }
`;

const StyledTooltip = styled(Tooltip)`
  z-index: 999;
  ${({ theme }) => css`
    background: ${theme.colors.tooltip} !important;
  `};

  @media all and (max-width: 1024px) {
    display: none;
  }
`;
