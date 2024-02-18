import * as S from "./GNB.style";

const GNB = ({ user }) => {
  const imageSource = user?.profileImageSource
    ? user?.profileImageSource
    : user?.image_source;

  return (
    <nav>
      <S.Container>
        <div className="gnb">
          <a href="index.html">
            <img
              src="/assets/common/logo.svg"
              alt="홈으로 연결된 Linkbrary 로고"
            />
          </a>
          {user?.email ? (
            <div className="user-box">
              <img className="user-img" src={imageSource} alt="프로필 이미지" />
              <span className="user-email">{user?.email}</span>
            </div>
          ) : (
            <a className="cta cta-short" href="signin.html">
              <span>로그인</span>
            </a>
          )}
        </div>
      </S.Container>
    </nav>
  );
};

export default GNB;
