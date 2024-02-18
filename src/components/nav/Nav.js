import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./Nav.css";

function Nav() {
  const [profileData, setProfileData] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/sample/user"
      );
      if (response.ok) {
        const userProfileData = await response.json();
        setProfileData(userProfileData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <nav>
      <div class="gnb">
        <a href="/">
          <img src={logo} alt="홈으로이동" />
        </a>
        {profileData ? (
          <a href="#" className="loginProfile">
            <img src={profileData.profileImageSource} alt="프로필 이미지" />
            {profileData.email}
          </a>
        ) : (
          <a className="cta-login" href="signin.html">
            로그인
          </a>
        )}
      </div>
    </nav>
  );
}

export default Nav;
