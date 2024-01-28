import createError from "./error/createError.js";
import clearError from "./error/clearError.js";

const email = document.querySelector("#sign_email");
const password = document.querySelector("#sign_password");
const emailError = document.querySelector("#error_email");
const passwordError = document.querySelector("#error_password");
const eyeButton = document.querySelector(".eye_button");
const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

// 이메일 검사
function validateEmail() {
    const isEmpty = email.value.trim() === "";

    // 이메일 값이 없는 경우
    if (isEmpty) {
        createError(email, emailError, "이메일을 입력해 주세요.");
        return;
    }
    // 올바른 이메일 주소가 아닐 경우
    else if (!isValidEmail(email.value)) {
        createError(email, emailError, "올바른 이메일 주소가 아닙니다.");
        return;
    }
    // 이메일 값이 있는 경우
    else {
        clearError(email, emailError);
    }
}

// 비밀번호 검사
function validatePassword() {
    const isEmpty = password.value.trim() === "";

    // 비밀번호 값이 없는 경우
    if (isEmpty) {
        createError(password, passwordError, "비밀번호를 입력해 주세요.");
    }
    // 비밀번호 값이 있는 경우
    else {
        clearError(password, passwordError);
    }
}

// 비밀번호 토글
function toggleEye() {
    const inputType = password.type === "password" ? "text" : "password";
    password.type = inputType;
}

// 이메일 유효성 검사
function isValidEmail(email) {
    return emailRegex.test(email);
}

export { email, password, emailError, passwordError, eyeButton };
export { validateEmail, validatePassword, toggleEye };
