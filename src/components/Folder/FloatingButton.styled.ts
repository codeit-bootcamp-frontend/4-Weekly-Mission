import styled from 'styled-components';

export const FloatingButton = styled.div`
  border-radius: 1.25rem;
  background: var(--Linkbrary-primary-color);
  padding: 0.7rem 1.5rem 0.5rem;
  display: none;
  position: fixed;
  left: 50%;
  bottom: 120px;
  transform: translateX(-50%);
  border: none;
  outline: none;

  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

export const FloatingButtonText = styled.p`
  color: var(--Linkbrary-gray10);
  font-weight: 500;
  letter-spacing: -0.01875rem;
`;

export const FloatingButtonImg = styled.img`
  padding-bottom: 0.2rem;
`;
