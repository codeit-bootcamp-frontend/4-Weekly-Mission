import React, { useEffect, useState } from "react";
import { PROFILE_DATA } from "../../apis/api";
import "./Header.css";

const Header = () => {
  const [profileData, setProfileData] = useState(null);

  const GetProfileData = async () => {
    const response = await PROFILE_DATA();
    if (response === null) {
      setProfileData(null);
    } else {
      const data = response.data;
      setProfileData({ ...data });
    }
  };

  useEffect(() => GetProfileData(), []);

  return (
    <header>
      <nav>
        <div className="logo">Linkbrary</div>
        {/* 프로필 데이터가 없는 경우 “로그인” 버튼,데이터 있으면 사진과 메일주소가 나옴 */}
        {profileData ? (
          <div className="profile-wrapper">
            <div className="img-box">
              <img
                width={"28px"}
                height={"28px"}
                src={profileData.profileImageSource}
                alt="프로필이미지"
              />
            </div>
            <span className="mobile-none">{profileData.email}</span>
          </div>
        ) : (
          <button>로그인</button>
        )}
      </nav>
      <div className="centerItems">
        <div>
          {profileData && (
            <div>
              <div>
                <img
                  width={"60px"}
                  height={"60px"}
                  src={profileData.profileImageSource}
                  alt="프로필이미지"
                />
              </div>
              <div>@{profileData.name}</div>
            </div>
          )}
          <div>⭐️ 즐겨찾기</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
