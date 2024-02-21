import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import logo from "../../assets/images/logo.png";
import "./Header.css";

function Header() {
  const [visible, setVisible] = useState(true);
  const { email, profileImageSource } = useUser();
  const { pathname } = useLocation();
  const pageName = pathname.split("/")[1];

  useEffect(() => {
    const handleVisible = () => {
      if (window.innerWidth <= 768) {
        setVisible(false);
      }

      if (window.innerWidth > 768) {
        setVisible(true);
      }
    };

    handleVisible();
    window.addEventListener("resize", handleVisible);

    return () => {
      window.removeEventListener("resize", handleVisible);
    };
  }, []);

  return (
    <header
      className={`${
        pageName === "folder" ? "Header-exception" : "Header"
      } flex items-center`}
    >
      <div className="Header-help-left"></div>
      <img className="Header-logo" src={logo} alt="Linkbrary" />
      <div className="Header-help-center"></div>
      <div className="Header-profile flex items-center">
        {profileImageSource && (
          <img
            className="Header-profile-img"
            src={profileImageSource}
            alt="profileImage"
          />
        )}
        {visible && <span>{email}</span>}
      </div>
      <div className="Header-help-right"></div>
    </header>
  );
}

export default Header;
