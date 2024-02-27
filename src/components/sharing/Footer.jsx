import { Link } from "react-router-dom";
import styled from "styled-components";
import IconButton from "./ui-button/IconButton";

const FooterContainer = styled.footer`
  background-color: var(--color-black);

  padding: 24px 104px 60px 104px;

  display: flex;
  justify-content: space-between;

  @media (min-width: 375px) and (max-width: 767px) {
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    padding: 32px;
  }
`;

const CopyrightText = styled.div`
  color: #676767;

  @media (min-width: 375px) and (max-width: 767px) {
    display: flex;
    justify-content: flex-start;

    grid-row: 2;
    margin-top: 24px;
  }
`;

const CSText = styled.div`
  color: #cfcfcf;

  display: flex;
  gap: 24px;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 10px;
  @media (min-width: 375px) and (max-width: 767px) {
    justify-content: flex-end;
  }
`;

const SmallIcon = styled(IconButton)`
  width: 18px;
  height: 18px;
`;

const RegularIcon = styled(IconButton)`
  width: 20px;
  height: 20px;
`;
const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightText>©codeit - 2023</CopyrightText>
      <CSText>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/faq">FAQ</Link>
      </CSText>
      <IconContainer>
        <SmallIcon
          imageSrc="/icons/facebook_logo.png"
          alt="facebook logo"
          URL="https://www.facebook.com"
        />
        <RegularIcon
          imageSrc="/icons/twitter_logo.png"
          alt="twitter logo"
          URL="https://www.twitter.com"
        />
        <RegularIcon
          imageSrc="/icons/youtube_logo.png"
          alt="youtube logo"
          URL="https://www.youtube.com"
        />
        <RegularIcon
          imageSrc="/icons/instagram_logo.png"
          alt="instagram logo"
          URL="https://www.instagram.com"
        />
      </IconContainer>
    </FooterContainer>
  );
};

export default Footer;
