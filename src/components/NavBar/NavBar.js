import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getUser } from "../../api/api";
import { Profile } from "../Profile/Profile";
import Logo from "../../assets/images/logo.png";
import "./NavBar.css";

export const NavBar = () => {
  const [userData, setUserData] = useState();
  const location = useLocation();

  const isFolderPage = location.pathname === "/folder";
  const className = isFolderPage ? "folderPageNav" : "nav";

  const handleLoadUser = async () => {
    const data = await getUser({ userId: 1 });
    setUserData(data);
  };

  useEffect(() => {
    handleLoadUser();
  }, []);
  return (
    <nav className={className}>
      <div className="nav-content">
        <a href="/">
          <img src={Logo} alt="Linkbrary 로고" />
        </a>
        {userData ? (
          <Profile userData={userData} />
        ) : (
          <a className="login-btn" href="./html/signIn.html">
            로그인
          </a>
        )}
      </div>
    </nav>
  );
};
