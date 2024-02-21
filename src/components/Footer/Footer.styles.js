import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 10rem;
  padding: 2rem 6.5rem;
  background: #000;

  @media screen and (width < 768px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

export const FooterCopyright = styled.p`
  flex: 0.4;
  font-size: 1rem;
  font-weight: 400;
  color: #676767;

  @media screen and (width < 768px) {
    order: 2;
    margin-right: auto;
  }
`;

export const FooterLinkSection = styled.section`
  display: flex;
  flex: 0.6;
  justify-content: space-between;

  @media screen and (width < 768px) {
    order: 1;
    width: 100%;
    margin: 0 6.5rem;
  }
`;

export const FooterSiteMapNav = styled.nav`
  display: flex;
  gap: 2.25rem;
  align-items: flex-start;

  @media screen and (width < 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const FooterSiteMapLink = styled.a`
  font-size: 1rem;
  font-weight: 400;
  color: #cfcfcf;
  text-decoration-line: none;
`;

export const FooterSnsMapNav = styled.nav`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;

  @media screen and (width < 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const FooterSnsMapImage = styled.img`
  width: 1.5rem;
`;
