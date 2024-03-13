import React from 'react';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import youtube from '../images/youtube.svg';
import insta from '../images/insta.svg';
import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  background-color: var(--black);
  margin-top: 4rem;

  @media (min-width: 768px) {
    margin-top: 6rem;
  }
`;

const FooterSection = styled.div`
  display: grid;
  width: 100%;
  height: 16rem;
  justify-content: space-between;
  padding: 3.2rem;
  grid-template:
    'footer_center sns'
    '. .' 1fr
    'copyright .';

  @media (min-width: 768px) {
    display: flex;
    grid-template: 'copyright footer_center sns';
    max-width: 192rem;
    padding: 3.2rem 10.4rem 6.4rem;
    margin: 0 auto;
  }
`;
const Copyright = styled.div`
  grid-area: copyright;
  color: #676767;
  font-family: Arial;
  font-size: 1.6rem;
  font-weight: 400;
`;

const FooterCenter = styled.div`
  grid-area: footer_center;
  display: flex;
  padding-right: 1.8rem;
  align-items: flex-start;
  gap: 3rem;
`;

const FooterLink = styled.a`
  color: #cfcfcf;
  font-family: Arial;
  font-size: 1.6rem;
  font-weight: 400;
`;

const Sns = styled.div`
  grid-area: sns;
  display: flex;
  column-gap: 1.2rem;
  height: 2rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <Copyright>©codeit - 2023</Copyright>
        <FooterCenter>
          <FooterLink href="/privacy.html">Privacy Policy</FooterLink>
          <FooterLink href="/faq.html">FAQ</FooterLink>
        </FooterCenter>
        <Sns>
          <a href="https://www.facebook.com" target="_blank">
            <img src={facebook} alt="Go to Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank">
            <img src={twitter} alt="Go to Twitter" />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <img src={youtube} alt="Go to Youtube" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src={insta} alt="Go to Insta" />
          </a>
        </Sns>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
