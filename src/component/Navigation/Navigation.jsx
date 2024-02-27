import { useState, useEffect } from "react";
import "./Navigation.css";
import linkbrary from "../../images/linkbrary.svg";
import profileImg from "../../images/myprofile.svg";
import { apiURL, fetchData } from "./fetchData";

const Navigation = ({ position = "sticky", url = apiURL }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchData(url).then((data) => setUser(data));
  }, [url]);

  const positionClass = position === "static" ? "static" : "sticky";

  return (
    <nav className={`navigation ${positionClass}`}>
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
