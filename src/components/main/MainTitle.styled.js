import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  background-color: var(--mainBgColor);
  height: auto;
  overflow: hidden;
`;

export const MainBox = styled.div`
  margin: 4.38rem auto 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  @media (max-width: 1199px) {
    margin: 2.5rem auto 0;
  }
  @media (max-width: 767px) {
    gap: 1.5rem;
    margin: 1.75rem 2rem 0;
  }
`;

export const MainTitle = styled.h1`
  background: var(--mainText) text;
  font-size: 4rem;
  font-weight: 700;
  line-height: 5rem;
  width: 44.9rem;
  margin: 0 auto;
  @media (max-width: 767px) {
    font-size: 2rem;
    line-height: 2.625rem;
    width: 15rem;
  }
`;

export const MainTitleEffect = styled.span`
  color: transparent;
`;

export const MainLoginButton = styled(Link)`
  width: 21.875rem;
  margin: 0 auto;
  border-radius: 0.5rem;
  padding: 1rem 1.25rem;
  background: var(--gra-purpleblue-to-skyblue);
  color: var(--Grey-Light, #f5f5f5);
  font-size: 1.125rem;
  font-weight: 600;
  @media (max-width: 767px) {
    width: 12.5rem;
  }
`;

export const MainBackImage = styled.img`
  width: 69.875rem;
  height: auto;
  margin: 0 auto;
  @media (max-width: 1199px) {
    width: 40.64394rem;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;

export const LineBreak = styled.br`
  display: block;
`;

export const MobileLineBreak = styled.br`
  display: none;
  @media (max-width: 1199px) {
    display: block;
  }
`;
