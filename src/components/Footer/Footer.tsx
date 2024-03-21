import React from 'react';
import FacebookIcon from '../../assets/footer-facebook.svg';
import TwitterIcon from '../../assets/footer-twitter.svg';
import YoutubeIcon from '../../assets/footer-youtube.svg';
import InstargramIcon from '../../assets/footer-instargram.svg';
import * as Styled from './Footer.styled';

interface FooterLinkType {
  url: string;
  icon: string;
  text: string;
}

const FOOTER_LINK_LIST: FooterLinkType[] = [
  {
    url: 'https://facebook.com/?locale=ko_KR',
    icon: FacebookIcon,
    text: '페이스북'
  },
  {
    url: 'https://twitter.com/?lang=ko',
    icon: TwitterIcon,
    text: '트위터'
  },
  {
    url: 'https://www.youtube.com',
    icon: YoutubeIcon,
    text: '유튜브'
  },
  {
    url: 'https://www.instagram.com',
    icon: InstargramIcon,
    text: '인스타그램'
  }
];

function Footer() {
  return (
    <Styled.Footer>
      <Styled.FooterLogo to="/">©codeit - 2023</Styled.FooterLogo>
      <Styled.FooterNav>
        <li>
          <Styled.FooterNavText to="/privacy">Privacy Policy</Styled.FooterNavText>
        </li>
        <li>
          <Styled.FooterNavText to="/faq">FAQ</Styled.FooterNavText>
        </li>
      </Styled.FooterNav>
      <Styled.FooterLink>
        {FOOTER_LINK_LIST.map((list: FooterLinkType, idx: number) => {
          const { url, icon, text } = list;
          return (
            <li key={idx}>
              <a href={url} target="_blank" rel="noreferrer">
                <img src={icon} alt={`${text} 아이콘`} />
              </a>
            </li>
          );
        })}
      </Styled.FooterLink>
    </Styled.Footer>
  );
}

export default Footer;
