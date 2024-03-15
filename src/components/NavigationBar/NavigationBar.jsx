import { ROUTE } from "util/constant";
import { Profile } from "./Profile";
import { LOGO_IMAGE, TEXT } from "./constant";
import "./NavigationBar.css";
import { useLocation } from "react-router-dom";
import { Cta } from "./Cta/Cta";

export const NavigationBar = ({ userInfo }) => {
  const Location = useLocation();
  const LocationPath = Location.pathname;
  const { email, imageSource } = userInfo || {};

  const className =
    LocationPath === "/folder" ? "NavigationBar-static" : "NavigationBar";

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
              <span className="NavigationBar-signin">{TEXT.LOGIN}</span>
            </Cta>
          </a>
        )}
      </div>
    </header>
  );
};
