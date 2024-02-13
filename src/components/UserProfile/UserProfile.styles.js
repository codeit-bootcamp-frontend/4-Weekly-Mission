import styled from 'styled-components';

export const UserProfileSection = styled.section`
  display: flex;
  flex-direction: ${props => props.$direction};
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`;

export const UserProfileImage = styled.img`
  width: ${props => (props.$imageSize ? props.$imageSize : '8rem')};
  border-radius: 50%;
`;
