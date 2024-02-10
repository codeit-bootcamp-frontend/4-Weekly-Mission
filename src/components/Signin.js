import "./Signin.css";
import signLogo from "../assets/img/svg/logo-sign.svg";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../assets/img/png/google-logo.png";
import kakaoLogo from "../assets/img/svg/kakao-logo.svg";
import { eye, blur, login, enterEvent, token } from "../common/loginCommon.js";
import { useEffect, useState } from "react";

function Signin() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState();

  const handleEmailBlur = (e) => {
    // email focus out 이벤트 핸들링
    blur.signinEmail(e);
  };

  const handlePasswordBlur = (e) => {
    // 비밀번호 focus out 이벤트 핸들링
    blur.signinPassword(e);
  };

  const handleEyeIconClick = (e) => {
    // 비밀번호 눈모양 클릭 이벤트 핸들링
    eye.toggleEyeIcon(e);
  };

  const handleLoginButtonClick = (e) => {
    // 로그인 성공 이벤트 핸들링

    if (login.validation(e)) {
      navigate("/folder");
    }
  };

  const handleKeyUp = (e) => {
    // 엔터 이벤트 핸들링
    enterEvent(e);
  };

  useEffect(() => {
    // 로컬 스토리지에 토큰 존재 시 folder로 이동
    if (token.isLocalStorageExist()) {
      navigate("/folder");
    }
  }, [navigate]);

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
              <input
                onBlur={handleEmailBlur}
                className="sign-input black"
                id="email"
                type="email"
              />
              <div className="errMsg"></div>
            </div>
            <div className="input-box">
              <label className="input-font-size black" htmlFor="password">
                비밀번호
              </label>
              <i
                onClick={handleEyeIconClick}
                data-icon="eyeIcon"
                className="eye-off"
              ></i>
              <input
                onBlur={handlePasswordBlur}
                className="sign-input black"
                id="password"
                type="password"
              />
              <div className="errMsg"></div>
            </div>
            <button
              onClick={handleLoginButtonClick}
              type="submit"
              id="loginBtn"
              className="login-btn white"
            >
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
      <div tabIndex={0} onKeyUp={handleKeyUp}>
        {<Link to="/folder" />}
      </div>
    </div>
  );
}

export default Signin;
