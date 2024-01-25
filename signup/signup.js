const email = document.querySelector("#email");
const emailError = document.querySelector(".emailError");

function emailOnFocusOut(e) {
  if (!e.target.value?.trim()) {
    emailError.textContent = "이메일을 입력해 주세요.";
    e.target.classList.add("inputError");
    return;
  }
  if (!emailRegex.test(e.target.value)) {
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    e.target.classList.add("inputError");
    return;
  }
  if (e.target.value === TEST_EMAIL) {
    emailError.textContent = "이미 사용 중인 이메일입니다.";
    e.target.classList.add("inputError");
    return;
  }

  emailError.textContent = "";
  e.target.classList.remove("inputError");
}

function emailOnInput(e) {
  emailError.textContent = "";
  e.target.classList.remove("inputError");
}

email.addEventListener("focusout", emailOnFocusOut);
email.addEventListener("input", emailOnInput);
