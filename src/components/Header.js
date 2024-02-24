import { useEffect, useState } from "react";
import LogoImg from "../img/logo.svg";
import HeaderProfile from "./HeaderProfile";
import { getFetchData } from "../utils/getFetchData";
import { Link } from "react-router-dom";

const Header = () => {
  const [userData, setUserData] = useState({
    email: null,
    image_source: null,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await getFetchData(`/api/users/1`);
        setUserData(result.data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
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
        {userData.email ? (
          <HeaderProfile userData={userData} />
        ) : (
          <Link to="/signin" className="headerWrap__Btn" href="./signin.html">
            로그인
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
