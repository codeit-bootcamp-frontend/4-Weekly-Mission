import { Link } from "react-router-dom";
import styled from "styled-components";
import IconButton from "./ui-button/IconButton";
import * as Icons from "./Icons";

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
  @media (min-width: 375px) and (max-width: 767px) {
    justify-content: flex-end;
  }
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
        <Link to="https://www.facebook.com">
          <IconButton>
            <Icons.Facebook />
          </IconButton>
        </Link>
        <Link to="https://www.twitter.com">
          <IconButton>
            <Icons.Twitter />
          </IconButton>
        </Link>
        <Link to="https://www.youtube.com">
          <IconButton>
            <Icons.Youtube />
          </IconButton>
        </Link>
        <Link to="https://www.instagram.com">
          <IconButton>
            <Icons.Instagram />
          </IconButton>
        </Link>
      </IconContainer>
    </FooterContainer>
  );
};

export default Footer;
