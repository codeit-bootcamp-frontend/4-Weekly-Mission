import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  height: 160px;
  background-color: var(--black-color);
  margin-top: 60px;

  @media (max-width: 767px) {
    position: relative;
    padding: 32px 32px 64px 32px;
  }
`;

const Layout = styled.div`
  max-width: 1400px;
  padding: 32px 16px 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
`;

const Text = styled.p`
  color: #676767;
  text-align: center;
  font-family: Acme;
  font-size: 1rem;
  font-weight: 400;

  @media (max-width: 767px) {
    position: absolute;
    bottom: 10px;
  }
`;

const PageLinks = styled.div`
  display: flex;
  gap: 30px;
`;

const LinkStyle = {
  color: "#cfcfcf",

  fontSize: "1rem",
  fontWeight: "400",
  textDecoration: "none",
};

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
`;

function Footer() {
  return (
    <Container>
      <Layout>
        <Text>©codeit - 2023</Text>
        <PageLinks>
          <Link style={LinkStyle} to="#">
            Privacy Policy
          </Link>
          <Link style={LinkStyle} to="#">
            FAQ
          </Link>
        </PageLinks>
        <SocialLinks>
          <Link to="https://www.facebook.com/" target="_blank">
            <img src="Icons/facebook_logo.png" alt="facebook_link" />
          </Link>
          <Link to="https://twitter.com/?lang=ko" target="_blank">
            <img src="Icons/twitter_logo.png" alt="twitter_link" />
          </Link>
          <Link to="https://www.youtube.com/" target="_blank">
            <img src="Icons/youtube_logo.png" alt="youtube_link" />
          </Link>
          <Link to="https://www.instagram.com/" target="_blank">
            <img
              src="Icons/instagram_logo.png"
              alt="instagram_link"
            />
          </Link>
        </SocialLinks>
      </Layout>
    </Container>
  );
}

export default Footer;
