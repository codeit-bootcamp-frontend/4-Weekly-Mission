import Linkbrary from "../assets/logo.svg";
import "./NavigationBar.css";
import { getUser } from "../api";
import { useEffect, useState } from "react";

export default function NavigationBar() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function getProFile() {
      try {
        const user = await getUser();
        if (user) {
          setProfile(user);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getProFile();
  }, []);

  return (
    <div className="nav">
      <div className="navFrame">
        <img id="Linkbrary" src={Linkbrary} alt="Linkbrary" />

        {profile ? (
          <div className="account">
            <img
              id="MyProfile"
              src={profile.profileImageSource}
              alt="MyProfile"
            />
            <span id="Email">{profile.email}</span>
          </div>
        ) : (
          <button>로그인</button>
        )}
      </div>
    </div>
  );
}
