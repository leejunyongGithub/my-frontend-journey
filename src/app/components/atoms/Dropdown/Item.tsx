import styled from "styled-components";
import { useDropdownContext } from "./Dropdown";

interface Props {
  value: string;
}

function Item({ value }: Props) {
  const { handleSelect, selected } = useDropdownContext();

  // selected: 이미 선택된 값
  // value: 선택할 값
  // value 와 selected를 비교해서 선택된 항목 표시
  return <StyledItem isSelect={value === selected} onClick={() => handleSelect(value)}></StyledItem>;
}

export default Item;

const StyledItem = styled.div<{
  isSelect?: boolean;
}>``;
