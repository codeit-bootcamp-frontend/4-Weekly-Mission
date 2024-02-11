import logo from '../images/logo.svg';

function Header() {
  return (
    <div className="contents-01">
      <h1 className="contents-01-text">
        <span className="contents-01-gradient">세상의 모든 정보</span>를
        <br />
        쉽게 저장하고 관리해 보세요
      </h1>
      <a className="button-link" href="signup.html">
        링크 추가하기
      </a>
      <img src={logo} className="contents-01-image" alt="logo-image" />
    </div>
  );
}

export default Header;
