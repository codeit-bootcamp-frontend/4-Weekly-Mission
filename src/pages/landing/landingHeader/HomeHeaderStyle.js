import styled from 'styled-components';

export const LandingHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 40px;
  background: var(--Linkbrary-bg);
`;
export const LandingTitle = styled.div`
  margin-top: 70px;
  text-align: center;

  font-family: Pretendard;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px;
  color: var(--black);

  @media screen and (max-width: 1199px) {
    width: 767px;
    height: auto;
  }

  @media screen and (max-width: 767px) {
    font-size: 32px;
    line-height: 42px;
  }
`;
export const LandingHeaderImage = styled.img`
  width: 1200px;
  height: 590px;

  @media screen and (max-width: 1199px) {
    width: 698px;
    height: 343px;
  }

  @media (max-width: 767px) {
    width: 302.792px;
    height: 178.712px;
  }
`;
export const TextGradientHeader = styled.span`
  background: var(--Headear-Title-blue-to-pink);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const LandingHeaderText = styled.div`
  font-family: Pretendard;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px;
  color: var(--black);
`;
