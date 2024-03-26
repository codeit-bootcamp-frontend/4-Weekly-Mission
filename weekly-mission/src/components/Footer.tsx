import facebookIcon from "assests/img/facebook.png";
import twitterIcon from "assests/img/twitter.png";
import youtubeIcon from "assests/img/youtube.png";
import instaIcon from "assests/img/insta.png";
import * as S from "./Footer.styled";
import { useEffect, useRef } from "react";

const aboutSocialInformation = [
  {
    id: 1,
    title: "facebook icon",
    iconImg: facebookIcon,
    url: "https://www.facebook.com/",
  },
  {
    id: 2,
    title: "twitter icon",
    iconImg: twitterIcon,
    url: "https://twitter.com/",
  },
  {
    id: 3,
    title: "youtube icon",
    iconImg: youtubeIcon,
    url: "https://www.youtube.com/",
  },
  {
    id: 4,
    title: "instagram icon",
    iconImg: instaIcon,
    url: "https://www.instagram.com/",
  },
];
interface Props {
  setVisible?: any;
}
const Footer: React.FC<Props> = ({ setVisible }) => {
  const ref = useRef<any>();
  const path = window.location.pathname;
  useEffect(() => {
    if (path === "/folder") {
      const io = new IntersectionObserver(
        (entries, observe) => {
          entries.forEach((entry) => {
            setVisible(entry.isIntersecting);
          });
        },
        {
          threshold: 0.2,
        }
      );
      io.observe(ref.current);
    }
  }, []);
  return (
    <S.Footer ref={ref}>
      <S.FooterInner>
        <S.CodeitText>©codeit - 2023</S.CodeitText>
        <S.QuestionTab>
          <S.OtherLink href="/">Privacy Policy</S.OtherLink>
          <S.OtherLink href="/">FAQ</S.OtherLink>
        </S.QuestionTab>
        <S.Nav>
          <S.SocialTab>
            {aboutSocialInformation.map((social) => (
              <li key={social.id}>
                <a href={social.url} target="_blank" rel="noreferrer">
                  <img src={social.iconImg} alt={social.title} />
                </a>
              </li>
            ))}
          </S.SocialTab>
        </S.Nav>
      </S.FooterInner>
    </S.Footer>
  );
};

export default Footer;
