import * as S from './Header.style';

const Header = ({ sampleUserFolder }) => {
  return (
    <header>
      <S.Container>
        <h1 className="owner">
          {sampleUserFolder.owner && (
            <>
              <img className="owner-img" src={sampleUserFolder.owner.profileImageSource} alt="소유자 프로필 이미지" />
              {sampleUserFolder.owner.name}
            </>
          )}
        </h1>
        <div className="folder-name">{sampleUserFolder.name}</div>
      </S.Container>
    </header>
  );
};

export default Header;
