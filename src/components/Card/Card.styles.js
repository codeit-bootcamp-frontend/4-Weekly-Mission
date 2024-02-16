import ReactTimeago from 'react-timeago';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

export const CardArticle = styled.article`
  position: relative;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  &:hover {
    outline: 0.2rem solid var(--color-primary);
    background: var(--color-gray-200);
    opacity: 0.8;
  }
`;

export const CardTextBox = styled.div`
  padding: 1.4rem;
`;

export const CardStarIcon = styled(FaStar)`
  stroke: var(--color-white);
  stroke-width: 2rem;
  color: rgba(0, 0, 0, 0.2);
  font-size: 2.4rem;
  position: absolute;
  top: 5%;
  right: 5%;

  &:hover {
    color: var(--color-primary);
  }
`;

export const CardTimeBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardReactTimeAgo = styled(ReactTimeago)`
  color: var(--color-gray-400);
  font-size: 0.9rem;
`;

export const CardDotIcon = styled(BsThreeDots)`
  font-size: 1.6rem;
`;

export const CardTitle = styled.p`
  margin: 0.6rem 0;
`;

export const CardDate = styled.p`
  font-size: 0.9rem;
`;

export const CardImageBox = styled.div`
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;

export const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 12rem;
  &:hover {
    scale: 1.3;
  }
`;
