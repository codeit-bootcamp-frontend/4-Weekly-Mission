// valid input 관련 element
const emailInput = document.querySelector("#signin_email");
const emailValidText = document.querySelector("#email_valid_text");
const pwInput = document.querySelector("#signin_password");
const pwValidText = document.querySelector("#pw_valid_text");

// 심화 : password eye button
const pwHiddenBtn = document.querySelector("#pw_hidden_btn");
pwHiddenBtn.innerHTML = '<img src="./images/eye-off.svg" />';

// signin form
const signinForm = document.querySelector("#signin_form");

// email 정규식
const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

// let isValidId = false;
// let isValidPw = false;
let isToggleEyes = false;

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
    isValidId = true;
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
    isValidPw = true;
    inputFocusBorderChange("none", pwInput, pwValidText);
  }
});

// form submit (enter, submit click)
signinForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (emailInput.value === "test@codeit.com" && pwInput.value === "codeit101") {
    window.location.href = "/folder";
  } else {
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
  }
});

// 심화 : pw eye button 클릭 이벤트 추가 > type - password, text toggle event
pwHiddenBtn.addEventListener("click", function (e) {
  e.preventDefault();
  isToggleEyes = !isToggleEyes;
  if (isToggleEyes) {
    pwHiddenBtn.innerHTML = '<img src="./images/eye-on.svg" />';
    pwInput.type = "text";
  } else {
    pwHiddenBtn.innerHTML = '<img src="./images/eye-off.svg" />';
    pwInput.type = "password";
  }
});

// focus 및 action에 따른 input border style changer
function inputFocusBorderChange(type, inputElm, textElm, text = "") {
  let borderStyle = "1px solid #CCD5E3";
  if (type === "focus_on") {
    borderStyle = "1px solid #6D6AFE";
  } else if (type === "valid_error") {
    borderStyle = "1px solid #FF5B56";
  }
  inputElm.style.border = borderStyle;
  inputElm.style.outline = "none";
  textElm.textContent = text;
}
