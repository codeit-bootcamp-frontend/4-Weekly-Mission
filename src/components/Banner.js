import { useEffect, useState } from "react";
import "./Banner.css";
import { getUserInfo } from "../api/api";
import avatarImg from "../assets/png/avatar.png";

function Banner() {
  const [userData, setItems] = useState([]);

  useEffect(() => {
    const handleLoad = async () => {
      try {
        const result = await getUserInfo();
        setItems(result);
      } catch (error) {
        console.error(error);

        return;
      }
    };

    handleLoad();
  }, []);

  return (
    <div className="banner">
      <div className="banner_contents">
        <div className="banner_inner">
          <div className="banner_user">
            <div className="banner_user_avatar">
              <img src={avatarImg} alt="" />
            </div>
            <div className="banner_user_name">@{userData.name}</div>
          </div>
          <div className="banner_title">⭐️ 즐겨찾기</div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
