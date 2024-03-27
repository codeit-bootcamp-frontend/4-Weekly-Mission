import { useState, useEffect } from "react";
import { UserType } from "../../../interfaces/shared.interface";
import { fetchData } from "./fetchData";
import "./UserSection.css";

const UserSection = () => {
  const [userData, setUserData] = useState<null | UserType>(null);

  useEffect(() => {
    fetchData().then((data) => setUserData(data));
  }, []);

  if (!userData) {
    return <div>로딩 중입니다</div>;
  }

  return (
    <div className="folder-section">
      <img
        className="avatar"
        src={userData.folder.owner.profileImageSource}
        alt="프로필"
      />
      <span className="user">@{userData.folder.owner.name}</span>
      <h2 className="folder-name">{userData.folder.name}</h2>
    </div>
  );
};

export default UserSection;
