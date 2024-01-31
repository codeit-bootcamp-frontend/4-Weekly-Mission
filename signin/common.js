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
function showPassword(input, showButton) {
  input.type = "text";
  showButton.removeChild(showButton.getElementsByTagName("img")[0]);
  const eyeonImg = document.createElement("img");
  eyeonImg.setAttribute("src", "../public/images/signin-image/eye-on.png");
  showButton.prepend(eyeonImg);
}

function hidePassword(input, showButton) {
  input.type = "password";
  showButton.removeChild(showButton.getElementsByTagName("img")[0]);
  const eyeoffImg = document.createElement("img");
  eyeoffImg.setAttribute("src", "../public/images/signin-image/eye-off.png");
  showButton.prepend(eyeoffImg);
}

function toggleErrorVisibility(input, showButton) {
  if (input.type == "password") {
    showPassword(input, showButton);
  } else {
    hidePassword(input, showButton);
  }
}

export {
  isEmailFormat,
  isEmpty,
  removeError,
  toggleError,
  toggleErrorVisibility,
};
