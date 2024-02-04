import { validation, showError, hideError, checkAccessToken } from "./module.js";
import { EMAILREGEX, ERROREMEESAGE } from "./constants.js";


const emailInput = document.getElementById("signin-email-input");
const emailErrorMessage = document.querySelector(".signin-email-error");
const passwordInput = document.getElementById("signin-password-input");
const passwordErrorMessage = document.querySelector(".signin-password-error");
const loginBtn = document.querySelector(".login-btn");
const eyeOff = document.querySelector(".eye-off");
const eyeOn = document.querySelector(".eye-on");

//이메일 에러 확인

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

//비밀번호 에러 확인

function errorPassword() {
    const passwordValue = passwordInput.value;
    if (validation.isEmptyPassword(passwordValue)) {
        showError(passwordErrorMessage, passwordInput, ERROREMEESAGE.EMPTYPASSWORD);
    } else {
        hideError(passwordErrorMessage, passwordInput);
    }
}

// 입력값 확인

async function checkValidation() {
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    try {
        const userData = {
            email: emailValue,
            password: passwordValue
        };

        const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })

        if (response.ok) {
            response.json().then(data => {
                localStorage.setItem('accessToken', data.accessToken);
                checkAccessToken();
            });
        } else {
            showError(emailErrorMessage, emailInput, ERROREMEESAGE.UNVALIDEMAIL);
            showError(passwordErrorMessage, passwordInput, ERROREMEESAGE.UNVALIDPASSWORD);
        }
    } catch (error) {
        console.error("Error:", error);
    };
}


function toggleShowPassword() {
    passwordInput.type = passwordInput.type === 'text' ? 'password' : 'text';
    eyeOff.classList.toggle('none');
    eyeOn.classList.toggle('none');
}

function enterBtn(e) {
    if (e.key === "Enter") {
        checkValidation();
        e.preventDefault();
    }

}






emailInput.addEventListener("blur", errorEmail);
passwordInput.addEventListener("blur", errorPassword);
loginBtn.addEventListener("click", checkValidation);
window.addEventListener("keypress", enterBtn);
eyeOff.addEventListener("click", toggleShowPassword);
eyeOn.addEventListener("click", toggleShowPassword);

