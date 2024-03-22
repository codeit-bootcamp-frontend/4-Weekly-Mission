import { Link } from "react-router-dom";
import Icon from "components/common/Icon/Icon";
import { FOOTER_ICON_LIST } from "constnats/list";
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
        {FOOTER_ICON_LIST &&
          FOOTER_ICON_LIST.map((icon) => (
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
