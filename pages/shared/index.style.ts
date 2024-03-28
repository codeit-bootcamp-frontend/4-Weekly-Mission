import styled from 'styled-components';
import COLOR from '@/styles/color';

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 1060px;
  justify-content: center;
  @media (max-width: 1199px) {
    width: 704px;
  }
  @media (max-width: 767px) {
    width: 325px;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 19px;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1199px) {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

export const SearchText = styled.p`
  color: ${COLOR.Gray3};
  font-size: 32px;
  font-weight: 700;
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

export const TopicText = styled.span`
  color: #000000;
  word-wrap: break-word;
`;
