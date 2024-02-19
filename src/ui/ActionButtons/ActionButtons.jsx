import styled from "styled-components";
import Buttons from "./Buttons";

const StyledActionButtons = styled.div`
  display: flex;
  justify-content: space-between;

  color: #000;

  font-family: Pretendard;
  font-size: 29px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.0125rem;
`;

export default function ActionButtons() {
  return (
    <StyledActionButtons>
      <p>유용한 글</p>
      <Buttons />
    </StyledActionButtons>
  );
}
