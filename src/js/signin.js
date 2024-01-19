const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");

const checkEmailIsValid = (e) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const errorMessage = e.target.nextElementSibling;

  if (e.target.value === "") {
    errorMessage.textContent = "이메일을 입력해 주세요.";
    e.target.classList.add("error_box");
  } else if (!emailRegex.test(e.target.value)) {
    errorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
    e.target.classList.add("error_box");
  } else {
    errorMessage.textContent = "";
    e.target.classList.remove("error_box");
  }
};

const checkPasswordIsValid = (e) => {
  const errorMessage = e.target.nextElementSibling.nextElementSibling;
  if (e.target.value === "") {
    errorMessage.textContent = "비밀번호를 입력해 주세요.";
    e.target.classList.add("error_box");
  } else {
    errorMessage.textContent = "";
    e.target.classList.remove("error_box");
  }
};

inputEmail.addEventListener("focusout", checkEmailIsValid);
inputPassword.addEventListener("focusout", checkPasswordIsValid);
