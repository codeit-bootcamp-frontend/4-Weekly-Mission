import { useEffect, useState } from "react";
import { getUser } from "./Api";
import logo from "../assets/logo.svg";
import "./styles/Gnb.css";

function Gnb() {
  const [userData, setUserData] = useState({ email: "", img: "" });

  const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const user = await getUser();
        setUserData({ email: user.email, img: user.profileImageSource });
        setIsUserDataLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);

  return (
    <div className="Gnb">
      <img src={logo} alt="logo" />
      <div className="profileBox">
        {isUserDataLoaded ? (
          <>
            <img
              className="profileImg"
              src={userData.img}
              alt="프로필 이미지"
            />
            <p className="profileEmail">{userData.email}</p>
          </>
        ) : (
          <button className="gnbBtn">로그인</button>
        )}
      </div>
    </div>
  );
}

export default Gnb;
