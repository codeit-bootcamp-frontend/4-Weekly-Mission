import { useEffect, useState } from "react";
import "../style/profile.css";
function Profile() {
  const [user, setUser] = useState(null);
  const [userImg, setUserImg] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/user"
        );
        const data = await response.json();
        if (response.ok) {
          setUser(data.email);
          setUserImg(data.profileImageSource);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {user == null ? (
        <button>로그인</button>
      ) : (
        <div className="profile-container">
          <img className="userImg" src={userImg} alt="userImg" />
          <p className="userEmail">{user}</p>
        </div>
      )}
    </div>
  );
}
export default Profile;
