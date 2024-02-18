import React from "react";

import {
  addEventPwHiddenBtn,
  inputFocusBorderChange,
  loginSuccess,
} from "../utils/util";
import { postReqeustApi } from "../utils/requestApi";

const SignupPage = () => {
  const emailInput = document.querySelector("#signup-email");
  const emailValidText = document.querySelector("#email-valid-text");
  const pwInput = document.querySelector("#signup-password");
  const pwValidText = document.querySelector("#pw-valid-text");
  const pwChkInput = document.querySelector("#signup-password-chk");
  const pwChkValidText = document.querySelector("#pw-chk-valid-text");

  // 심화 : password eye button
  const pwHiddenBtn = document.querySelector("#pw-hidden-btn");
  const pwChkHiddenBtn = document.querySelector("#pw-chk-hidden-btn");

  // signup form
  const signupForm = document.querySelector("#signup-form");

  // email 정규식
  const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  // 비밀번호 정규식 (8~25)
  const pwRegex = new RegExp("(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}");

  // let isValidId = false;
  // let isValidPw = false;
  let isToggleEyesPw = false;
  let isToggleEyesPwChk = false;

  window.onload = function () {
    if (localStorage.getItem("accessToken")) {
      window.location.href = "/folder";
    }
  };
  // password hidden button init setting function
  addEventPwHiddenBtn(pwHiddenBtn, pwInput, isToggleEyesPw);
  addEventPwHiddenBtn(pwChkHiddenBtn, pwChkInput, isToggleEyesPwChk);

  // focus on
  emailInput.addEventListener("focus", function () {
    inputFocusBorderChange("focus_on", emailInput, emailValidText);
  });
  pwInput.addEventListener("focus", function () {
    inputFocusBorderChange("focus_on", pwInput, pwValidText);
  });
  pwChkInput.addEventListener("focus", function () {
    inputFocusBorderChange("focus_on", pwChkInput, pwChkValidText);
  });

  // focus out
  emailInput.addEventListener("focusout", emailValidCheck);
  pwInput.addEventListener("focusout", pwValidCheck);
  // 비밀번호 확인 이벤트 추가
  pwChkInput.addEventListener("focusout", pwCheckValidCheck);

  // 중복 function 실행으로 인한 변수 추가 (email, pw, pwchk)
  // validOption - 정상일 경우 type = none, 오류일 경우 type = valid_error
  // return 을 이용하여 submit에서 정성/오류 체크 가능하도록 수정
  async function emailValidCheck() {
    const validOption = { type: "none", text: "" };
    const id = emailInput.value;

    if (id === "") {
      validOption.type = "valid_error";
      validOption.text = "이메일을 입력해 주세요.";
    } else {
      await postReqeustApi("api/check-email", {
        email: id,
      }).catch((error) => {
        if (error.message === "400") {
          validOption.type = "valid_error";
          validOption.text = "올바른 이메일 주소가 아닙니다.";
        } else if (error.message === "409") {
          validOption.type = "valid_error";
          validOption.text = "이미 사용 중인 이메일입니다.";
        }
      });
    }

    inputFocusBorderChange(
      validOption.type,
      emailInput,
      emailValidText,
      validOption.text
    );

    return validOption;
  }

  function pwValidCheck() {
    pwCheckValidCheck();
    const validOption = { type: "none", text: "" };
    if (pwInput.value === "") {
      validOption.type = "valid_error";
      validOption.text = "비밀번호를 입력해 주세요.";
    } else if (!pwRegex.test(pwInput.value)) {
      validOption.type = "valid_error";
      validOption.text = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    }

    inputFocusBorderChange(
      validOption.type,
      pwInput,
      pwValidText,
      validOption.text
    );

    return validOption;
  }

  function pwCheckValidCheck() {
    const validOption = { type: "none", text: "" };

    if (pwChkInput.value === "") {
      validOption.type = "valid_error";
      validOption.text = "비밀번호를 입력해 주세요.";
    } else if (pwChkInput.value !== pwInput.value) {
      validOption.type = "valid_error";
      validOption.text = "비밀번호가 일치하지 않아요.";
    }

    inputFocusBorderChange(
      validOption.type,
      pwChkInput,
      pwChkValidText,
      validOption.text
    );
    return validOption;
  }

  // form submit (enter, submit click)
  signupForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    // 정상/오류 사항을 한번 더 확인하기 위해 함수 호출
    // 비정상일 경우 input border style change
    // return값 (validOption.type)을 이용하여 정상/오류 판단
    const emailOption = await emailValidCheck();
    const pwOption = pwValidCheck();
    const pwChkOption = pwCheckValidCheck();

    console.log(emailOption, pwOption, pwChkOption);
    // 모두 정상일 경우 folder 페이지로 이동
    if (
      emailOption.type === "none" &&
      pwOption.type === "none" &&
      pwChkOption.type === "none"
    ) {
      const id = emailInput.value;
      const pw = pwInput.value;

      postReqeustApi("api/sign-up", {
        email: id,
        password: pw,
      })
        .then((result) => {
          loginSuccess(result?.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      console.log("error");
    }
  });
  return (
    <main>
      <form id="signup-form">
        <div class="signup_body">
          <header class="signup_header">
            <a href="/">
              <img src="images/logo.svg" class="logo" />
            </a>
            <p>
              이미 회원이신가요?
              <a class="signin" href="/signin.html">
                로그인 하기
              </a>
            </p>
          </header>
          <div class="signup_info">
            <div>
              <label for="signup_email"> 이메일</label>
              <input id="signup-email" name="email" type="text" />
              <p class="valid_text" id="email-valid-text"></p>
            </div>
            <div>
              <label for="signup_password"> 비밀번호</label>
              <input id="signup-password" name="password" type="password" />
              <button id="pw-hidden-btn" type="button"></button>
              <p class="valid_text" id="pw-valid-text"></p>
            </div>
            <div>
              <label for="signup_password-chk"> 비밀번호 확인</label>
              <input id="signup-password-chk" name="password" type="password" />
              <button id="pw-chk-hidden-btn" type="button"></button>
              <p class="valid_text" id="pw-chk-valid-text"></p>
            </div>
          </div>
          <button type="submit" class="signup_button">
            회원가입
          </button>
        </div>
        <div class="signup_body">
          <div class="social_signup">
            <p>다른 방식으로 가입하기</p>
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

export default SignupPage;
