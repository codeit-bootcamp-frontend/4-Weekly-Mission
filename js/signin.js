const emailErrorMessage = document.querySelector(".email-error-message");
const emailInput = document.querySelector(".email-input");

emailInput.addEventListener("blur", function () {
  const EMAIL_REGEX = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

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

  emailErrorMessage.textContent = "";
  emailInput.classList.remove("error-border");
});

const passwordErrorMessages = document.querySelector(".password-error-message");
const passwordInput = document.querySelector(".password-input");

passwordInput.addEventListener("blur", function () {
  if (passwordInput.value === "") {
    passwordErrorMessages.textContent = "비밀번호를 입력해 주세요.";
    passwordInput.classList.add("error-border");
    return;
  }

  passwordErrorMessages.textContent = "";
  passwordInput.classList.remove("error-border");
});

const loginForm = document.querySelector(".login-form");

async function login(event){
  event.preventDefault();
  
  if (isMaster === false) {
    emailErrorMessage.textContent = "이메일을 확인해 주세요.";
    passwordErrorMessages.textContent = "비밀번호를 확인해 주세요.";
    emailInput.classList.add("error-border");
    passwordInput.classList.add("error-border");
    return;
  }
  
  const testLogin = {
    email : 'test@codeit.com',
    password : 'sprint101',
  }

  const response = await fetch ('https://bootcamp-api.codeit.kr/docs/api/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(testLogin),
  });

  if (response.status === 200) {
    const responseData = await response.json();
    window.location.href = "./folder.html";
  }
}

loginForm.addEventListener("submit", login);
