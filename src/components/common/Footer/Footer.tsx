import React from "react";
import * as S from "./FooterStyled.tsx";

const SNS = [
  {
    name: "facebook",
    href: "https://www.facebook.com/",
    src: "/images/facebook.svg",
    alt: "facebook 홈페이지로 연결된 facebook 로고",
  },
  {
    name: "twitter",
    href: "https://twitter.com/",
    src: "/images/twitter.svg",
    alt: "twitter 홈페이지로 연결된 twitter 로고",
  },
  {
    name: "youtube",
    href: "https://www.youtube.com/",
    src: "/images/youtube.svg",
    alt: "youtube 홈페이지로 연결된 youtube 로고",
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/",
    src: "/images/instagram.svg",
    alt: "instagram 홈페이지로 연결된 instagram 로고",
  },
];
function Footer() {
  return (
    <S.Footer>
      <S.FooterItem>
        <S.Copyright>codeit-2023</S.Copyright>
        <S.Links>
          <S.Text href="/privacy.html">Privacy Policy</S.Text>
          <S.Text href="/faq.html">FAQ</S.Text>
        </S.Links>
        <S.SNS>
          {SNS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.src} alt={link.alt} />
            </a>
          ))}
        </S.SNS>
      </S.FooterItem>
    </S.Footer>
  );
}

export default Footer;
