import { useState, useEffect } from "react";

interface ProfileData {
  profileImageSource?: string;
  email: string;
}

function Profile() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/user")
      .then((response) => {
        if (!response.ok) {
          throw new Error("네트워크 응답이 올바르지 않습니다.");
        }
        return response.json();
      })
      .then((data) => {
        setProfileData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!profileData) {
    return <button>로그인</button>;
  }

  return (
    <div className="profile-info">
      <img className="profile-img" src={profileData.profileImageSource} alt="profile_img" />
      <p className="profile-email">{profileData.email}</p>
    </div>
  );
}

export default Profile;
