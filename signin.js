const form = document.querySelector(".fm-input-wrap");

const showErrorMsg = (e) => {
  const message = e.target.value;

  if (e.target.type === "email") {
    const emailMsgBox = document.querySelector(".error-email");

    message
      ? emailValid(e.target.value)
        ? (emailMsgBox.innerHTML = "")
        : (emailMsgBox.innerHTML = "올바른 이메일 주소가 아닙니다.")
      : (emailMsgBox.innerHTML = "이메일을 입력해 주세요.");

  } else if (e.target.type === "password") {
    const passwordMsgBox = document.querySelector(".error-pw");
    message ? passwordMsgBox.innerHTML = "" : passwordMsgBox.innerHTML = "비밀번호를 확인해 주세요."
  }
};

form.addEventListener("focusout", showErrorMsg);

function emailValid(email) {
  regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (!regex.test(email)) {
    return false;
  } else {
    return true;
  }
}

