import "react-tooltip/dist/react-tooltip.css";
import { recoilStateOption } from "@/app/recoilState/recoilStateOption";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { FcHome, FcDocument } from "react-icons/fc";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialInstagram } from "react-icons/sl";
import { Tooltip } from "react-tooltip";

function MenuBar() {
  const [option, setOption] = useRecoilState(recoilStateOption);
  const { expanded, menu: selected, subExpanded } = option;

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

  return (
    <StyledMenuBar expanded={expanded}>
      <BarHeader
        expanded={expanded}
        className={selected === "logo" ? "selected-item" : ""}
        onClick={() => handleChangeSide("logo")}
      >
        <HeaderLogo id="main" />
      </BarHeader>
      <BarList>
        <BarListItem
          id="home"
          className={selected === "home" ? "selected-item" : ""}
          onClick={() => handleChangeSide("home")}
        >
          <FcHome size={50} />
        </BarListItem>
        <BarListItem
          id="content"
          className={selected === "post" ? "selected-item" : ""}
          onClick={() => handleChangeSide("post")}
        >
          <FcDocument size={50} />
        </BarListItem>
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
      <Tooltip variant="info" anchorId="home" place="right" content="홈" />
      <Tooltip variant="info" anchorId="main" place="right" content="저는 고양이를 좋아하는 개발자입니다." />
      <Tooltip variant="info" anchorId="content" place="right" content="고양이와 함께 작성한 글" />
      <Tooltip variant="info" anchorId="github" place="right" content="Github" />
      <Tooltip variant="info" anchorId="instagram" place="right" content="키위와 포도의 일상" />
    </StyledMenuBar>
  );
}

export default MenuBar;

const StyledMenuBar = styled.div<{
  expanded: boolean;
}>`
  position: relative;
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
