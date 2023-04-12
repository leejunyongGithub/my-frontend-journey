import { recoilStateOption } from "@/app/recoilState/recoilStateOption";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Button from "../../atoms/button/Button";
import { SlFire, SlArrowRight, SlArrowLeft } from "react-icons/sl";

function Header() {
  const [option, setOption] = useRecoilState(recoilStateOption);
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

  return (
    <StyledHeader>
      <HeaderButton onClick={handleChangeMenuBar}>
        {expanded ? <SlArrowLeft size={20} /> : <SlArrowRight size={20} />}
      </HeaderButton>
      <HeaderButton onClick={handleChangeSubBar}>
        {menu === "post" && <>{subExpanded ? <SlFire size={25} /> : <SlFire size={25} color="red" />}</>}
      </HeaderButton>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  height: 50px;
  background: #ededed;
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
