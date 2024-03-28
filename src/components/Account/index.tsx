import { useEffect, useState } from "react";
import { User } from "../../types/interface";
import { getUser } from "../../api";
import "./index.css";

const Account = () => {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await getUser();
        setUserData(userData);
      } catch (error) {
        console.error("유저 데이터 불러오기 실패: ", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="account">
      {userData ? (
        <>
          <img src={userData.profileImageSource} alt="프로필 이미지" />
          <p>{userData.email}</p>
        </>
      ) : (
        <button className="login">로그인</button>
      )}
    </div>
  );
};

export default Account;
