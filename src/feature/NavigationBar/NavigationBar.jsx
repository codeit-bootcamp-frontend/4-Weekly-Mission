import { ROUTE } from "util/constant";
import { Cta } from "../../ui/Cta";
import { Profile } from "../../ui/Profile";
import { LOGO_IMAGE, TEXT } from "./constant";
import "./NavigationBar.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const NavigationBar = ({ userEmail, userImgSource }) => {
  const [className, setClassName] = useState("NavigationBar");
  const Location = useLocation();
  const LocationPath = Location.pathname;

  const handleClassName = () => {
    LocationPath === "/shared" || LocationPath === "/folder"
      ? setClassName("NavigationBar-static")
      : setClassName("NavigationBar");
  };

  useEffect(() => {
    handleClassName();
  }, []);

  return (
    <header className={className}>
      <div className="NavigationBar-items">
        <a href={ROUTE.랜딩}>
          <img
            className="NavigationBar-logo"
            src={LOGO_IMAGE}
            alt="Linkbrary 서비스 로고"
          />
        </a>
        {userEmail && userImgSource ? (
          <Profile userEmail={userEmail} userImgSource={userImgSource} />
        ) : (
          <a href={ROUTE.로그인}>
            <Cta isSmall>
              <span className="NavigationBar-signin">{TEXT.login}</span>
            </Cta>
          </a>
        )}
      </div>
    </header>
  );
};
