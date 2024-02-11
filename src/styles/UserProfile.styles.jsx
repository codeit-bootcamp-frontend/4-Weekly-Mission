import styled from 'styled-components';

const UserProfile = ({ title, image, direction }) => {
  return (
    <StyledSection $direction={direction} $imageSize={image.size}>
      <img src={image.URL || '/default-user.png'} alt='user' />
      <p>{title}</p>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: ${props => props.$direction};
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  img {
    width: ${props => (props.$imageSize ? props.$imageSize : '8rem')};
    border-radius: 50%;
  }
`;

export default UserProfile;
