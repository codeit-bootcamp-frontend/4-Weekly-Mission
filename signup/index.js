let email = document.querySelector(".input-email");
let password = document.querySelector(".input-password");
let passwordConfirm = document.querySelector(".input-password-confirm");
let loginButton = document.querySelector(".button-signup");
let passwordIcon = document.querySelector(".password-icon");

function resetElement(parentPlace, place) {
  let container = document.querySelector(parentPlace);
  // 기존 오류 엘리먼트를 삭제
  let oldErrorMessage = document.querySelector(place);
  if (oldErrorMessage) {
    container.removeChild(oldErrorMessage);
  }
}

function createErrorSpanElement(parentPlace, place) {
  let container = document.querySelector(parentPlace);
  // 엘리먼트 생성
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
  // 기존 오류 엘리먼트를 삭제
  resetElement(".input-form-email", ".errorMessage-email");

  // 동작
  if (email.value.trim() === "") {
    // 엘리먼트 생성
    createErrorSpanElement(".input-form-email", "errorMessage-email");
    // 텍스트 출력
    printErrorMessage(".errorMessage-email", "이메일을 입력해 주세요");
  }
}

function noInputFocusOutPassword() {
  // 기존 오류 엘리먼트를 삭제
  resetElement(".input-form-password", ".errorMessage");

  // 동작
  if (password.value.trim() === "") {
    // 엘리먼트 생성
    createErrorSpanElement(".input-form-password", "errorMessage");
    // 텍스트 출력
    printErrorMessage(".errorMessage", "비밀번호를 입력해 주세요");
  }
}

function notValidEmailInput() {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // 기존 오류 엘리먼트를 삭제
  resetElement(".input-form-email", ".errorMessage-email");
  
  if (emailRegex.test(email.value)) {
    console.log("Email")
    return
  } else {
    // 엘리먼트 생성
    createErrorSpanElement(".input-form-email", "errorMessage-email");
    // 텍스트 출력
    printErrorMessage(".errorMessage-email", '올바른 이메일 주소가 아닙니다');
  }
}

function focusIn(place) {
  let errorMessage = document.querySelector(place); //".errorMessage-email"
  if (errorMessage) {
    errorMessage.remove();
  }
}

// 로그인 시도
function pressEnterForFolderPage(e) {
  if (e.key === "Enter") {
    folderPage();
  }
}

function aleadyUse() {
  let folderEmail = "test@codeit.com";
  let folderPassword = "codeit101";

  if (email.value === folderEmail) {
    signupFail();
  } else {
    // 로그인 실패 시 적절한 처리
    //window.location.replace("../folder");
  }
}

function signupFail() {
  // 이메일
  resetElement(".input-form-email", ".errorMessage-email");
  createErrorSpanElement(".input-form-email", "errorMessage-email");
  printErrorMessage(".errorMessage-email", '이미 사용 중인 이메일 입니다');
  // 비밀 번호
  //resetElement(".input-form-password", ".errorMessage");
  //createErrorSpanElement(".input-form-password", "errorMessage");
  //printErrorMessage(".errorMessage", "비밀번호를 확인해 주세요");
}

// 비밀번호 보이기
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
email.addEventListener("focusout", aleadyUse);
password.addEventListener("focusout", noInputFocusOutPassword);
email.addEventListener("input", notValidEmailInput);
email.addEventListener("focusin", () => focusIn(".errorMessage-email"));
password.addEventListener("focusin", () => focusIn(".errorMessage"));
//loginButton.addEventListener("click", folderPage);
password.addEventListener("keydown", pressEnterForFolderPage);
passwordIcon.addEventListener("click", togglePassword);