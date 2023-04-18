import { createContext, useContext } from "react";
import styled from "styled-components";

interface InputContextValue {
  id: string;
  value: string | number;
  type: string;
  onChange: any;
}

const InputContext = createContext<InputContextValue | null>(null);

function InputWrapper(props: any) {
  const { children, onChange, value, type, id, className } = props;
  const contextValue = { id, value, type, onChange };
  return (
    <InputContext.Provider value={contextValue}>
      <Wrapper className={className}>{children}</Wrapper>
    </InputContext.Provider>
  );
}

function Input({ ...props }) {
  const { id, value, type, onChange } = useInputContext();
  return <input id={id} value={value} type={type} onChange={onChange} {...props} />;
}

function Label({ children, ...props }: any) {
  const { id } = useInputContext();
  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  );
}

InputWrapper.Input = Input;
InputWrapper.Label = Label;

export default InputWrapper;

const useInputContext = () => {
  const context = useContext(InputContext);
  if (context === null) {
    throw new Error("useInputContext must be used within a InputProvider");
  }
  return context;
};

const Wrapper = styled.div``;
