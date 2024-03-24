import { Link } from "react-router-dom";
import Icon from "components/common/Icon/Icon";
import {
  FACEBOOK_LINK,
  TWITTER_LINK,
  YOUTUBE_LINK,
  INSTAGRAM_LINK,
} from "constants/url";
import {
  MAIN_FACEBOOK,
  MAIN_TWITTER,
  MAIN_YOUTUBE,
  MAIN_INSTAGRAM,
} from "constants/image";
import * as S from "./FooterStyle";

const Footer = () => {
  const FOOTER_ICON_LIST = [
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
        {FOOTER_ICON_LIST.map((icon) => (
          <Icon
            key={icon.alt}
            url={icon.url}
            image={icon.image}
            alt={icon.alt}
          />
        ))}
      </S.SocialBox>
    </S.Container>
  );
};

export default Footer;
