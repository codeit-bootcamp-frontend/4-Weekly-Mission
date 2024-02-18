import { useEffect, useState } from "react";
import LogoImg from "../img/logo.svg";
import NavProfile from "./NavProfile";
import { getFetchData } from "../utils/getFetchData";
import { Link } from "react-router-dom";

const Nav = () => {
  const [userImg, setUserImg] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const whoAmI = await getFetchData(`/api/sample/user`);
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
        <Link to="/" className="headerWrap__logo" href="./">
          <img
            className="headerWrap__img"
            src={LogoImg}
            alt="LinkbraryLogoImg"
          />
        </Link>
        {userEmail ? (
          <NavProfile userImg={userImg} userEmail={userEmail} />
        ) : (
          <Link to="/signin" className="headerWrap__Btn" href="./signin.html">
            로그인
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Nav;
