import {
    setInputError,
    removeInputError,
    isEmailValid,
    checkingPassword,
    checkPasswordType,
    togglePassword,
    TEST_USER,
} from "./utils.js";

const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");
let emailCheck = false;
emailInput.addEventListener("focusout", (event) => validateEmailInput(event.target.value));
function validateEmailInput(email) {
  if (email === "") {
    setInputError({ input: emailInput, errorMessage: emailErrorMessage },
    "이메일을 입력해주세요.");
    return;
  }
  if (!isEmailValid(email)) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "올바른 이메일 주소가 아닙니다."
    );
    return;
  }
  if (emailInput.value === TEST_USER.email){
    setInputError(
        { input: emailInput, errorMessage: emailErrorMessage },
        "이미 사용 중인 이메일입니다."
      );
      return;
  }
  emailCheck = true;
  removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
}

const passwordInput = document.querySelector("#password");
const checkingPassowrdInput = document.querySelector("#check-password")
const passwordErrorMessage1 = document.querySelector("#password-error-message1");
const passwordErrorMessage2 = document.querySelector("#password-error-message2");
passwordInput.addEventListener("focusout", (event) => validatePasswordInput(event.target, passwordErrorMessage1));
checkingPassowrdInput.addEventListener("focusout", (event) => validatePasswordInput(event.target, passwordErrorMessage2)
);

let passwordCheck = false;
let isPasswordSame = false;
function validatePasswordInput(inputedPassword, errorMessage) {
const password = inputedPassword.value;
  if (password === "") {
    setInputError(
      { input: inputedPassword, errorMessage: errorMessage },
      "비밀번호를 입력해주세요."
    );
    return;
  }
  if(inputedPassword === passwordInput && (inputedPassword.value.trim().length < 8 || checkPasswordType(inputedPassword.value))){
    setInputError(
        { input: inputedPassword, errorMessage: errorMessage },
        "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
      );
      return;
  }
  passwordCheck = true;
  if(inputedPassword === checkingPassowrdInput && !checkingPassword(passwordInput.value, checkingPassowrdInput.value)){
    setInputError(
        { input: checkingPassowrdInput, errorMessage: passwordErrorMessage2 },
        "비밀번호가 일치하지 않아요."
    )
    return;
}
  isPasswordSame = true;
  removeInputError({ input: inputedPassword, errorMessage: errorMessage });
}

const passwordToggleButton = document.querySelector("#password-toggle");
const checkingPasswordToggleButton = document.querySelector("#checking-password-toggle");

passwordToggleButton.addEventListener("click", () =>
  togglePassword(passwordInput, passwordToggleButton)
);
checkingPasswordToggleButton.addEventListener("click", () =>
  togglePassword(checkingPassowrdInput, checkingPasswordToggleButton)
);



const signForm = document.querySelector("#form");
const submitButton = document.querySelector("#submit-button");
signForm.addEventListener("submit", submitForm);

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      submitButton.click();
  }
});

submitButton.addEventListener("click", function(){
    submitForm();
});

function submitForm(event) {
 event.preventDefault();
   if (emailCheck && passwordCheck && isPasswordSame) {
    location.href = "/folder";
    return;
  } else {
    validateEmailInput(emailInput.value, emailErrorMessage)
    validatePasswordInput(passwordInput, passwordErrorMessage1)
    validatePasswordInput(checkingPassowrdInput,passwordErrorMessage2)
  }
};



