import { useState } from "react";
import InputWrapper from "./InputWrapper";
import styled from "styled-components";

function LabelInput() {
  const [name, change] = useState("");
  const handleChangeName = (event: any) => {
    change(event.target.value);
  };
  return (
    <StyledLabelWrap id="name" value={name} type="text" onChange={handleChangeName}>
      <InputWrapper.Label>텍스트를 입력</InputWrapper.Label>
      <InputWrapper.Input />
    </StyledLabelWrap>
  );
}

export default LabelInput;

const StyledLabelWrap = styled(InputWrapper)`
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  box-sizing: border-box;
  padding: 3px;
`;
