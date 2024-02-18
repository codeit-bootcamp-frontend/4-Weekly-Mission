import ReactTimeago from 'react-timeago';

import { BsThreeDots } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

import ToggleButton from '../common/ToggleButton/ToggleButton';

export const CardArticle = styled.article`
  position: relative;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(0 0 0 / 30%);

  &:hover {
    outline: 0.2rem solid var(--color-primary);
  }
`;

export const CardTextBox = styled.div`
  position: relative;
  padding: 1.2rem;
`;

export const CardStarIcon = styled(FaStar)`
  position: absolute;
  top: 5%;
  right: 5%;
  font-size: 2.4rem;
  color: rgb(0 0 0 / 20%);
  stroke: var(--color-white);
  stroke-width: 2rem;

  &:hover {
    color: var(--color-primary);
  }
`;

export const CardTimeBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const CardReactTimeAgo = styled(ReactTimeago)`
  font-size: 0.9rem;
  color: var(--color-gray-400);
`;

export const CardToggleBUtton = styled(ToggleButton)`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
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
  overflow: hidden;
  border-radius: 10px 10px 0 0;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;

  &:hover {
    scale: 1.3;
  }
`;
