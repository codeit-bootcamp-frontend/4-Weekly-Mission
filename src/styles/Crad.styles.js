import ReactTimeago from 'react-timeago';
import styled from 'styled-components';

export const CardArticle = styled.article`
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  &:hover {
    background: var(--color-gray-200);
    opacity: 0.8;
  }
`;

export const CardTextBox = styled.div`
  padding: 1rem;
`;

export const CardReactTimeAgo = styled(ReactTimeago)`
  color: var(--color-gray-400);
  font-size: 0.9rem;
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
