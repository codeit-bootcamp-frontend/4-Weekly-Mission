import { useEffect, useState } from "react";
import LogoImg from "../img/logo.svg";
import "../landing.css";
import Profile from "./Profile";
import { getUserData } from "./api";

const Header = () => {
  const [userImg, setUserImg] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const whoAmI = await getUserData(`/api/sample/user`);
        setUserEmail(whoAmI.email);
        setUserImg(whoAmI.profileImageSource);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmail();
  }, []);

  return (
    <header className="headerWrap">
      <nav className="headerWrap__navWrap">
        <a className="headerWrap__logo" href="./">
          <img
            className="headerWrap__img"
            src={LogoImg}
            alt="LinkbraryLogoImg"
          />
        </a>
        {userEmail ? (
          <Profile userImg={userImg} userEmail={userEmail} />
        ) : (
          <a className="headerWrap__Btn" href="./signin.html">
            로그인
          </a>
        )}
      </nav>
    </header>
  );
};

export default Header;
