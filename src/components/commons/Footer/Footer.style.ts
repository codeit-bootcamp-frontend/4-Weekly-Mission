import FONT from '@/styles/font';
import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 60px 0 0;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 32px; 104px;
  height: 160px;
  background-color: #111322;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 60px 0;
  }
`;

export const CopyLightWrapper = styled.div`
  ${FONT.REGULAR_16};
  color: #676767;

  @media (max-width: 767px) {
    order: 3;
  }
`;

export const PFWrapper = styled.div`
  display: flex;
  gap: 30px;
  width: 181.11px;
  @media (max-width: 767px) {
    order: 1;
  }
`;

export const PolicyWrapper = styled.div`
  width: 100px;
  ${FONT.REGULAR_16};
  color: #676767;
`;

export const FAQWrapper = styled.div`
  width: 33px;
  ${FONT.REGULAR_16};
  color: #676767;
`;

export const SNSWrapper = styled.div`
  display: flex;
  gap: 12px;
  @media (max-width: 767px) {
    order: 2;
  }
`;

export const SNSIcon = styled(Image)`
  width: 20px;
  height: 20px;
`;
