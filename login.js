// 글로벌 변수 선언
const loginFormEl = document.querySelector("form");
const emailInputEl = document.querySelector("#email-input");
const pwInputEl = document.querySelector("#password-input");
const pwCheckInputEl = document.querySelector("#pw-check-input");
const loginBtnEl = document.querySelector(".btn-login");
const encodePwBtn = document.querySelector(".password-box i");

// 유저 데이터 리스트 (추후 따로 관리?)
const userList = {
  codeit: {
    email: "test@codeit.com",
    password: "codeit101",
  },
};

// 에러 메세지 데이터 리스트 (추후 따로 관리?)
const errorMessage = {
  "email-input": {
    blank: "이메일을 입력해 주세요.",
    fail: "올바른 이메일 주소가 아닙니다.",
    invalid: "이메일을 확인해 주세요.",
  },
  "password-input": {
    blank: "비밀번호를 입력해 주세요.",
    fail: "비밀번호는 8자 이상으로 구성되어야 합니다.",
    invalid: "비밀번호를 확인해 주세요.",
  },
  "pw-check-input": {
    blank: "비밀번호를 다시 한 번 입력해 주세요.",
    fail: "비밀번호가 일치하지 않습니다.",
  },
};

// 에러 발생시 input 태그 아래 에러 메세지 삽입
function inputErrorMessage(inputID, errorType) {
  const targetNode = document.querySelector(`#${inputID}`);
  targetNode.classList.add("error");

  const errorSpan = document.createElement("span");
  errorSpan.classList.add("error-message");
  errorSpan.textContent = errorMessage[inputID][errorType];

  const parentNode = targetNode.parentElement;
  if (targetNode.type === "email") {
    parentNode.append(errorSpan);
    return;
  } else if (parentNode.parentElement.querySelector(".error-message")) {
    // 비밀번호 암호화 버튼 토글에 따른 무한 span 생성 금지
    return;
  }
  parentNode.parentElement.append(errorSpan);
}

// 에러 메세지 삭제
function removeErrorEl(removeEl) {
  if (removeEl.classList.contains("error-message")) {
    removeEl.remove();
  }
}

// 이벤트 발생마다 에러 리셋
function resetError(inputID) {
  const targetNode = document.querySelector(`#${inputID}`);
  // HTML 구조상 email input과 password input을 분리
  if (targetNode.type === "password") {
    const removeEl = targetNode.parentElement.parentElement.lastElementChild;
    removeErrorEl(removeEl);
  } else {
    const removeEl = targetNode.parentElement.lastElementChild;
    removeErrorEl(removeEl);
  }
}

// 로그인 & 회원가입 input 유효성 검사
function validCheck(e) {
  let inputID = e.target.id;
  const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/i;

  resetError(inputID);

  if (!e.target.value) {
    inputErrorMessage(inputID, "blank");
  } else if (e.target === emailInputEl && !emailRegExp.test(e.target.value)) {
    inputErrorMessage(inputID, "fail");
  } else if (
    e.target === pwCheckInputEl &&
    e.target.value !== pwInputEl.value
  ) {
    inputErrorMessage(inputID, "fail");
  } else {
    e.target.classList.remove("error");
  }
}

// 로그인 성공시 페이지 이동
function loginAttempt(e) {
  e.preventDefault();
  resetError("email-input");
  resetError("password-input");
  if (
    emailInputEl.value === userList.codeit.email &&
    pwInputEl.value === userList.codeit.password
  ) {
    window.location.replace("/folder");
  } else {
    inputErrorMessage("email-input", "invalid");
    inputErrorMessage("password-input", "invalid");
  }
}

// 비밀번호 암호화 토글
function handleClickEyeIcon(e) {
  let targetClass = e.target.parentElement.classList;
  let inputEl = e.target.parentElement.previousElementSibling;
  const iconOff = "icon-eye-off";
  const iconOn = "icon-eye-on";
  if (targetClass.contains(iconOff)) {
    targetClass.remove(iconOff);
    targetClass.add(iconOn);
    inputEl.type = "text";
  } else {
    targetClass.remove(iconOn);
    targetClass.add(iconOff);
    inputEl.type = "password";
  }
}

loginFormEl.addEventListener("focusout", validCheck);
loginFormEl.addEventListener("submit", loginAttempt);
encodePwBtn.addEventListener("click", handleClickEyeIcon);
