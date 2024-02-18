import { useEffect, useState } from "react";
import { getProfile } from "../api";
import useAsync from "./hooks/useAsync";

export default function NavBar() {
  const [profile, setProfile] = useState({});
  const [loadingProfileError, getProfileAsync] = useAsync(getProfile);

  const loardProfile = async () => {
    const result = await getProfileAsync();
    setProfile(result);
  };

  useEffect(() => {
    loardProfile();
  }, []);

  return (
    <div>
      <h1>linkbrary</h1>
      {loadingProfileError ? (
        <button>로그인</button>
      ) : (
        <div>
          <img src={profile?.profileImageSource} alt="사용자의 프로필 사진" />
          <p>{profile?.email}</p>
        </div>
      )}
    </div>
  );
}
