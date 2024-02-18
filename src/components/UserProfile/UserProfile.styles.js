import styled from 'styled-components';

export const UserProfileSection = styled.section`
  display: flex;
  flex-direction: ${props => props.$direction};
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
`;

export const UserProfileImage = styled.img`
  width: ${props => (props.$imageSize ? props.$imageSize : '8rem')};
  border-radius: 50%;
`;
