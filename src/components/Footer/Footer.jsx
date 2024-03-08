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
  return (
    <S.Container>
      <S.Company>©codeit - 2023</S.Company>
      <S.LinkBox>
        <Link to="/privacy">PrivacyPolicy</Link>
        <Link to="/faq">FAQ</Link>
      </S.LinkBox>
      <S.SocialBox>
        <a href={FACEBOOK_LINK}>
          <S.Icon src={MAIN_FACEBOOK} />
        </a>
        <a href={TWITTER_LINK}>
          <S.Icon src={MAIN_TWITTER} />
        </a>
        <a href={YOUTUBE_LINK}>
          <S.Icon src={MAIN_YOUTUBE} />
        </a>
        <a href={INSTAGRAM_LINK}>
          <S.Icon src={MAIN_INSTAGRAM} />
        </a>
      </S.SocialBox>
    </S.Container>
  );
};

export default Footer;
