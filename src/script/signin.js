import {
    validateEmail,
    validatePassword,
    toggleEye,
    email,
    password,
    emailError,
    passwordError,
    eyeButton,
} from "./sign.js";
import { createError } from "./error/errorRelated.js";
import { checkUserInfo } from "./verification.js";

const loginButton = document.querySelector(".login_button");

// 로그인
function login(event) {
    event.preventDefault();
    const isLogin = checkUserInfo(email.value, password.value);

    if (isLogin) {
        window.location.href = "/folder.html";
        return;
    }
    createError(email, emailError, "이메일을 확인해 주세요.");
    createError(password, passwordError, "비밀번호를 확인해 주세요.");
}

// 이벤트 핸들러
email.addEventListener("focusout", validateEmail);
password.addEventListener("focusout", validatePassword);
eyeButton.addEventListener("click", () => toggleEye(password));
loginButton.addEventListener("click", login);
