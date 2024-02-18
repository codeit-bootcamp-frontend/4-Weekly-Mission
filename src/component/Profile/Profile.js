import { useEffect, useState } from "react";
import { getProfileData } from "../../apis/api";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(undefined);

  const getData = async () => {
    try {
      const data = await getProfileData();
      setUser(data.data[0]);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {user ? (
        <div className="Profile">
          <img src={user.image_source} alt="사용자 프로필 이미지" />
          <span>{user.email}</span>
        </div>
      ) : (
        <div>
          <a className="loginBtn" href="#">
            로그인
          </a>
        </div>
      )}
    </>
  );
};

export default Profile;
