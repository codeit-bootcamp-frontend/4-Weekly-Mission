
import logoImg from "../img/logo.png";
import { profileDataApi } from "../api.js";
import { useEffect, useState } from "react";
import Profile from "./Profile.js";
import Login from "./Login.js";
import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";

const Header = styled.header`
  width: 100vw;
  padding: 3.2rem;
  background-color: #f0f6ff;
  height: 9.3rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const HeaderInner = styled.div`
  max-width: 106rem;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function HeaderBlock() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const getUserProfile = async () => {
      const data = await profileDataApi();
      setUserData(data);
    };
    getUserProfile();
  }, []);

  return (
    <Header>
      <HeaderInner>
        <a href="/">
          <h1>
            <img src={logoImg} alt="Linkbrary 로고 이미지" />
          </h1>
        </a>
        {userData !== undefined ? <Profile userData={userData} /> : <Login />}
      </HeaderInner>
    </Header>
  );
}

export default HeaderBlock;

