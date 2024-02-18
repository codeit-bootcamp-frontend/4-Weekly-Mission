import {
  inputFocusBorderChange,
  addEventPwHiddenBtn,
  loginSuccess,
} from "./util.js";
import { postReqeustApi } from "./requestApi.js";
// valid input 관련 element
const emailInput = document.querySelector("#signin-email");
const emailValidText = document.querySelector("#email-valid-text");
const pwInput = document.querySelector("#signin-password");
const pwValidText = document.querySelector("#pw-valid-text");

// 심화 : password eye button
const pwHiddenBtn = document.querySelector("#pw-hidden-btn");

// signin form
const signinForm = document.querySelector("#signin-form");

// email 정규식
const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

// let isValidId = false;
// let isValidPw = false;
let isToggleEyes = false;

window.onload = function () {
  if (localStorage.getItem("accessToken")) {
    window.location.href = "/folder";
  }
};

// password hidden button init setting function
addEventPwHiddenBtn(pwHiddenBtn, pwInput, isToggleEyes);

// focus on
emailInput.addEventListener("focus", function () {
  inputFocusBorderChange("focus_on", emailInput, emailValidText);
});
pwInput.addEventListener("focus", function () {
  inputFocusBorderChange("focus_on", pwInput, pwValidText);
});

// focus out
emailInput.addEventListener("focusout", function () {
  if (emailInput.value === "") {
    inputFocusBorderChange(
      "valid_error",
      emailInput,
      emailValidText,
      "이메일을 입력해 주세요."
    );
  } else if (!regex.test(emailInput.value)) {
    inputFocusBorderChange(
      "valid_error",
      emailInput,
      emailValidText,
      "올바른 이메일 주소가 아닙니다."
    );
  } else {
    // isValidId = true;
    inputFocusBorderChange("none", emailInput, emailValidText);
  }
});
pwInput.addEventListener("focusout", function () {
  if (pwInput.value === "") {
    inputFocusBorderChange(
      "valid_error",
      pwInput,
      pwValidText,
      "비밀번호를 입력해 주세요."
    );
  } else {
    // isValidPw = true;
    inputFocusBorderChange("none", pwInput, pwValidText);
  }
});

// form submit (enter, submit click)
signinForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const id = emailInput.value;
  const pw = pwInput.value;

  postReqeustApi("api/sign-in", {
    email: id,
    password: pw,
  })
    .then((result) => {
      loginSuccess(result?.data);
    })
    .catch((err) => {
      inputFocusBorderChange(
        "valid_error",
        emailInput,
        emailValidText,
        "이메일을 확인해 주세요."
      );
      inputFocusBorderChange(
        "valid_error",
        pwInput,
        pwValidText,
        "비밀번호를 확인해 주세요."
      );
    });
});
