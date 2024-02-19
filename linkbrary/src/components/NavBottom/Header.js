import "../../styles/Header.css";
import logoImgSrc from "../../assets/linkbrary.svg";
import { getAPI } from "../../APIUtil";
import useGetJson from "../useGetJson";

function Header() {
  const user = useGetJson(getAPI(`/users/1`));
  const { email, profileImageSource } = user;

  return (
    <header className="header-area">
      <div className="header-group">
        <a href="/" className="logo-area">
          <img src={logoImgSrc} alt="로고" className="logo-img" />
        </a>
        <button className="btn-group">
          {user ? (
            <>
              <img
                src={profileImageSource}
                alt="프로필 사진"
                className="user-profile"
              />
              <span className="user-email">{email}</span>
            </>
          ) : (
            <a className="btn signin" href="/signin.html">
              로그인
            </a>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
