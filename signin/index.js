let email = document.querySelector(".input-email");
let password = document.querySelector(".input-password");
let loginButton = document.querySelector(".button-login");
let passwordIcon = document.querySelector(".password-icon");

function resetElement(parentPlace, place) {
  let container = document.querySelector(parentPlace);

  let oldErrorMessage = document.querySelector(place);
  if (oldErrorMessage) {
    container.removeChild(oldErrorMessage);
  }
}

function createErrorSpanElement(parentPlace, place) {
  let container = document.querySelector(parentPlace);

  let span = document.createElement("span");
  container.appendChild(span);
  span.classList.add(place);
  span.style.color = 'red';
  span.style.position = 'relative';
  span.style.top = '-6px';
}

function printErrorMessage(place, errorSentence) {
  let errorMessage = document.querySelector(place);
  errorMessage.textContent = errorSentence;
}

function noInputFocusOut() {
  resetElement(".input-form-email", ".errorMessage-email");

  if (email.value.trim() === "") {
    createErrorSpanElement(".input-form-email", "errorMessage-email");
    printErrorMessage(".errorMessage-email", "이메일을 입력해 주세요");
  }
}

function noInputFocusOutPassword() {
  resetElement(".input-form-password", ".errorMessage");

  if (password.value.trim() === "") {
    createErrorSpanElement(".input-form-password", "errorMessage");
    printErrorMessage(".errorMessage", "비밀번호를 입력해 주세요");
  }
}

function notValidEmailInput() {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  resetElement(".input-form-email", ".errorMessage-email");
  
  if (emailRegex.test(email.value)) {
    console.log("Email")
    return
  } else {
    createErrorSpanElement(".input-form-email", "errorMessage-email");
    printErrorMessage(".errorMessage-email", '올바른 이메일 주소가 아닙니다');
  }
}

function focusIn(place) {
  let errorMessage = document.querySelector(place); 
  if (errorMessage) {
    errorMessage.remove();
  }
}

function pressEnterForFolderPage(e) {
  if (e.key === "Enter") {
    folderPage();
  }
}

function folderPage() {
  let folderEmail = "test@codeit.com";
  let folderPassword = "codeit101";

  if (email.value === folderEmail && password.value === folderPassword) {
    window.location.replace("../folder");
  } else {
    loginFail();
  }
}

function loginFail() {
  resetElement(".input-form-email", ".errorMessage-email");
  createErrorSpanElement(".input-form-email", "errorMessage-email");
  printErrorMessage(".errorMessage-email", '이메일을 확인해 주세요');

  resetElement(".input-form-password", ".errorMessage");
  createErrorSpanElement(".input-form-password", "errorMessage");
  printErrorMessage(".errorMessage", "비밀번호를 확인해 주세요");
}

function togglePassword() {
  if (password.type === "password") {
    password.type = "text";
    passwordIcon.setAttribute("src", "../Publics/sign/eye-off.svg");
  } else {
    password.type = "password";
    passwordIcon.setAttribute("src", "../Publics/sign/eye-on.svg");
  }
}

email.addEventListener("focusout", noInputFocusOut);
password.addEventListener("focusout", noInputFocusOutPassword);
email.addEventListener("input", notValidEmailInput);
email.addEventListener("focusin", () => focusIn(".errorMessage-email"));
password.addEventListener("focusin", () => focusIn(".errorMessage"));
loginButton.addEventListener("click", folderPage);
password.addEventListener("keydown", pressEnterForFolderPage);
passwordIcon.addEventListener("click", togglePassword);