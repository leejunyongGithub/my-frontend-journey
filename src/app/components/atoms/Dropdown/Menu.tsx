import { ReactNode } from "react";
import styled from "styled-components";
import { useDropdownContext } from "./Dropdown";

interface Props {
  children?: ReactNode;
}

function Menu({ children }: Props) {
  const { isOpen } = useDropdownContext();

  if (!isOpen) {
    return null;
  }
  return (
    <StyledMenu>
      <StyledList>{children}</StyledList>
    </StyledMenu>
  );
}

export default Menu;

const StyledMenu = styled.div``;

const StyledList = styled.div``;
