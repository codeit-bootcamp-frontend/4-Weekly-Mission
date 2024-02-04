import { createError, clearError } from "./error/errorRelated.js";
import { isValidEmail } from "./verification.js";

export const email = document.querySelector("#sign_email");
export const password = document.querySelector("#sign_password");
export const emailError = document.querySelector("#error_email");
export const passwordError = document.querySelector("#error_password");
export const eyeButton = document.querySelector(".eye_button");

// 이메일 검사
export function validateEmail() {
    const isEmpty = email.value.trim() === "";

    // 이메일 값이 없는 경우
    if (isEmpty) {
        createError(email, emailError, "이메일을 입력해 주세요.");
        return false;
    }
    // 올바른 이메일 주소가 아닐 경우
    if (!isValidEmail(email.value)) {
        createError(email, emailError, "올바른 이메일 주소가 아닙니다.");
        return false;
    }
    // 이메일 값이 있는 경우
    clearError(email, emailError);
    return true;
}

// 비밀번호 검사
export function validatePassword() {
    const isEmpty = password.value.trim() === "";

    // 비밀번호 값이 없는 경우
    if (isEmpty) {
        createError(password, passwordError, "비밀번호를 입력해 주세요.");
        return false;
    }
    // 비밀번호 값이 있는 경우
    clearError(password, passwordError);
    return true;
}

// 비밀번호 토글
export function toggleEye(target) {
    const inputType = target.type === "password" ? "text" : "password";
    target.type = inputType;
}
