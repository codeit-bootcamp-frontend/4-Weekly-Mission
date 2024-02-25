import React from "react";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  background: var(--gray-color-e);
  width: 100%;
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1060px;
  width: calc(100% - 400px);
  padding: 20px 0;
  margin: 0 auto;

  @media (max-width: 1124px) {
    max-width: 750px;
    width: 90%;
    padding: 20px 32px;
  }

  @media (max-width: 767px) {
    max-width: 370px;
    width: 100%;
    padding: 20px 16px;
  }
`;

const LoginButton = styled.button`
  width: 128px;
  padding: 16px 20px;
  background: var(
    --primary-color,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  border-radius: 0.4rem;
  cursor: pointer;
  color: var(--Grey-Light, #f5f5f5);
  font-size: 18px;
  font-weight: 600;
  border: none;

  @media (max-width: 767px) {
    width: 80px;
    padding: 10px 16px;
    font-size: 14px;
  }
`;

function Header({ user }) {
  return (
    <Container>
      <Layout>
        <Link to="/">
          <img
            src="Icons/logo.svg"
            type="image/svg+xml"
            alt="Header_logo"
          />
        </Link>
        {user ? (
          <Profile user={user} />
        ) : (
          <LoginButton>로그인</LoginButton>
        )}
      </Layout>
    </Container>
  );
}

export default Header;
