import "./Signin.css";
import signLogo from "../assets/img/svg/logo-sign.svg";
import { Link } from "react-router-dom";
import googleLogo from "../assets/img/png/google-logo.png";
import kakaoLogo from "../assets/img/svg/kakao-logo.svg";

function Signin() {
  return (
    <div className="sign-container signin-background">
      <main className="sign-main">
        <div className="signin-login">
          <div className="sign-title">
            <Link to="/">
              <img src={signLogo} alt="logo-sign" />
            </Link>
            <div>
              <span className="black signin-span-margin">
                회원이 아니신가요?
              </span>
              <Link className="signup-a primary" to="/signup">
                회원 가입하기
              </Link>
            </div>
          </div>
          <form className="sign-form" action="">
            <div className="input-box">
              <label className="input-font-size black" htmlFor="email">
                이메일
              </label>
              <input className="sign-input black" id="email" type="email" />
              <div className="errMsg"></div>
            </div>
            <div className="input-box">
              <label className="input-font-size black" htmlFor="password">
                비밀번호
              </label>
              <i data-icon="eyeIcon" className="eye-off"></i>
              <input
                className="sign-input black"
                id="password"
                type="password"
              />
              <div className="errMsg"></div>
            </div>
            <button type="submit" id="loginBtn" className="login-btn white">
              로그인
            </button>
          </form>
        </div>
        <div className="social-login gray-ton4-bg">
          <span className="social-font-size">소셜 로그인</span>
          <div className="social-box">
            <a href="https://www.google.com/">
              <img src={googleLogo} alt="google" />
            </a>
            <a href="https://www.kakaocorp.com/page/">
              <div className="kakao-bg">
                <img src={kakaoLogo} alt="kakao" />
              </div>
            </a>
          </div>
        </div>
      </main>
      <div tabIndex={0}>{<Link to="/folder" />}</div>
    </div>
  );
}

export default Signin;
