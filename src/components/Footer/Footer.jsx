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
        <S.Link>PrivacyPolicy</S.Link>
        <S.Link>FAQ</S.Link>
      </S.LinkBox>
      <S.SocialBox>
        <S.Icon src={MAIN_FACEBOOK} />
        <S.Icon src={MAIN_TWITTER} />
        <S.Icon src={MAIN_YOUTUBE} />
        <S.Icon src={MAIN_INSTAGRAM} />
      </S.SocialBox>
    </S.Container>
  );
};

export default Footer;
