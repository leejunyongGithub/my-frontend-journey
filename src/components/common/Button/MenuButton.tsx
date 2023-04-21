import styled, { css } from "styled-components";
import Button from "./Button";

function MenuButton({ children, icon, height, size, style }: any) {
  return (
    <MenuBtn height={height} size={size}>
      {children}
      {icon}
    </MenuBtn>
  );
}

export default MenuButton;

const MenuBtn = styled(Button)<{
  height: string | number;
  size: string | number;
}>`
  width: 100%;
  height: ${(props) => (props?.height ? `${props.height}px` : "50px")} !important;
  text-align: left;
  padding: 4px;
  box-sizing: border-box;
  border: none;
  background: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  box-sizing: border-box;
  font-size: 20px;
  line-height: 10px;
  justify-content: space-between;
  border-radius: 0.3rem;

  ${({ theme }) => css`
    color: ${theme.colors.color};
  `};
`;
