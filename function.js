import {idInput,
    passwordInput,
    passwordicon,
    signin,
    idfocusin,
    idfocusout,
    passwordfocusin,
    passwordfocusout} from './module.js';

const btn = document.querySelector('.btn-login');

passwordicon.addEventListener("click", function() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordicon.src = "./imglogin/eye-on.svg";
    } else {
        passwordInput.type = "password";
        passwordicon.src="./imglogin/eye-off.jpg"
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        signin();
    }
});
btn.addEventListener('click', signin);
idInput.addEventListener('focusin',idfocusin);
idInput.addEventListener('focusout',idfocusout);
passwordInput.addEventListener('focusin',passwordfocusin);
passwordInput.addEventListener('focusout',passwordfocusout);
