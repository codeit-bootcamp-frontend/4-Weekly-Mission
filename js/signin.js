import { emailRegex, isVaildEmail } from "../utils/isValidEmail.js";
import { querySelector } from "../utils/querySelector.js";

// 이메일, 비밀번호 input 선택
const emailInputBox = querySelector("#signin-email-input");
const signinPasswordInput = querySelector("#signin-password-input");

// 로그인 버튼 선택
const loginBtn = querySelector("#login-button");

// 눈 모양 아이콘 선택
const passwordEyeIcon = querySelector("#password-eye-icon");

// 로그인 폼 선택
const loginForm = querySelector("#login-form");

function checkEmail(event) {
  // errorMessage가 출력될 태그, input 태그 선택
  const emailValue = event.target.value.trim();
  const errorMessage = querySelector("#email-error-message");

  if (emailValue === "") {
    // 공백일 경우
    errorMessage.innerHTML = "이메일을 입력해주세요.";
    emailInputBox.classList.add("error-box");
  } else if (isVaildEmail(emailValue)) {
    // 유효한 경우, .error-box 클래스 제거
    errorMessage.innerHTML = "";
    emailInputBox.classList.remove("error-box");
  } else {
    // 유효하지 않은 경우
    errorMessage.innerHTML = "올바른 이메일 주소가 아닙니다.";
    emailInputBox.classList.add("error-box");
  }
}

function checkPassword(event) {
  // input에 입력된 값, errorMessage가 출력될 태그, input 태그 선택
  const passwordValue = event.target.value;
  const errorMessageBox = querySelector("#password-error-message");
  // 공백일 경우
  if (passwordValue === "") {
    errorMessageBox.innerHTML = "비밀번호를 입력해주세요.";
    signinPasswordInput.classList.add("error-box");
  } else if (passwordValue !== "") {
    errorMessageBox.innerHTML = "";
    signinPasswordInput.classList.remove("error-box");
  }
}

// 로그인 시도
function tryLogin() {
  const emailValue = emailInputBox.value;
  const passwordValue = signinPasswordInput.value;
  const errorMessage = querySelector("#email-error-message");
  const errorMessageBox = querySelector("#password-error-message");

  // 입력값이 모두 맞는 경우
  if (emailValue === "test@codeit.com" && passwordValue === "codeit101") {
    location.href = "folder.html";
  } else if (
    emailValue !== "test@codeit.com" ||
    passwordValue !== "codeit101"
  ) {
    // 아이디가 틀리거나, 비밀번호가 틀리는 경우
    errorMessage.innerHTML = "이메일을 확인해주세요.";
    emailInputBox.classList.add("error-box");
    errorMessageBox.innerHTML = "비밀번호를 확인해주세요";
    signinPasswordInput.classList.add("error-box");
  }
}

// 엔터키로 로그인 시도
function loginByEnter(event) {
  // event.key 값이 "Enter"일 때만 tryLogin 함수 호출
  if (event.key === "Enter") {
    tryLogin();
  }
}

/** [심화] 눈 모양 아이콘 클릭시, 비밀번호 타입 변경하기 **/
function passwordShowHidden() {
  if (signinPasswordInput.getAttribute("type") === "password") {
    passwordEyeIcon.setAttribute("src", "./images/logo_icon/eye_icon.png");
    passwordEyeIcon.setAttribute("alt", "비밀번호 보기");
    signinPasswordInput.setAttribute("type", "text");
  } else if (signinPasswordInput.getAttribute("type") === "text") {
    passwordEyeIcon.setAttribute(
      "src",
      "./images/logo_icon/hidden_eye_icon.png"
    );
    passwordEyeIcon.setAttribute("alt", "비밀번호 숨김");
    signinPasswordInput.setAttribute("type", "password");
  }
}

/** 이벤트 등록 */
// 이메일, 비밀번호 올바른지 확인
emailInputBox.addEventListener("focusout", checkEmail);
signinPasswordInput.addEventListener("focusout", checkPassword);

// 로그인하거나, "확인해주세요" 띄우기
loginBtn.addEventListener("click", tryLogin);

// 엔터키로 로그인하기
loginForm.addEventListener("keydown", loginByEnter);

// 눈 모양 아이콘 클릭시
passwordEyeIcon.addEventListener("click", passwordShowHidden);
