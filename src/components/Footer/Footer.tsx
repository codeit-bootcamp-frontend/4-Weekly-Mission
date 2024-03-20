import { Link } from "react-router-dom";
import {
  FACEBOOK_LINK,
  TWITTER_LINK,
  YOUTUBE_LINK,
  INSTAGRAM_LINK,
} from "../../constnats/constant";
import {
  MAIN_FACEBOOK,
  MAIN_TWITTER,
  MAIN_YOUTUBE,
  MAIN_INSTAGRAM,
} from "../../constnats/image";
import * as S from "./FooterStyle";

const Footer = () => {
  const ICON_LIST = [
    {
      url: FACEBOOK_LINK,
      image: MAIN_FACEBOOK,
      alt: "facebook",
    },
    {
      url: TWITTER_LINK,
      image: MAIN_TWITTER,
      alt: "twitter",
    },
    {
      url: YOUTUBE_LINK,
      image: MAIN_YOUTUBE,
      alt: "youtube",
    },
    {
      url: INSTAGRAM_LINK,
      image: MAIN_INSTAGRAM,
      alt: "instagram",
    },
  ];

  return (
    <S.Container>
      <S.Company>©codeit - 2023</S.Company>
      <S.LinkBox>
        <Link to="/privacy">PrivacyPolicy</Link>
        <Link to="/faq">FAQ</Link>
      </S.LinkBox>
      <S.SocialBox>
        {ICON_LIST &&
          ICON_LIST.map((icon) => (
            <a href={icon.url} key={icon.alt} target="_blank" rel="noreferrer">
              <S.Icon src={icon.image} alt={icon.alt} />
            </a>
          ))}
      </S.SocialBox>
    </S.Container>
  );
};

export default Footer;
