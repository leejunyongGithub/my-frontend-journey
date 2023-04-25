import React, { ReactNode, createContext, useContext, useState } from "react";
import styled from "styled-components";

interface DropdownContextValue {
  isOpen: boolean;
  value?: string | undefined;
  handleOpen: () => void;
  handleClose: () => void;
  onChange: (item: string) => void;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

function DropdownWrapper({ value, onChange, children }: any) {
  // Dropdown 에서 하는 역활
  const [isOpen, setIsOpen] = useState<boolean>(value ? true : false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <DropdownContext.Provider value={{ isOpen, value, handleOpen, handleClose, onChange }}>
      {children}
    </DropdownContext.Provider>
  );
}

function Trigger(props: any) {
  const { trigger, style } = props;
  const { isOpen, handleClose, handleOpen } = useDropdownContext();
  return (
    <StyledTrigger onClick={!isOpen ? handleOpen : handleClose} style={isOpen ? { ...style } : {}} {...props}>
      {trigger}
    </StyledTrigger>
  );
}

function Item(props: any) {
  const { children, value: selected, className } = props;
  const { onChange } = useDropdownContext();

  return (
    <StyledItem {...props} onClick={() => onChange(selected)} classname={className}>
      {children}
    </StyledItem>
  );
}

function Menu({ children, className }: any) {
  const { isOpen } = useDropdownContext();
  return (
    <StyledList isOpen={isOpen} className={className}>
      {children}
    </StyledList>
  );
}

DropdownWrapper.Trigger = Trigger;
DropdownWrapper.Menu = Menu;
DropdownWrapper.Item = Item;

export default DropdownWrapper;

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (context === null) {
    throw new Error("useDropdownContext must be used within a DropdownProvider");
  }
  return context;
};

const StyledTrigger = styled.div<{
  isOpen: boolean;
}>`
  width: 200px;
  min-height: 30px;
  user-select: none;
`;

const StyledItem = styled.div<{
  isSelect?: boolean;
}>`
  user-select: none;
  cursor: pointer;
`;

const StyledList = styled.div<{
  isOpen: boolean;
}>`
  height: ${(props) => (props.isOpen ? "100%" : "0px")};
`;
