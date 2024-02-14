import "./Header.css";

function Header({userFolder}) {

  return (
    <header>
      <div className="hero-header">
        <h1 className="owner">
          <img
            className="owner-img"
            src={userFolder?.owner.profileImageSource}
            alt="소유자 프로필 이미지"
          />
          {userFolder?.owner.name}
        </h1>
        <div className="folder-name">
          {userFolder?.name}
        </div>
      </div>
    </header>
  );
}

export default Header;
