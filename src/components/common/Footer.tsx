import React from "react";
import styled from "styled-components";

import facebookIcon from "../../assets/svg/facebook.svg";
import twitterIcon from "../../assets/svg/twitter.svg";
import youtubeIcon from "../../assets/svg/youtube.svg";
import instagramIcon from "../../assets/svg/instagram.svg";

const Container = styled.footer`
  color: var(--white);
  background: var(--black);
  display: flex;
  height: 160px;
  padding: 32px 104px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  position: absolute;
  bottom: 0;
  width: 100%;
  @media (max-width: 767px) {
    padding: 32px;
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
  }
`;

const Copyright = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: var(--gray2);
  @media (max-width: 767px) {
    grid-column: 1/2;
    grid-row: 2/3;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
  }
`;

const Feat = styled.div`
  display: flex;
  gap: 30px;
  a {
    text-decoration: none;
    color: var(--white);
  }
`;

const SnsLists = styled.ul`
  display: flex;
  gap: 12px;
  @media (max-width: 767px) {
    grid-column: 2/3;
    grid-row: 1/2;
    display: flex;
    justify-content: flex-end;
  }
`;

const SNS_LIST = [
  {
    title: "facebook",
    url: "https://www.facebook.com/?locale=ko_KR",
    icon: facebookIcon,
  },
  {
    title: "twitter",
    url: "https://twitter.com/home",
    icon: twitterIcon,
  },
  {
    title: "youtube",
    url: "https://www.youtube.com/",
    icon: youtubeIcon,
  },
  {
    title: "instagram",
    url: "https://www.instagram.com/",
    icon: instagramIcon,
  },
];

const Footer = () => {
  return (
    <Container>
      <Copyright>©codeit - 2023</Copyright>
      <Feat>
        <a href="/privacy">Privacy Policy</a>
        <a href="/faq">FAQ</a>
      </Feat>

      <SnsLists>
        {SNS_LIST.map((list) => (
          <li key={list.title}>
            <a href={list.url} target="_blank">
              <img src={list.icon} alt={list.title} />
            </a>
          </li>
        ))}
      </SnsLists>
    </Container>
  );
};

export default Footer;
