import { ReactNode, createContext, useContext } from "react";
import styled from "styled-components";

interface ButtonContextValue {
  id: string;
  variant: string;
  onClick: any;
  children: ReactNode;
  icon: string;
}

const ButtonContext = createContext<ButtonContextValue | null>(null);

function ButtonWrapper(props: any) {
  const { children, onClick, variant, id, icon } = props;
  const contextValue = { id, variant, onClick, children, icon };
  return <ButtonContext.Provider value={contextValue}>{children}</ButtonContext.Provider>;
}

function Button({ ...props }) {
  const { children } = props;
  const { id, onClick, variant = "default", icon } = useButtonContext();

  return (
    <StyledButton id={id} onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
}

function Icon({ ...props }) {
  const { icon } = useButtonContext();

  return <>icon</>;
}

ButtonWrapper.Button = Button;

export default ButtonWrapper;

const useButtonContext = () => {
  const context = useContext(ButtonContext);
  if (context === null) {
    throw new Error("useButtonContext must be used within a ButtonProvider");
  }
  return context;
};

const StyledButton = styled.button<{
  variant: string;
}>``;
