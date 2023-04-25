import styled, { css } from "styled-components";
import { useState } from "react";
import { SlDoc } from "react-icons/sl";
import Link from "next/link";
import DropdownWrapper from "./Dropdown";

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
          {options?.map((option: any, index: string | number) => (
            <Link key={option.slug} href={`/post/${option.slug}`}>
              <StyledItem key={index}>
                <span>{option.frontMatter.title}</span>
              </StyledItem>
            </Link>
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
  padding-left: 10px;
  padding-right: 8px;
  margin-left: 20px;
  ${({ theme }) => css`
    border-left: 2px solid ${theme.colors.listItem};
  `};
`;

const StyledItem = styled(DropdownWrapper.Item)`
  width: 100%;
  height: 40px !important;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 4px;
  ${({ theme }) => css`
    color: ${theme.colors.listText} !important;
  `};
  gap: 4px;
  &: hover {
    ${({ theme }) => css`
      background: ${theme.colors.listHoverBackground};
      color: ${theme.colors.listHoverText} !important;
      font-weight: 700 !important;
      border-radius: 0.3rem;
    `};
  }
  box-sizing: border-box;
`;
