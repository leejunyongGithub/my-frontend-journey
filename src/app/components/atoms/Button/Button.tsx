import ButtonWrapper from "./ButtonWrapper";

function Button({ ...props }: any) {
  const { id, onClick, children, className } = props;
  return (
    <ButtonWrapper id={id} onClick={onClick}>
      <ButtonWrapper.Button className={className}>{children}</ButtonWrapper.Button>
    </ButtonWrapper>
  );
}

export default Button;
