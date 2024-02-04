import { validation, showError, hideError, checkAccessToken } from "./module.js";
import { PASSWORDREGEX, ERROREMEESAGE, EMAILREGEX } from "./constants.js";

const emailInput = document.getElementById("signup-email-input");
const emailErrorMessage = document.querySelector(".signup-email-error");
const passwordInput = document.getElementById("signup-password-input");
const passwordErrorMessage = document.querySelector(".signup-password-error");
const passwordCheckInput = document.getElementById("signup-password-check-input");
const passwordCheckErrorMessage = document.querySelector(".signup-password-check-error");
const loginBtn = document.querySelector(".signup-btn");
const eyeOff = document.querySelector(".show-password");
const eyeOn = document.querySelector(".hide-password");
const eyeOffCheck = document.querySelector(".show-password-check");
const eyeOnCheck = document.querySelector(".hide-password-check");

// 이메일 에러 확인

function errorEmail() {
    const emailValue = emailInput.value;
    if (validation.isEmptyEmail(emailValue)) {
        showError(emailErrorMessage, emailInput, ERROREMEESAGE.EMPTYEMAIL);
    } else if (!EMAILREGEX.test(emailValue)) {
        showError(emailErrorMessage, emailInput, ERROREMEESAGE.UNVAILDEMAILFORMAT);
    } else {
        hideError(emailErrorMessage, emailInput);
    }
}

// 비밀번호 에러 확인

function errorPassword() {
    const passwordValue = passwordInput.value;
    if (validation.isEmptyPassword(passwordValue)) {
        showError(passwordErrorMessage, passwordInput, ERROREMEESAGE.EMPTYPASSWORD);
    } else if (!PASSWORDREGEX.test(passwordValue)) {
        showError(passwordErrorMessage, passwordInput, ERROREMEESAGE.UNVAILDPASSOWRDFORMAT);
    } else {
        hideError(passwordErrorMessage, passwordInput);
    }
}

// 비밀번호 비밀번호 확인 일치 여부 확인

function checkPassword() {
    const passwordValue = passwordInput.value;
    const passwordcheckValue = passwordCheckInput.value;
    if (validation.isDifferentPassowrd(passwordValue, passwordcheckValue)) {
        showError(passwordCheckErrorMessage, passwordCheckInput, ERROREMEESAGE.DIFFERPASSOWRD);
    } else {
        hideError(passwordCheckErrorMessage, passwordCheckInput);
    }
}

// 입력값 확인

async function checkValidation() {
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    const passwordCheckValue = passwordCheckInput.value;

    //이메일 확인

    try {
        const userData = {
            email: emailValue,
            password: passwordValue
        };

        if (!EMAILREGEX.test(emailValue)) {
            showError(emailErrorMessage, emailInput, ERROREMEESAGE.UNVALIDEMAIL);
        } else {
            const emailResponse = await fetch("https://bootcamp-api.codeit.kr/api/check-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData.email)
            });

            if (emailResponse.ok) {
                const emailData = await emailResponse.json();
                if (emailData.exists) {
                    showError(emailErrorMessage, emailInput, ERROREMEESAGE.ALREADYUSEEMAIL);
                    return;
                }
            }
        }

        // 비밀번호 확인

        errorPassword();
        checkPassword();

        // 모든 조건을 만족할 경우 회원가입 성공

        if (validation.isValidSignup(emailValue, passwordValue, passwordCheckValue)) {
            const signUpResponse = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            if (signUpResponse.ok) {
                const data = await signUpResponse.json();
                localStorage.setItem('accessToken', data.accessToken);
                checkAccessToken();
            } else {
                showError(emailErrorMessage, emailInput, ERROREMEESAGE.UNVALIDEMAIL);
                showError(passwordErrorMessage, passwordInput, ERROREMEESAGE.UNVALIDPASSWORD);
            }
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

function toggleShowPassword() {
    passwordInput.type = passwordInput.type === 'text' ? 'password' : 'text';
    eyeOff.classList.toggle('none');
    eyeOn.classList.toggle('none');
}

function toggleShowPasswordCheck() {
    passwordCheckInput.type = passwordCheckInput.type === 'text' ? 'password' : 'text';
    eyeOffCheck.classList.toggle('none');
    eyeOnCheck.classList.toggle('none');
}

function enterBtn(e) {
    if (e.key === "Enter") {
        checkValidation();
        e.preventDefault();
    }
}

emailInput.addEventListener("blur", errorEmail);
passwordInput.addEventListener("blur", errorPassword);
passwordCheckInput.addEventListener("blur", checkPassword);
loginBtn.addEventListener("click", checkValidation);
window.addEventListener("keypress", enterBtn);
eyeOff.addEventListener("click", toggleShowPassword);
eyeOn.addEventListener("click", toggleShowPassword);
eyeOffCheck.addEventListener("click", toggleShowPasswordCheck);
eyeOnCheck.addEventListener("click", toggleShowPasswordCheck);

