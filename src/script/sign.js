const email_input = document.querySelector("#signin_email");
const password_input = document.querySelector("#signin_password");
const error_email = document.querySelector("#error_email");
const error_password = document.querySelector("#error_password");
const eyes = document.querySelector(".eye_button");

// 이메일 검사
function validateEmail() {
    // 이메일 값이 없는 경우
    if (email_input.value.trim() === "") {
        error_email.innerText = "이메일을 입력해 주세요.";
        error_email.style.display = "block";
    }
    // 올바른 이메일 주소가 아닐 경우
    else if (!isValidEmail(email_input.value)) {
        error_email.innerText = "올바른 이메일 주소가 아닙니다.";
        error_email.style.display = "block";
    }
    // 이메일 값이 있는 경우
    else {
        error_email.style.display = "none";
    }
}

// 비밀번호 검사
function validatePassword() {
    // 비밀번호 값이 없는 경우
    if (password_input.value.trim() === "") {
        error_password.innerText = "비밀번호를 입력해 주세요.";
        error_password.style.display = "block";
    }
    // 비밀번호 값이 있는 경우
    else {
        error_password.style.display = "none";
    }
}

//이메일 유효성 검사
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 로그인
function login() {
    if (email_input.value === "test@codeit.com" && password_input.value === "codeit101") {
        window.location.href = "/folder";
    } else {
        if (error_email.style.display === "none") {
            error_email.innerText = "이메일을 확인해 주세요.";
            error_email.style.display = "block";
        }
        if (error_password.style.display === "none") {
            error_password.innerText = "비밀번호를 확인해 주세요.";
            error_password.style.display = "block";
        }
    }
}

// 비밀번호 토글
function toggleEye() {
    if (password_input.type === "password") {
        password_input.type = "text";
        eyes.style.backgroundImage = "url('../src/images/eye-on.svg')";
    } else {
        password_input.type = "password";
        eyes.style.backgroundImage = "url('../src/images/eye-off.svg')";
    }
}
