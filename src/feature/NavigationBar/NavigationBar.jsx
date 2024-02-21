import { ROUTE } from "util/constant";
import { Cta } from "../../ui/Cta";
import { Profile } from "../../ui/Profile";
import { LOGO_IMAGE, TEXT } from "./constant";
import "./NavigationBar.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const NavigationBar = ({ userInfo }) => {
  const [className, setClassName] = useState("NavigationBar");
  const Location = useLocation();
  const LocationPath = Location.pathname;
  const { email, imageSource } = userInfo || {};

  const handleClassName = () => {
    LocationPath !== "/folder"
      ? setClassName("NavigationBar")
      : setClassName("NavigationBar-static");
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
        {email && imageSource ? (
          <Profile userEmail={email} userImgSource={imageSource} />
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
