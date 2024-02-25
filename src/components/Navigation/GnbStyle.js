import styled from 'styled-components';

export const Gnb = styled.nav`
  position: ${({ $pathname }) =>
    $pathname === '/folder' ? 'static' : 'sticky'};
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 200px;
  z-index: 3;
  background: var(--Linkbrary-bg);

  @media screen and (max-width: 1199px) {
    padding: 20px 32px;
  }

  @media screen and (max-width: 783px) {
    max-width: 783px;
  }

  @media screen and (max-width: 767px) {
    padding: 13px 32px;
  }
`;

export const Logo = styled.img`
  width: 133px;
  height: 24px;

  @media screen and (max-width: 767px) {
    width: 88.667px;
    height: 16px;
  }
`;

export const LoggedInUser = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0;
  gap: 6px;
`;

export const LoggedInUserImage = styled.img`
  border-radius: 50%;
  width: 28px;
  height: 28px;
`;

export const LoggedInUserId = styled.div`
  color: var(--Linkbrary-gray100);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
