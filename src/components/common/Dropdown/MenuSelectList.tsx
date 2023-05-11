"use client";
import styled, { css } from "styled-components";
import React, { useState } from "react";
//import Link from "next/link";
import { useRouter } from "next/navigation";
import DropdownWrapper from "./Dropdown";
import { usePathname } from "next/navigation";

function MenuSelectList({ trigger, options }: any) {
  const pathname = decodeURI(decodeURIComponent(usePathname()).replace("-", " "));
  const isCheck = pathname?.substring(6) ? pathname.substring(6) : "";
  const [selected, change] = useState(isCheck);

  const router = useRouter();

  const handleChangeSelected = (item: string) => {
    change(item);
  };

  return (
    <StyledList>
      <DropdownWrapper value={selected} onChange={handleChangeSelected}>
        <StyledTrigger trigger={trigger} />
        <StyledMenu>
          {options?.map((option: any, index: string | number) => (
            <div
              key={option.slug}
              onClick={() =>
                router.push(`/posts/${option.slug}`)
              }
            >
              <StyledItem
                key={`${option.slug}-${index}`}
                value={option.frontMatter.title}
                className={
                  selected === option.frontMatter.title && pathname.includes(option.frontMatter.title) ? "selected" : ""
                }
                onClick={() => handleChangeSelected(option.frontMatter.title)}
              >
                <span>{option.frontMatter.title}</span>
              </StyledItem>
            </div>
          ))}
        </StyledMenu>
      </DropdownWrapper>
    </StyledList>
  );
}

export default React.memo(MenuSelectList);

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
    border-left: 1px solid ${theme.colors.listItem};
  `};
`;

const StyledItem = styled(DropdownWrapper.Item)`
  width: 100%;
  height: 40px !important;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 12px;
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

  &.selected {
    ${({ theme }) => css`
      background: ${theme.colors.listHoverBackground};
      color: ${theme.colors.selectedText} !important;
      border-radius: 0.3rem;
      font-weight: 700 !important;
    `};
  }
`;
