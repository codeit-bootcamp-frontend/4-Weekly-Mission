import { getProfile } from "../api";
import useFetch from "./hooks/useFetch";
import Loading from "./Loading";
import logo from "../assets/Linkbrary.svg";

export default function NavBar() {
  const profileApi = useFetch(() => getProfile());

  return (
    <div>
      <img src={logo} alt="로고" />
      {profileApi.status === "idle" && <button>로그인</button>}
      {profileApi.status === "fetching" && <Loading size="small" />}
      {profileApi.status === "success" && (
        <div>
          <img
            src={profileApi.data?.profileImageSource}
            alt="사용자의 프로필 사진"
          />
          <p>{profileApi.data?.email}</p>
        </div>
      )}
      {profileApi.status === "error" && <p>{profileApi.error.message}</p>}
    </div>
  );
}
