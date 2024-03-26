import "../../styles/Header.css";

function Header({ user }) {
  return (
    <header className="header-area">
      <div className="header-group">
        <a href="/" className="logo-area">
          <img src="/assets/linkbrary.svg" alt="로고" className="logo-img" />
        </a>
        <button className="btn-group">
          {user ? (
            <>
              <img
                src={user.profileImageSource}
                alt="프로필 사진"
                className="user-profile"
              />
              <span className="user-email">{user.email}</span>
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
