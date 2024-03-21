
import facebookIcon from "../img/facebook.png";
import twitterIcon from "../img/twitter.png";
import youtubeIcon from "../img/youtube.png";
import instaIcon from "../img/insta.png";
import styled from "styled-components";

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

const Footer = styled.footer`
  padding-top: 6rem;
`;

const FooterInner = styled.div`
  height: 16rem;
  background-color: #111322;
  padding: 3.2rem 10% 6.4rem;
  display: flex;
  justify-content: space-between;
  color: #676767;
  font-size: 1.6rem;
  font-weight: 400;

  @media (max-width: 790px) {
    & {
      flex-wrap: wrap;
    }
    & > p {
      order: 3;
      margin-top: 6rem;
    }

    & > nav {
      order: 2;
      float: left;
      width: 50%;
    }
  }
`;

const QuestionTab = styled.div`
  a {
    color: inherit;
  }
  a:first-child {
    margin-right: 3rem;
  }
  @media (max-width: 790px) {
    & {
      order: 1;
      float: right;
      width: 50%;
    }
  }
`;

const SocialTab = styled.ul`
  display: flex;
  gap: 1.2rem;
  @media (max-width: 790px) {
    & {
      justify-content: flex-end;
    }
  }
`;

function FooterBlock() {
  return (
    <Footer>
      <FooterInner>
        <p>©codeit - 2023</p>
        <QuestionTab>
          <a href="/">Privacy Policy</a>
          <a href="/">FAQ</a>
        </QuestionTab>
        <nav>
          <SocialTab>
            {aboutSocialInformation.map((social) => (
              <li key={social.id}>
                <a href={social.url} target="_blank">
                  <img src={social.iconImg} alt={social.title} />
                </a>
              </li>
            ))}
          </SocialTab>
        </nav>
      </FooterInner>
    </Footer>
  );
}

export default FooterBlock;

