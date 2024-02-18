import * as S from './Header.style';

function Header({ userFolder }) {
  return (
    <header>
      <S.SharedHeaderContainer>
        <h1 className="owner">
          <img className="owner-img" src={userFolder?.owner.profileImageSource} alt="소유자 프로필 이미지" />
          {userFolder?.owner.name}
        </h1>
        <div className="folder-name">{userFolder?.name}</div>
      </S.SharedHeaderContainer>
    </header>
  );
}

export default Header;
