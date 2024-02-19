import { styled } from 'styled-components';
import kebeb from 'assets/images/kebab.svg';

const KebabButton = () => {
  return (
    <StyledButton>
      <img src={kebeb} alt="더보기 버튼" />
    </StyledButton>
  );
};

export default KebabButton;

const StyledButton = styled.button`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 3;
`;
