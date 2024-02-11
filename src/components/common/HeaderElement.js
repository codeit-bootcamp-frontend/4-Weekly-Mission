import { useState, useCallback, useEffect } from "react";
import logo from "../../assets/Linkbrary.png";
import profile from "../../assets/icons/icon_myprofile.png";
import { getUserInfo } from "../../api";

import "../../style/common.css";

function HeaderElement() {
  const [user, setUser] = useState([]);
  const [profileUrl, setProfileUrl] = useState("");

  const HandleLoad = useCallback(async () => {
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
    HandleLoad();
  }, [HandleLoad]);

  return (
    <header>
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
    </header>
  );
}

export default HeaderElement;
