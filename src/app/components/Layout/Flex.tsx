import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children?: ReactNode;
  mode?: string;
}

function Flex(props: Props) {
  const { children, mode = "row" } = props;
  return <StyledFlex mode={mode}>{children}</StyledFlex>;
}

export default Flex;

const StyledFlex = styled.div<{
  mode: string;
}>`
width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.mode ? props.mode : "row")};
`;
