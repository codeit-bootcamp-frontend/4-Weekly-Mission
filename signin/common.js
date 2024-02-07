/**
 * HTML DOM Elements
 */
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#pw-input");
const signUpButton = document.querySelector(".signup-btn");
const showPasswordButton = document.querySelectorAll(".eyeoff-button");
const passwordCheck = document.querySelector("#pw-check");

function isEmailFormat(emailString) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(emailString);
}

function isEmpty(text) {
  return text.length === 0;
}

function removeError(messageType) {
  messageType.classList.remove("show");
  messageType.textContent = "";
  messageType.previousElementSibling.classList.remove("red-outline");
}

function toggleError(messageType, text) {
  removeError(messageType);
  messageType.classList.add("show");
  messageType.textContent = text;
  messageType.previousElementSibling.classList.add("red-outline");
}

//눈모양 아이콘

function showHidePassword(input, eyeImgElement) {
  const isPasswordVisible = inputElement.getAttribute("type") === "text";
  const eyeOnImgSrc = "../public/images/signin-image/eye-on.png";
  const eyeOffImgSrc = "../public/images/signin-image/eye-off.png";
  //비밀번호가 보여지고 있다면
  if (isPasswordVisible) {
    input.type = "password";
    eyeImgElement.setAttribute("src", eyeOffImgSrc);
    return;
  }
  //비밀번호가 마스킹 되어있다면
  input.type = "text";
  eyeImgElement.setAttribute("src", eyeOnImgSrc);
  return;
}

export { isEmailFormat, isEmpty, removeError, toggleError, showHidePassword };
