import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 7.5rem;
  height: 160px;
  padding: 32px 104px 64px 104px;
  background: var(--black-color);

  @media (max-width: 767px) {
    position: relative;
  }

  @media (max-width: 564px) {
    padding: 32px 20px 64px;
  }
`;

export const FooterLeft = styled.div`
  color: #676767;
  text-align: center;
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 767px) {
    position: absolute;
    bottom: 2rem;
  }
`;

export const FooterCenter = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
`;

export const FooterRight = styled(FooterCenter)`
  gap: 12px;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: #cfcfcf;
  font-size: 16px;
  font-weight: 400;
`;

export const FooterSocialLink = styled.a`
  display: flex;
`;

export const FooterIcon = styled.img`
  width: auto;
  height: 20px;
`;
