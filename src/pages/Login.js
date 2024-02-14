import "../css/login.css";
import Logo from "../image/logo.svg";
import GoogleIcon from "../icon/google.png";
import KakaoIcon from "../icon/kakao.svg";

function Login() {
  return (
    <>
      <header>
        <a href="../html/home.html" id="logo">
          <img id="logo_img" src={Logo} alt="" />
        </a>
        <div id="join">
          회원이 아니신가요?
          <a id="join_a" href="../html/join.html">
            회원 가입하기
          </a>
        </div>
      </header>
      <main>
        <div className="input email_box">
          <p className="input_name">이메일</p>
          <input
            id="email"
            className="input_box"
            type="email"
            placeholder="codeit@codeit.com"
          />
          <div className="email_error error"></div>
        </div>
        <div className="input password_box">
          <p className="input_name">비밀번호</p>
          <input
            id="password"
            className="input_box"
            type="password"
            placeholder="password"
          />
          <div className="password_error error"></div>
        </div>
        <button className="login_btn">로그인</button>
      </main>
      <footer>
        <p>소셜 로그인</p>
        <div className="social_btns">
          <a className="social_btn google" href="http://www.google.com">
            <img className="social_img" src={GoogleIcon} alt="googleIcon" />
          </a>
          <a className="social_btn kakao" href="http://kakaocorp.com">
            <img className="social_img" src={KakaoIcon} alt="Kakako Icon" />
          </a>
        </div>
      </footer>
    </>
  );
}
export default Login;
