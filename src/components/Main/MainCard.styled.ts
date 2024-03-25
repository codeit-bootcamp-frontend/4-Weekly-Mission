import styled from 'styled-components';

interface CardProps {
  $index: number;
}

export const Card = styled.section<CardProps>`
  padding: 3.12rem 0;
  margin: 0 auto;
  width: 62.375rem;
  height: 38.75rem;
  display: flex;
  gap: 9.8125rem;
  justify-content: space-between;
  align-items: center;
  padding: ${({ $index }) => ($index === 1 ? '7.5rem 0 3.12rem' : '')};
  @media (max-width: 1199px) {
    padding: 3.12rem 0;
    height: auto;
    gap: 3.1875rem;
    width: 43.62498rem;
    padding: ${({ $index }) => ($index === 1 ? '5rem 0 3.12rem' : '')};
  }
  @media (max-width: 767px) {
    padding: 2.5rem 0;
    flex-direction: column;
    gap: 0;
    height: auto;
    width: 20.3125rem;
  }
`;
export const CardTitleBox = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  width: 18.1875rem;
  gap: 0.625rem;
  height: auto;
  order: ${({ $index }) => ($index % 2 === 1 ? `0` : `3`)};
  @media (max-width: 767px) {
    order: 0;
  }
`;

export const CardTitle = styled.h2`
  font-size: 3rem;
  letter-spacing: -0.01875rem;
  font-weight: 700;
  width: 16.3rem;
  line-height: 120%;
  height: 7.125rem;
  @media (max-width: 767px) {
    width: auto;
    font-size: 1.5rem;
    width: 20.3125rem;
    height: auto;
  }
`;

export const CardTextEffect = styled.span`
  color: transparent;
`;

export const CardText = styled.p`
  color: var(--subText);
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 500;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const CardImgBox = styled.figure`
  margin: 0;
  @media (max-width: 767px) {
    margin: 1.25rem 0 1rem;
  }
`;

export const CardImg = styled.img`
  width: 34.375rem;
  height: auto;
  @media (max-width: 1199px) {
    width: 24.06248rem;
  }
  @media (max-width: 767px) {
    width: 20.3125rem;
  }
`;

export const CardMobileText = styled.p`
  display: none;
  @media (max-width: 767px) {
    display: block;
    width: 20.3125rem;
    font-size: 0.9375rem;
  }
`;
