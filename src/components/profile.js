import { useEffect, useState } from "react";
import "../style/profile.css";
import fetchData from "../api/FetchData";
function Profile() {
  const [user, setUser] = useState({
    userEmail: null,
    userImg: null,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await fetchData("sample/user");
        if (data) {
          setUser({
            userEmail: data.email,
            userImg: data.profileImageSource,
          });
        }
      } catch (e) {
        console.error(e);
        alert("error", e);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div>
      {user == null ? (
        <button>로그인</button>
      ) : (
        <div className="profile-container">
          <img className="userImg" src={user.userImg} alt="userImg" />
          <p className="userEmail">{user.userEmail}</p>
        </div>
      )}
    </div>
  );
}
export default Profile;
