document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const loginButton = document.querySelector(".base-button");
  const togglePasswordIcon = document.querySelector(
    "#togglePasswordVisibility"
  );

  // 이메일 입력 처리 함수 : 유효성 검사 및 에러 메시지 관리
  function handleEmailInput() {
    const emailValue = emailInput.value;
    const emailError = document.querySelector("#emailError");

    // 이메일 입력부분이 비어 있는 경우
    if (!emailValue) {
      emailError.textContent = "이메일을 입력해 주세요.";
      emailInput.classList.add("invalid");
      // 이메일 입력부분이 비어있지 않는 경우 + 이메일 형식이 유효한지 확인 후 유효하지 않은 경우
    } else if (!isValidEmail(emailValue)) {
      emailError.textContent = "올바른 이메일 주소가 아닙니다.";
      emailInput.classList.add("invalid");
      // 이메일 입력부분이 비어있지 않은 경우 + 이메일 형식이 유효한 형식인 경우
    } else {
      emailError.textContent = "";
      emailInput.classList.remove("invalid");
    }
  }

  // 비밀번호 입력 처리 함수 : 유효성 검사 및 에러 메시지 관리
  function handlePasswordInput() {
    const passwordValue = passwordInput.value;
    const passwordError = document.querySelector("#passwordError");

    // 비밀번호 입력부분이 비어 있는 경우
    if (!passwordValue) {
      passwordError.textContent = "비밀번호를 입력해 주세요.";
      passwordInput.classList.add("invalid");
      // 비밀번호 입력부분이 비어있지 않은 경우
    } else {
      passwordError.textContent = "";
      passwordInput.classList.remove("invalid");
    }
  }

  emailInput.addEventListener("blur", handleEmailInput);
  emailInput.addEventListener("input", handleEmailInput);
  passwordInput.addEventListener("blur", handlePasswordInput);
  passwordInput.addEventListener("input", handlePasswordInput);

  loginButton.addEventListener("click", function (event) {
    // 폼의 기본 제출 동작을 방지
    event.preventDefault();

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    const emailError = document.querySelector("#emailError");
    const passwordError = document.querySelector("#passwordError");

    // 정해진 이메일과 비밀번호가 입력된 경우
    if (emailValue === "test@codeit.com" && passwordValue === "codeit101") {
      window.location.href = "component/folder.html";
    } else {
      // 정해진 이메일이 입력되지 않은 경우
      if (emailValue !== "test@codeit.com") {
        emailError.textContent = "이메일을 확인해 주세요";
        emailInput.addEventListener.add("invalid");
      }
      // 정해진 비밀번호가 입력되지 않은 경우
      if (passwordValue !== "codeit101") {
        passwordError.textContent = "비밀번호를 확인해 주세요";
        passwordInput.addEventListener.add("invalid");
      }
    }
  });

  // 비밀번호 보이기/숨기기 토글 함수
  togglePasswordIcon.addEventListener("click", function () {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.src =
      type === "password"
        ? "../image/icons/eye-off.svg"
        : "../image/icons/eye-on.svg";
  });

  // 이메일 주소 유효성 검사 함수
  function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }
});
