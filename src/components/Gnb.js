import { useEffect, useState } from "react";
import "./Gnb.css";
import { getUserInfo } from "../api/api";
import logoImg from "../assets/svg/logo.svg";
import profileImg from "../assets/png/profile.png";

function Gnb() {
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
    <div className="gnb">
      <div className="gnb_inner">
        <img src={logoImg} alt="logo" />
        {userData.email ? (
          <div className="gnb_profile">
            <img src={profileImg} alt="" />
            <p>{userData.email}</p>
          </div>
        ) : (
          <a href="./" className="gnb_login">
            로그인
          </a>
        )}
      </div>
    </div>
  );
}

export default Gnb;
