import { email, password, emailError, passwordError, eyeButton } from "./sign.js";
import { validateEmail, validatePassword, toggleEye } from "./sign.js";
import createError from "./error/createError.js";
import clearError from "./error/clearError.js";

const confirmPassword = document.querySelector("#sign_confirm_password");
const confirmPasswordError = document.querySelector("#error_confirm_password");
const confirmEyeButton = document.querySelector(".confirm_eye_button");
const signupButton = document.querySelector(".signup_button");
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

// 사용중인 이메일 검사
function duplicateEmail() {
    const isDuplicate = email.value === "test@codeit.com";

    if (isDuplicate) {
        createError(email, emailError, "이미 사용 중인 이메일입니다.");
    } else {
        validateEmail();
    }
}

// 비밀번호 조합 확인
function checkPassword() {
    if (!isValidPassword(password.value)) {
        createError(password, passwordError, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    } else {
        validatePassword();
    }
}

// 비밀번호 확인 검사
function checkConfirmPassword() {
    const isConfirmPassword = password.value === confirmPassword.value;

    if (!isConfirmPassword) {
        createError(confirmPassword, confirmPasswordError, "비밀번호가 다릅니다.");
    } else {
        clearError(confirmPassword, confirmPasswordError);
    }
}

// 비밀번호 유효성 검사
function isValidPassword(password) {
    return passwordRegex.test(password);
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
        window.location.href = "/folder";
    }
}

function confirmToggleEye() {
    const inputType = confirmPassword.type === "password" ? "text" : "password";
    confirmPassword.type = inputType;
}

// 이벤트 핸들러
email.addEventListener("focusout", () => duplicateEmail());
password.addEventListener("focusout", () => checkPassword());
eyeButton.addEventListener("click", () => toggleEye());
confirmPassword.addEventListener("focusout", () => checkConfirmPassword());
confirmEyeButton.addEventListener("click", () => confirmToggleEye());
signupButton.addEventListener("click", (e) => signup(e));
