import { styled } from 'styled-components';
import filledStar from 'assets/images/fillStar.svg';
import emptystar from 'assets/images/emptyStar.svg';

interface StarButtonProps {
  isActive?: boolean;
}

const StarButton: React.FC<StarButtonProps> = ({ isActive }) => {
  const src = isActive ? filledStar : emptystar;

  return (
    <StyledButton>
      <img src={src} alt="찜 버튼" />
    </StyledButton>
  );
};

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
export default StarButton;
