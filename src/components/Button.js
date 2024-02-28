import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: ${(props) => (props.width ? props.width : '128px')};
  padding: ${(props) => (props.size === 'fixed' ? '10px 6px' : '16px 20px')};
  cursor: pointer;
  border: none;
  border-radius: 8px;
  background: ${(props) =>
    props.$isDelete
      ? 'var(--Linkbrary-red)'
      : 'var(--gra-purpleblue-to-skyblue,)'};

  color: var(--Grey-Light);
  font-family: Pretendard;
  font-size: ${(props) => (props.$font === 'large' ? '18px' : '14px')};
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (max-width: 767px) {
    width: ${(props) => (props.$mobileWidth ? props.$mobileWidth : '80px')};
    padding: ${(props) => (props.size === 'fixed' ? '16px 20px' : '10px 6px')};
    font-size: ${(props) => (props.$font === 'large' ? '14px' : '14px')};
`;

const BasedButton = ({
  children,
  size,
  font,
  width,
  onClick,
  mobileWidth,
  isDelete = false,
}) => {
  return (
    <Button
      size={size}
      width={width}
      $isDelete={isDelete}
      $onClick={onClick}
      $font={font}
      $mobileWidth={mobileWidth}
    >
      {children}
    </Button>
  );
};

export default BasedButton;
