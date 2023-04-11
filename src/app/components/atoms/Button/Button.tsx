import ButtonWrapper from "./ButtonWrapper";

function Button({ ...props }: any) {
  const { id, onClick, children } = props;
  return (
    <ButtonWrapper id={id} onClick={onClick}>
      <ButtonWrapper.Button>{children}</ButtonWrapper.Button>
    </ButtonWrapper>
  );
}

export default Button;
