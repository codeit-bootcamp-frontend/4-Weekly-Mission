const $form = document.querySelector('.form-area');
const $emailInput = document.querySelector('#email');
const $passwordInput = document.querySelector('#password');
const $confirmPasswordInput = document.querySelector('#password-check');
const $btnEye = document.querySelectorAll('.ico-eye');

const findErrorMessage = node => node.parentElement.nextElementSibling;

export { $form, $emailInput, $passwordInput, $confirmPasswordInput, $btnEye, findErrorMessage };
