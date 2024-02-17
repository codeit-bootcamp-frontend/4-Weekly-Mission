import styled from "styled-components";
import { useState, useCallback, useEffect } from "react";
import logo from "../../assets/Linkbrary.png";
import profile from "../../assets/icons/icon_myprofile.png";
import { getUserInfo } from "../../api";

import "../../style/common.css";

function HeaderElement({ positionval }) {
  const [user, setUser] = useState([]);
  const [profileUrl, setProfileUrl] = useState("");

  const handleLoad = useCallback(async () => {
    let results;
    try {
      results = await getUserInfo();
    } catch (error) {
      console.log(error);
    }
    if (!results) return;
    const { email, profileImageSource } = results;
    setUser(email);
    setProfileUrl(profileImageSource);
  }, []);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <Header positionval={positionval}>
      <img src={logo} alt="logo" />
      <div className="myProfile" status="user">
        {user ? (
          <div id="myProfileName">
            <div id="myProfile-back_img">
              <img
                src={profileUrl ? profileUrl : profile}
                id="myProfile-img"
                alt="myProfile-img"
              ></img>
            </div>
            <span id="myEmail">{user}</span>
          </div>
        ) : (
          <a href="/signup.html">
            <button id="LoginBtn" type="button">
              로그인
            </button>
          </a>
        )}
      </div>
    </Header>
  );
}

const Header = styled.div`
  background-color: var(--Grey_100);
  padding: 20px 200px;
  position: ${({ positionval }) => (positionval ? positionval : "sticky")};
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default HeaderElement;
