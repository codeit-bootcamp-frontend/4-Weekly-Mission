const emailErrorMessage = document.querySelector(".email-error-message");
const emailInput = document.querySelector(".email-input");

emailInput.addEventListener("blur", function () {
  const EMAIL_REGEX = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

  if (emailInput.value === "") {
    emailErrorMessage.textContent = "이메일을 입력해 주세요.";
    emailInput.classList.add("error-border");
    return;
  }

  if (emailInput.value.match(EMAIL_REGEX) === null) {
    emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
    emailInput.classList.add("error-border");
    return;
  }

  if (emailInput.value === "test@codeit.com") {
    emailErrorMessage.textContent = "이미 사용 중인 이메일입니다.";
    emailInput.classList.add("error-border");
    return;
  }

  emailErrorMessage.textContent = "";
  emailInput.classList.remove("error-border");
});

const [passwordErrorMessages, passwordConfirmErrorMessage] = document.querySelectorAll(
  ".password-error-message"
);
const [passwordInputs, passwordConfirmInput] = document.querySelectorAll(".password-input");

passwordInputs.addEventListener("blur", function () {
  const TEXT_REGEX = /[a-zA-Z]/;
  const NUMBER_REGEX = /[0-9]/;

  if (
    passwordInputs.value.length < 8 ||
    !passwordInputs.value.match(NUMBER_REGEX) ||
    !passwordInputs.value.match(TEXT_REGEX)
  ) {
    passwordErrorMessages.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    passwordInputs.classList.add("error-border");
    return;
  }

  passwordErrorMessages.textContent = "";
  passwordInputs.classList.remove("error-border");
});

window.addEventListener("keyup", function () {
  if (passwordInputs.value === passwordConfirmInput.value){
    passwordConfirmErrorMessage.textContent="";
    passwordConfirmInput.classList.remove("error-border");
    return;
  }
  passwordConfirmErrorMessage.textContent="비밀번호가 일치하지 않아요.";
  passwordConfirmInput.classList.add("error-border");
});

const signUpForm = document.querySelector(".signup-form");

async function signup(event){
  event.preventDefault();

  const joinData = {
    email: emailInput.value,
    password: passwordInputs.value,
  };

  if (emailInput.classList.contains("error-border")
      ||passwordInputs.classList.contains("error-border")
      ||passwordConfirmInput.classList.contains("error-border")){
    return;
  }

const response = await fetch('https://bootcamp-api.codeit.kr/docs/api/sign-up', {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json',
    },
    body : JSON.stringify(joinData),
  });
  
  if (response.status === 200) {
    const responseData = await response.json();
    window.location.href = "./folder.html";
  }
}

signUpForm.addEventListener("submit", signup);