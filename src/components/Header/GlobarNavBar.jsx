import { NavBarContainer } from './GlobarNavBar.style.js';
import images from '../../images'

const GlobarNavBar = ({ user }) => {
    return (
      <nav>
        <NavBarContainer>
          <div className="gnb">
            <a href="index.html">
              <img
                src={images.logo}
                alt="홈으로 연결된 Linkbrary 로고"
              />
            </a>
            {user?.email ? (
              <div className="user-box">
                <img
                  className="user-img"
                  src={user?.profileImageSource}
                  alt="프로필 이미지"
                />
                <span className="user-email">{user?.email}</span>
              </div>
            ) : (
              <a className="cta cta-short" href="signin.html">
                <span>로그인</span>
              </a>
            )}
          </div>
        </NavBarContainer>
      </nav>
    );
  };
  
  export default GlobarNavBar;