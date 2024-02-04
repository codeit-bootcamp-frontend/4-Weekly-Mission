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
import { createError, clearError } from "./error/errorRelated.js";
import { checkEmail, isValidPassword } from "./verification.js";

const confirmPassword = document.querySelector("#sign_confirm_password");
const confirmPasswordError = document.querySelector("#error_confirm_password");
const confirmEyeButton = document.querySelector(".confirm_eye_button");
const signupButton = document.querySelector(".signup_button");

// 사용중인 이메일 검사
function duplicateEmail() {
    const isDuplicate = checkEmail(email.value);

    if (isDuplicate) {
        createError(email, emailError, "이미 사용 중인 이메일입니다.");
        return;
    }
    validateEmail();
}

// 비밀번호 조합 확인
function checkPassword() {
    if (!isValidPassword(password.value)) {
        createError(password, passwordError, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
        return;
    }
    validatePassword();
}

// 비밀번호 확인 검사
function checkConfirmPassword() {
    const isConfirmPassword = password.value === confirmPassword.value;

    if (!isConfirmPassword) {
        createError(confirmPassword, confirmPasswordError, "비밀번호가 다릅니다.");
        return;
    }
    clearError(confirmPassword, confirmPasswordError);
}

function signup(event) {
    event.preventDefault();
    // duplicateEmail();
    // checkPassword();
    // checkConfirmPassword();
    if (
        emailError.innerText === "" &&
        passwordError.innerText === "" &&
        confirmPasswordError.innerText === ""
    ) {
        window.location.href = "/folder.html";
    }
}

// 이벤트 핸들러
email.addEventListener("focusout", duplicateEmail);
password.addEventListener("focusout", checkPassword);
eyeButton.addEventListener("click", () => toggleEye(password));
confirmPassword.addEventListener("focusout", checkConfirmPassword);
confirmEyeButton.addEventListener("click", () => toggleEye(confirmPassword));
signupButton.addEventListener("click", signup);
