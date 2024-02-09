// 이메일, 비밀번호 입력 요소
const emailInput = document.querySelector(".LoginInputEmail");
const passwordInput = document.querySelector(".LoginInputPw");

// error 메시지 요소
const emailError = document.querySelector(".LoginEmailError");
const passwordError = document.querySelector(".LoginPasswordError");

const eyeIcon = document.querySelector(".eye-button-Login");

function toggleEyePw(event) {
  event.preventDefault(); // 토글 버튼을 눌렀을 때 새로고침 현상 때문에 추가
  console.log("toggleEyePw function called");
  const type = passwordInput.getAttribute("type");
  if (type === "password") {
    passwordInput.setAttribute("type", "password");
    eyeIcon.src = "./images/eye-on.svg";
  } else {
    passwordInput.setAttribute("type", "text");
    eyeIcon.src = "./images/eye-off.svg";
  }

  validatePassword();
}

function validateEmail() {
  // 입력값 가져와서 좌우 공백 제거
  let emailValue = emailInput.value.trim();

  if (!emailValue) {
    showError(emailError, "이메일을 입력해 주세요.");
  } else if (!isValidEmail(emailValue)) {
    showError(emailError, "올바른 이메일 주소가 아닙니다.");
  } else {
    hideError(emailError);
  }
}

function validatePassword() {
  let passwordValue = passwordInput.value.trim();

  if (!passwordValue) {
    showError(passwordError, "비밀번호를 입력해 주세요.");
  } else {
    hideError(passwordError);
  }
}

function showError(element, message) {
  element.textContent = message;
  element.style.display = "block";
  if (element.classList.contains("LoginEmailError")) {
    element.previousElementSibling.style.border = "1px solid red";
  } else if (element.classList.contains("LoginPasswordError")) {
    const passwordInput =
      element.previousElementSibling.querySelector(".LoginInputPw");
    if (passwordInput) {
      passwordInput.style.border = "1px solid red";
    }
  }
}

function hideError(element) {
  element.textContent = "";
  element.style.display = "none";
  if (element.classList.contains("LoginEmailError")) {
    element.previousElementSibling.style.border = "";
  } else if (element.classList.contains("LoginPasswordError")) {
    const passwordInput =
      element.previousElementSibling.querySelector(".LoginInputPw");
    if (passwordInput) {
      passwordInput.style.border = "";
    }
  }
}

function isValidEmail(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

async function attemptLogin() {
  let emailValue = emailInput.value.trim();
  let passwordValue = passwordInput.value.trim();
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    });
    if (response.ok) {
      window.location.href = '/folder';
    } else {
      const errorMessages = await response.json()
      showError(emailError, '이메일을 확인해 주세요.');
      showError(passwordError, '이메일 또는 비밀번호를 확인해 주세요.');
    }
  } catch(error) {
    showError(emailError, '이메일 에러로 로그인 요청 중 문제가 발생하였습니다.');
    showError(passwordError, '패스워드 에러로 로그인 요청 중 문제가 발생하였습니다.');
  }
  
}

document.querySelector(".LoginBtn").addEventListener("click", function (event) {
  event.preventDefault(); // 폼 전송 방지

  validateEmail();
  validatePassword();

  attemptLogin();

  // 이메일과 비밀번호가 유효한 경우 로그인 시도
  // let emailValue = emailInput.value.trim();
  // let passwordValue = passwordInput.value.trim();

  // if (emailValue === "test@codeit.com" && passwordValue === "codeit101") {
  //   window.location.href = "/folder";
  // } else {
  //   showError(emailError, "이메일을 확인해 주세요.");
  //   showError(passwordError, "비밀번호를 확인해 주세요.");
  // }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.querySelector(".LoginBtn").click();
  }
});

// 이메일 입력란 focus out 이벤트 리스너 추가
emailInput.addEventListener("focusout", validateEmail);

// 비밀번호 입력란 focus out 이벤트 리스너 추가
passwordInput.addEventListener("focusout", validatePassword);

eyeIcon.addEventListener("click", function (event) {
  toggleEyePw(event);
});
