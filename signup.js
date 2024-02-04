//이메일 형식
const myEmail = "test@codeit.com";

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

// 이메일 유효성 검사
const emailInput = document.querySelector(".sign-input");
const errorEmail = document.querySelector("#error-message-email");

emailInput.addEventListener("focusout", function (event) {
  const email = event.target.value;

  if (email === "") {
    errorEmail.innerHTML = "이메일을 입력하세요.";
    return;
  }
  if (!validateEmail(email)) {
    errorEmail.innerHTML = "올바른 이메일 주소가 아닙니다.";
    return;
  }
  if (validateEmail(email)) {
    errorEmail.innerHTML = "";
  }
  // 이미 존재하는 이메일.
  if (email === myEmail) {
    errorEmail.innerHTML = "이미 사용 중인 이메일입니다.";
  }
});

//비밀번호 형식
function validatePassword(password) {
  const regexExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return regexExp.test(password);
}

// 비밀번호 유효성 검사.
const passwordInput = document.querySelector("#password-input");
const signPassword = document.querySelector("#sign-password");
const errorPassword = document.querySelector("#error-message-password");

passwordInput.addEventListener("focusout", function (event) {
  const password = event.target.value;
  if (password === "") {
    errorPassword.innerHTML = "비밀번호 입력하세요.";
    return;
  }
  if (!validatePassword(password)) {
    errorPassword.innerHTML = "비밀번호 형식을 지켜주세요.";
    return;
  }
  if (validatePassword(password)) {
    errorPassword.innerHTML = "";
    return;
  }
});

signPassword.addEventListener("focusout", function (event) {
  const signpassword = event.target.value;
  const password = passwordInput.value;
  if (signpassword !== password) {
    errorPassword.innerHTML = "비밀번호가 일치하지 않습니다.";
    return;
  }
  if (signPassword === password) {
    errorPassword.innerHTML = "";
    return;
  }
});
// 상수 선언
const checkEmailUrl = "https://bootcamp-api.codeit.kr/api/check-email";
const signUpUrl = "https://bootcamp-api.codeit.kr/api/sign-up";
const $myEmail = "test@codeit.com";

// 이메일 중복 확인 함수
async function checkEmail(email) {
  try {
    const response = await fetch(checkEmailUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });

    if (response.status === 200) {
      const data = await response.json();
      return data.available;
    } else {
      console.error("이메일 중복 확인 실패:", response.statusText);
      return false;
    }
  } catch (error) {
    console.error("오류 발생:", error);
    return false;
  }
}
// 회원가입 함수
async function signUp(email, password) {
  try {
    const response = await fetch(signUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    if (response.status === 200) {
      window.location.href = "./folder.html"; // 성공 시 페이지 이동
      // 엑세스 토큰 저장
      const body = await response.json();
      localStorage.setItem("accessToken", body.data.accessToken);
    } else {
      console.error("회원가입 실패:", response.statusText);
      // 실패했을 때
    }
  } catch (error) {
    console.error("오류 발생:", error);
  }
}
// 회원가입 버튼 누를 시
const sign = document.querySelector(".sign-form");

sign.addEventListener("submit", function (e) {
  e.preventDefault();
  if (errorEmail.innerHTML === "" && errorPassword.innerHTML === "") {
    signUp(emailInput.value, passwordInput.value);
    return;
  }
  if (errorEmail.innerHTML !== "") {
    emailInput.value = errorEmail.innerHTML;
    return;
  }
  if (errorPassword.innerHTML !== "") {
    errorPassword.innerHTML = "비밀번호를 다시 작성해주세요.";
    return;
  }
});

// 눈모양 버튼 기능 구현
const eyeButtons = document.querySelectorAll(".eye-button");

eyeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const passwordInput = button.previousElementSibling;
    const isPasswordVisible = passwordInput.type === "text";

    if (isPasswordVisible) {
      passwordInput.type = "password";
      button.querySelector("img").src = "./images/eye-off.svg";
    } else {
      passwordInput.type = "text";
      button.querySelector("img").src = "./images/eye-on.svg";
    }
  });
});
