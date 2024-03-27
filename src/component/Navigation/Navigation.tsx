import { useState, useEffect } from "react";
import {
  navigationProps,
  userType,
} from "../../interfaces/navigation.interface";
import "./Navigation.css";
import classNames from "classnames";
import linkbrary from "../../images/linkbrary.svg";
import profileImg from "../../images/myprofile.svg";
import { apiURL, fetchData } from "./fetchData";

const Navigation = ({ position = "sticky", url = apiURL }: navigationProps) => {
  const [user, setUser] = useState<null | userType>(null);

  useEffect(() => {
    fetchData().then((data) => setUser(data));
  }, [url]);

  const navigationClass = classNames("navigation", {
    static: position === "static",
    sticky: position === "sticky",
  });

  return (
    <nav className={navigationClass}>
      <div className="wrap">
        <a href="/">
          <img src={linkbrary} alt="링크브러리 로고" />
        </a>
        {user ? (
          <div className="my-profile">
            <img
              className="profile-img"
              src={profileImg}
              alt="나의 프로필 이미지"
            />
            <span className="profile-email">{user.email}</span>
          </div>
        ) : (
          <a href="/">
            <span className="signin">로그인</span>
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
