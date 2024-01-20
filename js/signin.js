// 이메일 형식 검사 정규식
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 이메일, 비밀번호 input 선택
const emailInputBox = document.querySelector("#email-inputbox");
const pwInputBox = document.querySelector("#pw-inputbox");

// 로그인 버튼 선택
const loginBtn = document.querySelector("#login-button");

function checkEmail(event) {
  // errorMessage가 출력될 태그, input 태그 선택
  const emailValue = event.target.value.trim();
  const errorMessage = document.querySelector("#email-error-message");

  if (emailValue === "") {
    // 공백일 경우
    errorMessage.innerHTML = "이메일을 입력해주세요.";
    emailInputBox.classList.add("error-box");
  } else if (emailRegex.test(emailValue)) {
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
  const errorMessageBox = document.querySelector("#pw-error-message");

  if (passwordValue === "") {
    errorMessageBox.innerHTML = "비밀번호를 입력해주세요.";
    pwInputBox.classList.add("error-box");
  } else if (passwordValue !== "") {
    errorMessageBox.innerHTML = "";
    pwInputBox.classList.remove("error-box");
  }
}

// 로그인 시도
function tryLogin() {
  const emailValue = emailInputBox.value;
  const passwordValue = pwInputBox.value;
  const errorMessage = document.querySelector("#email-error-message");
  const errorMessageBox = document.querySelector("#pw-error-message");

  if (emailValue === "test@codeit.com" && passwordValue === "codeit101") {
    location.href = "./folder.html";
  } else {
    errorMessage.innerHTML = "이메일을 확인해주세요.";
    emailInputBox.classList.add("error-box");
    errorMessageBox.innerHTML = "비밀번호를 확인해주세요";
    pwInputBox.classList.add("error-box");
  }
}

// 이벤트 등록
emailInputBox.addEventListener("focusout", checkEmail);
pwInputBox.addEventListener("focusout", checkPassword);
loginBtn.addEventListener("click", tryLogin);
