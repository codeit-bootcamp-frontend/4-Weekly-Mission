import styled from "styled-components";
import ShareImg from "./ShareImg";
import ShareText from "./ShareText";

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: none;
  background-color: inherit;
`;

function ShareImgButton({ src, alt, text, handleClick }) {
  return (
    <StyledButton onClick={handleClick}>
      <ShareImg src={src} alt={alt} />
      <ShareText>{text}</ShareText>
    </StyledButton>
  );
}

export default ShareImgButton;
