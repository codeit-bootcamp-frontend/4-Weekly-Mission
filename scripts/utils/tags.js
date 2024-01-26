const $form = document.querySelector(".form-area");
const $emailInput = document.querySelector("#email");
const $passwordInput = document.querySelector("#password");
const $btnEye = document.querySelector(".ico-eye");

const findErrorMessage = (node) => node.parentElement.nextElementSibling;

export { $form, $emailInput, $passwordInput, $btnEye, findErrorMessage };
