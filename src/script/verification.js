import {
    validateEmail,
    validatePassword,
    email,
    password,
    emailError,
    passwordError,
} from "./sign.js";
import { createError, clearError } from "./error/errorRelated.js";

export const confirmPassword = document.querySelector("#sign_confirm_password");
const confirmPasswordError = document.querySelector("#error_confirm_password");
const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
const userInfo = {
    email: "test@codeit.com",
    password: "codeit101",
};

// 이메일 유효성 검사
export function isValidEmail(email) {
    return emailRegex.test(email);
}

// 비밀번호 유효성 검사
export function isValidPassword(password) {
    return passwordRegex.test(password);
}

// 이메일 중복 검사
export function checkEmail(email) {
    const emailData = {
        email: email,
    };

    return fetch("https://bootcamp-api.codeit.kr/api/check-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("이메일 중복");
            }
            return response.text();
        })
        .then((result) => {
            console.log("중복된 이메일 없음");
            return true;
        })
        .catch((error) => {
            console.log(error);
            return false;
        });
}

// 사용중인 이메일 검사
export async function duplicateEmail() {
    if (!validateEmail()) {
        return false;
    }

    const isDuplicate = await checkEmail(email.value);

    if (!isDuplicate) {
        createError(email, emailError, "이미 사용 중인 이메일입니다.");
        return false;
    }

    return true;
}

// 비밀번호 조합 확인
export function checkPassword() {
    if (!validatePassword()) {
        return false;
    }
    if (!isValidPassword(password.value)) {
        createError(password, passwordError, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
        return false;
    }
    return true;
}

// 비밀번호 확인 검사
export function checkConfirmPassword() {
    const isConfirmPassword = password.value === confirmPassword.value;

    if (!isConfirmPassword) {
        createError(confirmPassword, confirmPasswordError, "비밀번호가 다릅니다.");
        return false;
    }
    clearError(confirmPassword, confirmPasswordError);
    return true;
}

// 로그인 검사
export function checkLogin(email, password) {
    const signInData = {
        email: email,
        password: password,
    };

    return fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(signInData),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("로그인 실패");
            }
            return response.json();
        })
        .then((result) => {
            console.log("로그인 성공");
            localStorage.setItem("accessToken", result.data.accessToken);
            return true;
        })
        .catch((error) => {
            console.error(error);
            return false;
        });
}

// 회원가입 검사
export async function checkSignUp(email, password) {
    const isDuplicateEmail = await duplicateEmail();
    const isPasswordValid = checkPassword();
    const isConfirmPasswordValid = checkConfirmPassword();
    const userInfo = {
        email: email,
        password: password,
    };

    if (isDuplicateEmail && isPasswordValid && isConfirmPasswordValid) {
        return fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("회원가입 실패");
                }
                return response.json();
            })
            .then((result) => {
                localStorage.setItem("accessToken", result.data.accessToken);
                return true;
            })
            .catch((error) => {
                console.error(error);
                return false;
            });
    }
}
