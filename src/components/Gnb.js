import logo from "../assets/logo.svg";
import "./styles/Gnb.css";

function Gnb({ userData, isUserDataLoaded }) {
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
