import { useEffect, useState } from "react";
import { getProfileData } from "./api";

const Profile = () => {
  const [user, setUser] = useState({});

  const getData = async () => {
    const data = await getProfileData();
    setUser(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Profile">
      <img src={user.profileImageSource} alt="사용자 프로필 이미지" />
      <span>{user.email}</span>
    </div>
  );
};

export default Profile;
