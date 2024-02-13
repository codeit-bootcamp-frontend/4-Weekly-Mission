import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { getUser } from "./Api";
import "./styles/Gnb.css";

function Gnb() {
  const [userData, setUserData] = useState({ email: "", img: "" });

  const [state, setState] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const body = await getUser();
        setUserData({ email: body.email, img: body.profileImageSource });
        setState(true);
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
        {state ? (
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
