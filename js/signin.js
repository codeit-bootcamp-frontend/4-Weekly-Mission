const emailInput = document.querySelector("#signin_email");
const emailValidText = document.querySelector("#email_valid_text");
const pwInput = document.querySelector("#signin_password");
const pwValidText = document.querySelector("#pw_valid_text");

const pwHiddenBtn = document.querySelector("#pw_hidden_btn");
pwHiddenBtn.innerHTML = '<img src="./images/eye-off.svg" />';

const signinForm = document.querySelector("#signin_form");
const signinBtn = document.querySelector("#signin_button");

const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

let isValidId = false;
let isValidPw = false;
let isToggleEyes = false;

emailInput.addEventListener("focus", function () {
  inputFocusOn(emailInput, emailValidText);
});
pwInput.addEventListener("focus", function () {
  inputFocusOn(pwInput, pwValidText);
});

emailInput.addEventListener("focusout", function () {
  if (emailInput.value === "") {
    inputFocusOutError(emailInput, emailValidText, "이메일을 입력해 주세요.");
  } else if (!regex.test(emailInput.value)) {
    inputFocusOutError(
      emailInput,
      emailValidText,
      "올바른 이메일 주소가 아닙니다."
    );
  } else {
    isValidId = true;
    inputFocusOutNone(emailInput, emailValidText);
  }
});

pwInput.addEventListener("focusout", function () {
  if (pwInput.value === "") {
    inputFocusOutError(pwInput, pwValidText, "비밀번호를 입력해 주세요.");
  } else {
    isValidPw = true;
    inputFocusOutNone(pwInput, pwValidText);
  }
});

signinForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (emailInput.value === "test@codeit.com" && pwInput.value === "codeit101") {
    window.location.href = "/folder";
  } else {
    inputFocusOutError(emailInput, emailValidText, "이메일을 확인해 주세요.");
    inputFocusOutError(pwInput, pwValidText, "비밀번호를 확인해 주세요.");
  }
});

function inputFocusOn(input, textElm) {
  input.style.border = "1px solid #6D6AFE";
  input.style.outline = "none";
  textElm.textContent = "";
}
function inputFocusOutNone(input, textElm) {
  input.style.border = "1px solid #CCD5E3";
  input.style.outline = "none";
  textElm.textContent = "";
}
function inputFocusOutError(input, textElm, text) {
  input.style.border = "1px solid #FF5B56";
  input.style.outline = "none";
  textElm.textContent = text;
}

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
