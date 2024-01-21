const emailInput = document.getElementById("input-email-signin");
const passwordInput = document.getElementById("input-password-signin");
const signinForm = document.getElementById("signin-form");


const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

signinForm.addEventListener("submit", function (event) {
    event.preventDefault();
    handleSignin();
});

emailInput.addEventListener("focusout", function () {
    isValidateEmail();
});

passwordInput.addEventListener("focusout", function () {
    validatePassword();
});

function handleSignin() {
    window.location.href = "/folder";
}

function isValidateEmail() {
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        showError(emailInput, "이메일을 입력해주세요.");
    } else if (!emailValidate.test(emailValue)) {
        showError(emailInput, "올바른 이메일 주소가 아닙니다.");
    } else {
        hideError(emailInput);
    }
}

function validatePassword() {
    const passwordValue = passwordInput.value.trim();

    if (passwordValue === "") {
        showError(passwordInput, "비밀번호를 입력해주세요.");
    } else {
        hideError(passwordInput);
    }
}

function showError(input, message) {
    const errorDiv = input.nextElementSibling;
    errorDiv.textContent = message;
    errorDiv.style.color = "var(--Linkbrary-red, #FF5B56)";
    errorDiv.style.fontFamily = "Pretendard";
    errorDiv.style.fontSize = "0.875rem"
    errorDiv.style.paddingTop = "0.38rem"
    input.style.border = "1px solid var(--Linkbrary-red, #FF5B56)";
}

function hideError(input) {
    const errorDiv = input.nextElementSibling;
    errorDiv.textContent = "";
    input.style.border = "1px solid var(--Linkbrary-gray20, var(--gray-3))";
}
