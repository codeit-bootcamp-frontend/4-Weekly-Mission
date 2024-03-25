import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Footer = styled.footer`
  background-color: var(--footerBgColor);
  display: flex;
  justify-content: space-between;
  padding: 2rem 6.5rem 4rem;
  margin-top: 3.75rem;
  height: 10rem;
  font-size: 1rem;

  @media screen and (max-width: 767px) {
    margin-top: 2.5rem;
    padding: 2rem 2rem 4rem;
    position: relative;
  }
`;

export const FooterLogo = styled(Link)`
  color: var(--footerText1);
  @media screen and (max-width: 767px) {
    position: absolute;
    bottom: 2rem;
  }
`;

export const FooterNav = styled.ul`
  display: flex;
  gap: 1.88rem;
`;

export const FooterNavText = styled(Link)`
  color: var(--footerText2);
`;

export const FooterLink = styled.ul`
  display: flex;
  gap: 0.75rem;
`;
