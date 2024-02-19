import styled, { css } from 'styled-components';

export const StyledCardImage = styled.div`
  width: 100%;
  min-height: 19.2rem;
  height: 19.2rem;
  border-radius: 1.5rem 1.5rem 0 0;
  background-position: center;
  background-size: 100%;
  transition: background-size 0.3s ease-in-out;

  @media (min-width: 768px) {
    min-height: 20rem;
    height: 20rem;
  }

  ${({ isZoomedIn }) =>
    isZoomedIn &&
    css`
      background-size: 130%;
    `}
`;

export const StarButton = styled.button`
  font-size: 20px;
  margin-right: 10px;
  margin-top: 10px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`;

export const KebabButton = styled.button`
  font-size: 20px;
  margin-right: 10px;
  margin-top: 10px;
  background: none;
  border: none;
  color: #000;
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
`;