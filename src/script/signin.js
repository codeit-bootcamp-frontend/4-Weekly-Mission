import { email, password, emailError, passwordError, eyeButton } from "./sign.js";
import { validateEmail, validatePassword, toggleEye } from "./sign.js";
import createError from "./error/createError.js";

const loginButton = document.querySelector(".login_button");

// 로그인
function login(event) {
    event.preventDefault();
    if (email.value === "test@codeit.com" && password.value === "codeit101") {
        window.location.href = "/folder";
    } else {
        createError(email, emailError, "이메일을 확인해 주세요.");
        createError(password, passwordError, "비밀번호를 확인해 주세요.");
    }
}

// 이벤트 핸들러
email.addEventListener("focusout", () => validateEmail());
password.addEventListener("focusout", () => validatePassword());
eyeButton.addEventListener("click", () => toggleEye());
loginButton.addEventListener("click", (e) => login(e));
