import React, { useState } from "react";
import styles from "../styles/SigninPage.module.css";

import { loginSuccess } from "../utils/util";
import { postReqeustApi } from "../utils/requestApi";
import SignInfoInputComponent from "../components/SignInfoInputComponent";

// email 정규식
const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

const SigninPage = () => {
  const [signinInfo, setSigninInfo] = useState({
    email: false,
    password: false,
  });

  const [emailErrorText, setEmailErrorText] = useState("");
  const [pwErrorText, setPwErrorText] = useState("");

  const validCheck = (name, value) => {
    let isValid = false;
    if (name === "email") {
      if (value === "") {
        // 오류
        setEmailErrorText("이메일을 입력해 주세요.");
      } else if (!regex.test(value)) {
        // 오류
        setEmailErrorText("올바른 이메일 주소가 아닙니다.");
      } else {
        // 정상
        setEmailErrorText("");
        isValid = true;
      }
    } else if (name === "password") {
      if (value === "") {
        setPwErrorText("비밀번호를 입력해 주세요.");
      } else {
        setPwErrorText("");
        isValid = true;
      }
    }
    return isValid;
  };

  const changeSigninInfo = (e) => {
    const isValid = validCheck(e.target.name, e.target.value);

    setSigninInfo({
      ...signinInfo,
      [e.target.name]: isValid,
    });
  };

  const signinFormSubmit = (e) => {
    e.preventDefault();
    if (signinInfo.email && signinInfo.password) {
      postReqeustApi("api/sign-in", {
        email: e.target[0].value,
        password: e.target[1].value,
      })
        .then((result) => {
          loginSuccess(result?.data);
        })
        .catch((err) => {
          setEmailErrorText("이메일을 확인해 주세요.");
          setPwErrorText("비밀번호를 확인해 주세요.");
        });
    }
  };

  return (
    <main className={styles.signin_main}>
      <form id="signin-form" onSubmit={(e) => signinFormSubmit(e)}>
        <div className={styles.signin_body}>
          <header className={styles.signin_header}>
            <a href="/">
              <img src="images/logo.svg" className={styles.logo} />
            </a>
            <p>
              회원이 아니신가요?
              <a className={styles.signup} href="/signup">
                회원 가입하기
              </a>
            </p>
          </header>
          <div className={styles.signin_info}>
            <div>
              <label for="signin_email"> 이메일</label>
              <SignInfoInputComponent
                name={"email"}
                changeEvent={changeSigninInfo}
                validText={emailErrorText}
                setValidText={setEmailErrorText}
              />
            </div>
            <div>
              <label for="signin_password"> 비밀번호</label>
              <SignInfoInputComponent
                name={"password"}
                changeEvent={changeSigninInfo}
                validText={pwErrorText}
                setValidText={setPwErrorText}
                pwType
              />
            </div>
          </div>
          <button
            type="submit"
            className={styles.signin_button}
            id="signin-button"
          >
            로그인
          </button>
        </div>
        <div className={styles.signin_body}>
          <div className={styles.social_signin}>
            <p>소셜 로그인</p>
            <div>
              <a href="https://www.google.com/">
                <img src="./images/google_logo.png" />
              </a>
              <a href="https://www.kakaocorp.com/page/">
                <img src="./images/kakao_logo.png" />
              </a>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default SigninPage;
