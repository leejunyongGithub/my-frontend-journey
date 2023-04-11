import styled from "styled-components";
import { useDropdownContext } from "./Dropdown";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

function Trigger({ children }: Props) {
  const { isOpen, handleClose, handleOpen } = useDropdownContext();
  return <StyledTrigger onClick={!isOpen ? handleOpen : handleClose}>{children}</StyledTrigger>;
}

export default Trigger;

const StyledTrigger = styled.div``;
