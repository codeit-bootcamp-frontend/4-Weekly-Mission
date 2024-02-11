import * as S from "./Header.style";

const Header = ({ user, folderName }) => {
  return (
    <header>
      <S.Container>
        <div className="user-box">
          <img
            className="user-profile"
            src={user?.profileImageSource}
            alt="프로필 이미지"
          />
          <p className="user-name">@{user?.name}</p>
        </div>
        <p className="menu">{folderName}</p>
      </S.Container>
    </header>
  );
};

export default Header;
