import { useState } from "react";
import styled, { css } from "styled-components";
import Button from "./Button";

interface Props {
  color?: string;
  width?: number;
  height?: number;
  onClick?: any;
  toggle?: boolean;
}

function ToggleButton({ width, height, color, onClick, toggle }: Props) {
  const [btnToggle, change] = useState<boolean>(false);

  const handleChangeToggle = () => {
    change((prev) => !prev);
  };

  return (
    <>
      <ToggleBtn
        onClick={onClick ? onClick : handleChangeToggle}
        toggle={toggle ? toggle : btnToggle}
        width={width}
        height={height}
        color={color}
      >
        <Circle toggle={toggle ? toggle : btnToggle} width={width} height={height} />
      </ToggleBtn>
    </>
  );
}

export default ToggleButton;

const ToggleBtn = styled(Button)<{
  toggle: boolean;
  width: string | number;
  height: string | number;
  color: string;
}>`
  width: ${(props) => (props.width ? `${props.width}px` : "130px")};
  height: ${(props) => (props.height ? `${props.height}px` : "50px")};
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (!props.toggle ? "#7d7d7d" : "#a091ff")};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition: all 0.3s ease-in-out;
`;

const Circle = styled.div<{
  toggle: boolean;
  width?: number;
  height?: number;
}>`
  background-color: white;
  width: ${(props) => (props.width ? `${props.width - 28}px` : "38px")};
  height: ${(props) => (props.height ? `${props.height - 8}px` : "38px")};
  border-radius: 50px;
  position: absolute;
  left: 10%;
  transition: all 0.3s ease-in-out;
  ${(props) =>
    props.toggle &&
    css`
      transform: ${props.width ? `translate(${+props?.width - 20}px, 0)` : "translate(80px, 0)"};
      transition: all 0.3s ease-in-out;
    `}
`;
