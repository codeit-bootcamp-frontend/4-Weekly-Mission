import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 10rem;
  padding: 2rem 6.5rem;
  background: #000000;
`;

export const FooterCopyright = styled.p`
  flex: 0.4;
  color: #676767;
  font-weight: 400;
  font-size: 1rem;
`;

export const FooterLinkSection = styled.section`
  display: flex;
  flex: 0.6;
  justify-content: space-between;
`;

export const FooterSiteMapNav = styled.nav`
  display: flex;
  gap: 2.25rem;
  align-items: flex-start;
`;

export const FooterSiteMapLink = styled.a`
  color: #cfcfcf;
  font-weight: 400;
  font-size: 1rem;
  text-decoration-line: none;
`;

export const FooterSnsMapNav = styled.nav`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
`;

export const FooterSnsMapImage = styled.img`
  width: 1.5rem;
`;
