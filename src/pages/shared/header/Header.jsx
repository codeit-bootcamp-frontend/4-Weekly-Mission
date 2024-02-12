import "./Header.css";

function Header({userFolder}) {

  return (
    <header>
      <div className="hero-header">
        <h1 className="owner">
          <img
            className="owner-img"
            src={userFolder?.folder.owner.profileImageSource}
            alt="소유자 프로필 이미지"
          />
          {userFolder?.folder.owner.name}
        </h1>
        <div className="folder-name">
          {userFolder?.folder.name}
        </div>
      </div>
    </header>
  );
}

export default Header;
