import styled, { css } from 'styled-components';
import FONT from '@/styles/font';
import Image from 'next/image';

export const Wrapper = styled.div<{ $fix: boolean | null }>`
  background-color: #f0f6ff;
  z-index: 100;
  ${({ $fix }) =>
    $fix &&
    css`
      position: sticky;
      top: 0;
    `}
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 33px 200px;

  @media (max-width: 1199px) {
    width: 800px;
    padding: 33px 0;
    margin: auto;
  }

  @media (max-width: 864px) {
    width: 100%;
    padding: 33px 32px;
  }
  @media (max-width: 767px) {
    padding: 18px 32px;
  }
`;

export const Logo = styled(Image)`
  width: 133px;
  height: 24px;

  @media (max-width: 767px) {
    width: 88.67px;
    height: 16px;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const UserImage = styled.img`
  width: 28px;
  height: 28px;
`;

export const UserEmail = styled.div`
  ${FONT.REGULAR_14};
  color: #373740;

  @media (max-width: 767px) {
    display: none;
  }
`;
