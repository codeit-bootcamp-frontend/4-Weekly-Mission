import { useEffect, useState } from "react";
import { getProfileData } from "../../apis/api";
import "./Profile.css";
import LoadingProfile from "./LoadingProfile";

const Profile = () => {
  const [user, setUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      setIsLoading(true);
      const data = await getProfileData();
      setUser(data.data[0]);
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingProfile />
      ) : user ? (
        <div className="Profile">
          <img src={user.image_source} alt="사용자 프로필 이미지" />
          <span>{user.email}</span>
        </div>
      ) : (
        <div>
          <span className="loginBtn">로그인</span>
        </div>
      )}
    </>
  );
};

export default Profile;
