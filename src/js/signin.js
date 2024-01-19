const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const btnSigninSubmit = document.querySelector("#btn_signin_submit");
const form = document.querySelector("form");

const correctEmail = "test@codeit.com";
const correctPassword = "codeit101";

const checkEmailIsValid = (e) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const errorMessage = e.target.nextElementSibling;

  let isValid = false;

  if (e.target.value === "") {
    errorMessage.textContent = "이메일을 입력해 주세요.";
    e.target.classList.add("error_box");
  } else if (!emailRegex.test(e.target.value)) {
    errorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
    e.target.classList.add("error_box");
  } else {
    errorMessage.textContent = "";
    e.target.classList.remove("error_box");
    isValid = true;
  }
  return isValid;
};

const checkPasswordIsValid = (e) => {
  const errorMessage = e.target.nextElementSibling.nextElementSibling;
  let isValid = false;
  if (e.target.value === "") {
    errorMessage.textContent = "비밀번호를 입력해 주세요.";
    e.target.classList.add("error_box");
    e.target.nextElementSibling.classList.add("large_bottom");
  } else {
    errorMessage.textContent = "";
    e.target.classList.remove("error_box");
    e.target.nextElementSibling.classList.remove("large_bottom");
    isValid = true;
  }
  return isValid;
};

const compareEmail = () => {
  if (inputEmail.value !== correctEmail) {
    inputEmail.nextElementSibling.textContent = "이메일을 확인해 주세요.";
    inputEmail.classList.add("error_box");
  }
  return inputEmail.value === correctEmail;
};

const comparePassword = () => {
  if (inputPassword.value !== correctPassword) {
    inputPassword.nextElementSibling.nextElementSibling.textContent =
      "비밀번호를 확인해 주세요.";
    inputPassword.classList.add("error_box");
    inputPassword.nextElementSibling.classList.add("large_bottom");
  }
  return inputPassword.value === correctPassword;
};

const compareUser = (e) => {
  e.preventDefault();
  const isCorrectEmail = compareEmail();
  const isCorrectPassword = comparePassword();

  if (isCorrectEmail && isCorrectPassword) {
    form.submit();
  }
};

inputEmail.addEventListener("focusout", checkEmailIsValid);
inputPassword.addEventListener("focusout", checkPasswordIsValid);

btnSigninSubmit.addEventListener("click", compareUser);
form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    compareUser(e);
  }
});
