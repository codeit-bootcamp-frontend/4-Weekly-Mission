// 이메일 입력란과 오류 메시지 요소를 가져오기
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
// 비밀번호 입력란과 오류 메시지 요소를 가져오기
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("password-error");
//로그인
const loginButton = document.getElementById("login-btn");

function checkEmail() {
  //입력값 있을경우
  if (emailInput.value) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailPattern.test(emailInput.value)) {
      emailError.style.display = "none";
    } else {
      emailError.textContent = "올바른 이메일 주소가 아닙니다.";
      emailError.style.display = "block";
    }
  }
  //입력값 없을경우
  else {
    emailError.textContent = "이메일을 입력해 주세요.";
    emailError.style.display = "block";
  }
}

function checkPassword() {
  // 입력값 있을경우
  if (passwordInput.value) {
    passwordError.style.display = "none";
  }
  // 입력값 없을경우
  else {
    passwordError.textContent = "비밀번호를 입력해 주세요.";
    passwordError.style.display = "block";
  }
}

function preventEnter(event) {
  // Enter 기본 제출 동작 방지
  if (event.key === "Enter") {
    event.preventDefault();
  }
}

function checkLogin(event) {
  if (event.type == "click" || event.key == "Enter") {
    event.preventDefault();
    if (
      emailInput.value === "test@codeit.com" &&
      passwordInput.value === "codeit101"
    ) {
      // 로그인 성공 시 페이지 이동
      window.location.href = "/folder.html";
    } else {
      // 로그인 실패 시 오류 메시지 표시
      emailError.textContent = "이메일을 확인해 주세요.";
      emailError.style.display = "block";
      passwordError.textContent = "비밀번호를 확인해 주세요.";
      passwordError.style.display = "block";
    }
  }
}

// 포커스가 떠날 때 이벤트 리스너 등록
emailInput.addEventListener("focusout", checkEmail);
emailInput.addEventListener("keydown", preventEnter);

// 포커스가 떠날 때 이벤트 리스너 등록
passwordInput.addEventListener("focusout", checkPassword);
passwordInput.addEventListener("keydown", preventEnter);

//로그인 이벤트 리스너 등록
loginButton.addEventListener("click", checkLogin);
document.addEventListener("keydown", checkLogin);
