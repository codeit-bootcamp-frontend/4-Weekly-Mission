const emailInput = document.getElementById("emailBox");
//비밀번호 값
const passwordInput = document.getElementById("pwBox");
//비밀번호 확인 값
const verifypasswordInput = document.getElementById("verifypwBox");
//회원가입 버튼
const signupBtn = document.getElementById("signupBtn");
//로그인 버튼
const loginBtn = document.getElementById("loginBtn");
const eyeButton = document.querySelector(".eye-button");
const verifyEyeButton = document.querySelector(".verifyEye-button");

//위 변수들 한꺼번에 export
export {
  emailInput,
  passwordInput,
  verifypasswordInput,
  signupBtn,
  loginBtn,
  eyeButton,
  verifyEyeButton,
};

// 이메일 양식 확인
export function validateEmail(emailInput) {
  const emailValue = emailInput.value;
  const errorDiv = document.createElement("div");
  errorDiv.classList.add("error-message");

  if (emailValue === "") {
    errorDiv.textContent = "이메일을 입력해 주세요.";
    showErrorMessage(errorDiv, emailInput);
  } else if (!emailInput.validity.valid) {
    errorDiv.textContent = "올바른 이메일 주소가 아닙니다.";
    showErrorMessage(errorDiv, emailInput);
  } else if (emailValue === "test@codeit.com") {
    errorDiv.textContent = "이미 사용 중인 이메일입니다.";
    showErrorMessage(errorDiv, emailInput);
  } else {
    hideErrorMessage(emailInput);
  }
}

// 비밀번호 유효성 확인
export function validatePassword(passwordInput) {
  const passwordValue = passwordInput.value;
  const errorDiv = document.createElement("div");
  errorDiv.classList.add("error-message");

  if (passwordValue === "") {
    errorDiv.textContent = "비밀번호를 입력해 주세요.";
    showErrorMessage(errorDiv, passwordInput);
  } else if (
    passwordValue.length < 8 ||
    !/[a-zA-Z]/.test(passwordValue) ||
    !/\d/.test(passwordValue)
  ) {
    //값이 8자 미만/문자열/숫자만 있는 경우
    errorDiv.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    showErrorMessage(errorDiv, passwordInput);
  } else {
    hideErrorMessage(passwordInput);
  }
}

// 비밀번호 확인 유효성 확인
export function validateVerifyPassword(passwordInput, verifypasswordInput) {
  const passwordValue = passwordInput.value;
  const verifypasswordValue = verifypasswordInput.value;
  const errorDiv = document.createElement("div");
  errorDiv.classList.add("error-message");

  if (verifypasswordValue === "") {
    errorDiv.textContent = "비밀번호를 확인해 주세요.";
    showErrorMessage(errorDiv, verifypasswordInput);
  } else if (verifypasswordValue !== passwordValue) {
    //비밀번호, 비밀번호 확인이 일치하는지 확인
    errorDiv.textContent = "비밀번호가 일치하지 않아요.";
    showErrorMessage(errorDiv, verifypasswordInput);
  } else {
    hideErrorMessage(verifypasswordInput);
  }
}

// 눈 모양 버튼 토글
export function togglePasswordVisibility(inputField, eyeButton) {
  const isPasswordVisible = inputField.type === "text";

  // 비밀번호 보이기/가리기 토글
  if (isPasswordVisible) {
    inputField.type = "password";
  } else {
    inputField.type = "text";
  }

  // 눈 모양 아이콘 변경
  const imgElement = eyeButton.querySelector("img");
  if (isPasswordVisible) {
    imgElement.src = "./images/eye-off.svg";
  } else {
    imgElement.src = "./images/eye-on.svg";
  }
}

export function showError(errorElement, errorContent) {
  //1. Hidden클래스 제거하기 -> 에러메세지가 보인다.
  //2. 에러 콘텐츠 보여주기

  //1
  errorElement.classList.remove("hidden");
  //2
  errorElement.textContent = errorContent;
}
/*
// 에러 메세지 보이기
export function showErrorMessage(errorMessage, targetInput) {
  hideErrorMessage(targetInput);
  targetInput.parentNode.appendChild(errorMessage);
}

// 에러 메세지 가리기
export function hideErrorMessage(targetInput) {
  const existingError = targetInput.parentNode.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }
}
*/
