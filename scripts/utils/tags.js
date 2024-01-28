const $form = document.getElementById('sign-form');
const $emailInput = document.getElementById('email');
const $passwordInput = document.getElementById('password');
const $confirmPasswordInput = document.getElementById('password-check');
const $btnEye = document.querySelectorAll('.ico-eye');

const findErrorMessage = node => node.parentElement.nextElementSibling;

export { $form, $emailInput, $passwordInput, $confirmPasswordInput, $btnEye, findErrorMessage };
