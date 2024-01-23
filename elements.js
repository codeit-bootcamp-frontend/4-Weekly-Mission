const querySelector = (selector) => document.querySelector(selector);

const form = querySelector(".fm-input-wrap");
const btn = querySelector(".btn-submit");

const emailMsg = querySelector(".error-email");
const passwordMsg = querySelector(".error-pw");
const emailInput = querySelector(".input-email");
const passwordInput = querySelector(".input-pw");
const passwordCheck = querySelector(".input-pw-check");
const passwordCheckMsg = querySelector(".error-pw-check");

export { form, btn, emailMsg, passwordMsg, emailInput, passwordInput, passwordCheck, passwordCheckMsg };
