import React from "react"

import FacebookImage from "assets/images/icon/facebook-icon.svg"
import twitterImage from "assets/images/icon/twitter-icon.svg"
import youtubeImage from "assets/images/icon/youtube-icon.svg"
import instagramImage from "assets/images/icon/instagram-icon.svg"
import FooterSnsItem from "./SnsItem"

const SNS_LIST = [
  { id: 1, image: FacebookImage, href: "https://www.facebook.com/", alt: "페이스북 바로가기" },
  { id: 2, image: twitterImage, href: "https://twitter.com/", alt: "트위터 바로가기" },
  { id: 3, image: youtubeImage, href: "https://www.youtube.com/", alt: "유튜브 바로가기" },
  { id: 4, image: instagramImage, href: "https://www.instagram.com/", alt: "인스타그램 바로가기" },
]

function FooterSnsList() {
  return (
    <ul className="footer-sns">
      {SNS_LIST.map((sns) => (
        <FooterSnsItem key={sns.id} sns={sns} />
      ))}
    </ul>
  )
}

export default FooterSnsList
