"use client";
import InputWrapper from "@/components/wrapper/InputWrapper";
import styled, { css } from "styled-components";
import { SlMagnifier, SlClose } from "react-icons/sl";

function SearchInput(props: any) {
  const { value, onChange, clear = () => {}, placeholder="", style = {} } = props;

  return (
    <InputWrapper>
      <StyledInputWrap>
        <div className="img-btn">
          <SlMagnifier size={12} />
        </div>
        <StyledInput style={...style} value={value} placeholder={placeholder} onChange={onChange} />
        <div className="img-btn">{value?.length > 0 && <SlClose onClick={clear} size={15} />}</div>
      </StyledInputWrap>
    </InputWrapper>
  );
}

export default SearchInput;

const StyledInput = styled(InputWrapper.Input)`
  height: 30px;
  width: 100%;
  border: none;
  padding-left: 5px;

  ${({ theme }) => css`
    background: ${theme.colors.content} !important;
    color: ${theme.colors.text};
  `};

  transition: all 0.3s ease-in-out;

  &: focus {
    outline: none;
    outline-width: 0;
  }
`;

const StyledInputWrap = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  border-radius: 0.3rem;

  ${({ theme }) => css`
    background: ${theme.colors.content} !important;
    border: 2px solid ${theme.colors.borderBottom};
  `};

  &: focus {
    outline-width: 1;
  }

  .img-btn {
    width: 30px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  transition: all 0.3s ease-in-out;
`;
