import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'utils/constants/routes';
import styled from 'styled-components';

const currentYear = new Date().getFullYear();
const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Copy>@codeit - {currentYear}</Copy>
      <FooterLink>
        <Link to={routes.privacy}>
          <FooterText>Privacy Policy</FooterText>
        </Link>
        <Link to={routes.faq}>
          <FooterText>FAQ</FooterText>
        </Link>
      </FooterLink>
      <FooterIcon>
        <a
          href="https://facebook.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img src="/images/icons/facebook.png" alt="facebook icon" />
        </a>
        <a
          href="https://twitter.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img src="/images/icons/twitter.png" alt="twitter icon" />
        </a>
        <a
          href="https://youtube.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img src="/images/icons/youtube.png" alt="youtube icon" />
        </a>
        <a
          href="https://instagram.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img src="/images/icons/instagram.png" alt="instagram icon" />
        </a>
      </FooterIcon>
    </StyledFooter>
  );
};
const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 13rem;
  padding: 3.2rem 10.4rem 6.4rem 10.4rem;
  background-color: ${props => props.theme.black};
  margin-top: 6rem;
  font-family: 'Abel', sans-serif;
  color: #676767;
  font-weight: 400;
  font-size: 1.6rem;

  @media (min-width: 375px) and (max-width: 767px) {
    padding-top: 4rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'a b'
      'c d';
    padding: 3.2rem 3.2rem 6.4rem 3.2rem;
    align-items: center;
    align-self: stretch;
    background: var(--the-julge-black, #111322);
    position: relative;
  }
`;
const FooterText = styled.div`
  color: #cfcfcf;
`;
const FooterLink = styled.div`
  display: flex;
  gap: 3rem;

  @media (min-width: 375px) and (max-width: 767px) {
    display: flex;
    grid-area: a;
    align-items: center;
    justify-content: flex-start;
    font-family: Abel;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const FooterIcon = styled.div`
  display: flex;
  gap: 1.2rem;

  @media (min-width: 375px) and (max-width: 767px) {
    display: flex;
    grid-area: b;
    justify-content: flex-end;
  }
`;
const Copy = styled.div`
  @media (min-width: 375px) and (max-width: 767px) {
    position: absolute;
    bottom: 3rem;
    left: 3.2rem;
  }
`;
export default Footer;
