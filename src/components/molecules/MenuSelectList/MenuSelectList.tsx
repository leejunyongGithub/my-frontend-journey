import styled, { css} from "styled-components";
import DropdownWrapper from "../../atoms/Dropdown/Dropdown";
import { useState } from "react";
import { SlDoc } from "react-icons/sl";

function MenuSelectList({ trigger, options }: any) {
  const [selected, change] = useState("");

  const handleChangeSelected = (item: string) => {
    change(item);
  };

  return (
    <StyledList>
      <DropdownWrapper value={selected} onChange={handleChangeSelected}>
        <StyledTrigger trigger={trigger} />
        <StyledMenu>
          {options.map((option: any, index: string | number) => (
            <StyledItem key={index} value={option}>
              <SlDoc />
              <span>{option}</span>
            </StyledItem>
          ))}
        </StyledMenu>
      </DropdownWrapper>
    </StyledList>
  );
}

export default MenuSelectList;

const StyledList = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
`;

const StyledTrigger = styled(DropdownWrapper.Trigger)`
  width: 100% !important;
`;

const StyledMenu = styled(DropdownWrapper.Menu)`
  display: inline-flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
  overflow: hidden;
  padding-left: 8px;
  padding-right: 8px;
`;

const StyledItem = styled(DropdownWrapper.Item)`
  height: 40px !important;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 4px;
  gap: 4px;
  &: hover {
    ${({ theme }) => css`
    background: ${theme.colors.contentHover};
    color: ${theme.colors.color};
  `};
  }
  box-sizing: border-box;
`;
