import {idInput,
    passwordInput,
    confirmInput,
    passwordicon,
    confirmicon,
    login,
    idfocusin,
    idfocusout,
    passwordfocusin,
    passwordfocusout,
    confirmfocusin,
    confirmfocusout} from './module.js';
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
confirmicon.addEventListener("click", function() {
    if (confirmInput.type === "password") {
        confirmInput.type = "text";
        confirmicon.src = "./imglogin/eye-on.svg";
    } else {
        confirmInput.type = "password";
        confirmicon.src="./imglogin/eye-off.jpg"
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        login();
    }
});
btn.addEventListener('click', login);
idInput.addEventListener('focusin',idfocusin)
idInput.addEventListener('focusout',idfocusout);
passwordInput.addEventListener('focusin',passwordfocusin);
passwordInput.addEventListener('focusout',passwordfocusout);
confirmInput.addEventListener('focusin',confirmfocusin);
confirmInput.addEventListener('focusout',confirmfocusout);


