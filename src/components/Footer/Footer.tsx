import { ROUTE } from "util/constant";
import * as S from "./FooterStyled";
import { TEXT } from "./constant";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Youtube from "../../assets/youtube.svg";

export const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterItems>
        <S.FooterCopyright>{TEXT.codeit}</S.FooterCopyright>
        <S.FooterLinks>
          <S.FooterLink href={ROUTE.개인정보처리방침}>
            {TEXT.privacyPolicy}
          </S.FooterLink>
          <S.FooterLink href={ROUTE.FAQ}>{TEXT.faq}</S.FooterLink>
        </S.FooterLinks>
        <S.FooterSNS>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.FooterSnsIcon
              src={Facebook}
              alt="facebook 홈페이지로 연결된 facebook 로고"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.FooterSnsIcon
              src={Twitter}
              alt="twitter 홈페이지로 연결된 twitter 로고"
            />
          </a>
          <a
            href="../../assets/youtube.svg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.FooterSnsIcon
              src={Youtube}
              alt="youtube 홈페이지로 연결된 youtube 로고"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.FooterSnsIcon
              src={Instagram}
              alt="instagram 홈페이지로 연결된 instagram 로고"
            />
          </a>
        </S.FooterSNS>
      </S.FooterItems>
    </S.FooterContainer>
  );
};
