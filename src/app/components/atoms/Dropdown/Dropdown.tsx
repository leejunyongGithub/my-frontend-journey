import React, { ReactNode, createContext, useContext, useEffect, useState, useRef } from "react";
import Trigger from "./Trigger";
import Menu from "./Menu";
import Item from "./Item";

interface DropdownContextValue {
  isOpen: boolean;
  selected?: string | undefined;
  handleOpen: () => void;
  handleClose: () => void;
  handleSelect: (item: string) => void;
}

interface Props {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  children?: ReactNode;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

export function Dropdown({ value, children, onChange }: Props) {
  // Dropdown 에서 하는 역활
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(value);

  // Context를 생성 해주는건 하위 컴포넌트들에게 기능을 부여함 props 드릴링으로 가능하지만 가독성이 떨어짐..

  const renderRef = useRef<boolean>(true);

  useEffect(() => {
    if (!renderRef.current) {
      onChange(selected);
    }
    renderRef.current = false;
  }, [selected]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSelect = (item: string) => {
    handleClose();
    setSelected(item);
  };

  return (
    <DropdownContext.Provider value={{ isOpen, selected, handleOpen, handleClose, handleSelect }}>
      {children}
    </DropdownContext.Provider>
  );
}

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
Dropdown.Item = Item;

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (context === null) {
    throw new Error("useDropdownContext must be used within a DropdownProvider");
  }
  return context;
};
