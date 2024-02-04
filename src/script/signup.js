import { email, password, toggleEye, eyeButton } from "./sign.js";
import {
    duplicateEmail,
    checkPassword,
    checkConfirmPassword,
    checkSignUp,
    confirmPassword,
} from "./verification.js";

const confirmEyeButton = document.querySelector(".confirm_eye_button");
const signupButton = document.querySelector(".signup_button");

async function signup(event) {
    event.preventDefault();
    const isSignUp = await checkSignUp(email.value, password.value);

    if (isSignUp) {
        window.location.href = "/folder.html";
        return;
    }
}

// 페이지 진입 시 accessToken 확인
function checkAccessToken() {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
        window.location.href = "/folder.html";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    checkAccessToken();
});

// 이벤트 핸들러
email.addEventListener("focusout", duplicateEmail);
password.addEventListener("focusout", checkPassword);
eyeButton.addEventListener("click", () => toggleEye(password));
confirmPassword.addEventListener("focusout", checkConfirmPassword);
confirmEyeButton.addEventListener("click", () => toggleEye(confirmPassword));
signupButton.addEventListener("click", signup);
