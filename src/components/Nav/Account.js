import { useEffect, useState } from "react";
import { getUser } from "../../api";

const Account = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await getUser();
        setUserData(userData);
      } catch (error) {
        console.error("유저 데이터 불러오기 실패:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {userData ? (
        <>
          <img src={userData.profileImageSource} alt="프로필 이미지" />
          <p>{userData.name}</p>
        </>
      ) : (
        <button>로그인</button>
      )}
    </div>
  );
};

export default Account;
