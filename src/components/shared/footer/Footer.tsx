import React from "react"

import FacebookImage from "assets/images/icon/facebook-icon.svg"
import twitterImage from "assets/images/icon/twitter-icon.svg"
import youtubeImage from "assets/images/icon/youtube-icon.svg"
import instagramImage from "assets/images/icon/instagram-icon.svg"

import * as S from "./Footer.style"

const NAV_LIST = [
  { id: 1, href: "/privacy", title: "Privacy Policy" },
  { id: 2, href: "/faq", title: "FAQ" },
]

const SNS_LIST = [
  { id: 1, image: FacebookImage, href: "https://www.facebook.com/", alt: "페이스북 바로가기" },
  { id: 2, image: twitterImage, href: "https://twitter.com/", alt: "트위터 바로가기" },
  { id: 3, image: youtubeImage, href: "https://www.youtube.com/", alt: "유튜브 바로가기" },
  { id: 4, image: instagramImage, href: "https://www.instagram.com/", alt: "인스타그램 바로가기" },
]

function Footer() {
  return (
    <S.Footer>
      <S.FooterWrapper>
        <S.Copyright>©codeit - {new Date().getFullYear()}</S.Copyright>

        <S.Nav>
          {NAV_LIST.map((item) => (
            <li key={item.id}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </S.Nav>

        <S.Sns>
          {SNS_LIST.map((sns) => (
            <li key={sns.id}>
              <a href={sns.href} target="_blank" rel="noopener noreferrer">
                <img src={sns.image} alt={sns.alt} />
              </a>
            </li>
          ))}
        </S.Sns>
      </S.FooterWrapper>
    </S.Footer>
  )
}

export default Footer
