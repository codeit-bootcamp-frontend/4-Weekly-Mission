// // 이메일 입력
// const querySelector = (selector) => document.querySelector(selector);

// const emailInput = querySelector("#email-input");
// const emailErrorMessage = querySelector("#email-error-message");

// emailInput.addEventListener("focusout", validateEmailInput);

// function validateEmailInput(emailInput, emailErrorMessage, isValidateEmail, showEmailErrorMessage, hideEmailErrorMessage) {
//   const email = emailInput.value.trim();

//   if (email === "") {
//     showEmailErrorMessage(emailErrorMessage, "이메일을 입력해 주세요.");
//     return;
//   }

//   if (!isValidateEmail(email)) {
//     showEmailErrorMessage(emailErrorMessage, "올바른 이메일 주소가 아닙니다.");
//     return;
//   }

//   hideEmailErrorMessage(emailInput, emailErrorMessage);
// }

// function isValidateEmail(email) {
//   return EMAIL_REGEX.test(email);
// }

// function showEmailErrorMessage(message) {
//   emailErrorMessage.textContent = message;
//   emailErrorMessage.classList.add("show");
//   emailInput.classList.add("sign-input-error");
//   emailInput.classList.add("error-focus");
// }

// function hideEmailErrorMessage() {
//   emailErrorMessage.textContent = "";
//   emailErrorMessage.classList.remove("show");
//   emailInput.classList.remove("sign-input-error");
//   emailInput.classList.remove("error-focus");
// }

// export { emailInput, emailErrorMessage, validateEmailInput, isValidateEmail, showEmailErrorMessage, hideEmailErrorMessage };
