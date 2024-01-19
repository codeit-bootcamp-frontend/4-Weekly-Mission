// 글로벌 변수 선언
const loginFormEl = document.querySelector("form");
const emailInputEl = document.querySelector("#email-input");
const pwInputEl = document.querySelector("#password-input");
const pwCheckInputEl = document.querySelector("#pw-check-input");
const loginBtnEl = document.querySelector(".btn-login");

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
  targetNode.classList.add("input-error");

  const errorSpan = document.createElement("span");
  errorSpan.classList.add("error-message");
  errorSpan.textContent = errorMessage[inputID][errorType];

  if (targetNode.type === "password") {
    targetNode.parentElement.parentElement.append(errorSpan);
    return;
  }
  targetNode.parentElement.append(errorSpan);
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
    e.target.classList.remove("input-error");
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

loginFormEl.addEventListener("focusout", validCheck);
loginBtnEl.addEventListener("click", loginAttempt);
