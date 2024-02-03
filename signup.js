// 이메일 입력란과 오류 메시지 요소를 가져오기
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
// 비밀번호 입력란과 오류 메시지 요소를 가져오기
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("password-error");
// 비밀번호확인 입력란과 오류 메시지 요소를 가져오기
const passwordCheckInput = document.getElementById("password-check");
const passwordCheckError = document.getElementById("password-check-error");
// 회원가입버튼
const signupButton = document.getElementById("signup-btn");

function checkEmail() {
  const email = emailInput.value;
  // 입력값 있을경우
  if (email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    // 이메일 형식에 적합할때
    if (emailPattern.test(email)) {
      const emailData = {
        email: emailInput.value,
      };
      // 서버로 중복이메일 체크
      fetch("https://bootcamp-api.codeit.kr/api/check-email", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(emailData),
      }).then((response) => {
        if (response.status == 409) {
          emailError.textContent = "이미 사용 중인 이메일입니다.";
          emailError.style.display = "block";
        } else if (response.status == 200) {
          emailError.style.display = "none";
        }
      });
    }
    // 이메일 형식에 적합하지 않을때
    else {
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
  const password = passwordInput.value;
  // 입력값 있을경우
  if (password) {
    // 비밀번호가 8자 미만이거나 문자열만 있거나 숫자만 있는 경우
    if (
      password.length < 8 ||
      !/[a-zA-Z]/.test(password) ||
      !/\d/.test(password)
    ) {
      passwordError.textContent =
        "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
      passwordError.style.display = "block";
    }
    // 올바른 경우
    else {
      passwordError.style.display = "none";
    }
  }
  // 입력값 없을경우
  else {
    passwordError.textContent = "비밀번호를 입력해 주세요.";
    passwordError.style.display = "block";
  }
}

function checkSamePassword() {
  // 비밀번호와 비밀번호 확인란의 값이 다를때
  if (passwordInput.value !== passwordCheckInput.value) {
    passwordCheckError.textContent = "비밀번호가 일치하지 않아요.";
    passwordCheckError.style.display = "block";
  } else {
    passwordCheckError.style.display = "none";
  }
}

function checkSignup(event) {
  if (event.type === "click" || event.key === "Enter") {
    event.preventDefault();

    // 각각의 입력값을 체크
    checkEmail();
    checkPassword();
    checkSamePassword();

    if (
      emailError.style.display === "none" &&
      passwordError.style.display === "none" &&
      passwordCheckError.style.display === "none"
    ) {
      const signupData = {
        email: emailInput.value,
        password: passwordInput.value,
      };
      // 서버로 유효한 회원가입 형식 체크
      fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(signupData),
      }).then((response) => {
        if (response.status == 200) {
          window.location.href = "/folder.html";
        }
      });
    }
  }
}

// 이메일 입력란 포커스 떠날 때 이벤트 리스너 등록
emailInput.addEventListener("focusout", checkEmail);

// 비밀번호 입력란 포커스 떠날 때 이벤트 리스너 등록
passwordInput.addEventListener("focusout", checkPassword);

// 비밀번호 확인란 입력 할 때 이벤트 리스너 등록
passwordCheckInput.addEventListener("input", checkSamePassword);

// 회원가입 이벤트 리스너 등록
signupButton.addEventListener("click", checkSignup);

// 엔터 버튼 눌렀을때 모든 입력란 초기화되는 기본동작 막기
document.addEventListener("keydown", checkSignup);
