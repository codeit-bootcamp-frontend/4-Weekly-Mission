const email_input = document.querySelector("#signin_email");
const password_input = document.querySelector("#signin_password");
const error_email = document.querySelector("#error_email");
const error_password = document.querySelector("#error_password");
const eyes = document.querySelector(".eye_button");
const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

// 이메일 검사
function validateEmail() {
    // 이메일 값이 없는 경우
    if (email_input.value.trim() === "") {
        changeBorder(email_input, "red");
        changeError(error_email, "이메일을 입력해 주세요.");
        return;
    }
    // 올바른 이메일 주소가 아닐 경우
    else if (!isValidEmail(email_input.value)) {
        changeBorder(email_input, "red");
        changeError(error_email, "올바른 이메일 주소가 아닙니다.");
        return;
    }
    // 이메일 값이 있는 경우
    else {
        changeBorder(email_input);
        clearError(error_email);
    }
}

// 비밀번호 검사
function validatePassword() {
    // 비밀번호 값이 없는 경우
    if (password_input.value.trim() === "") {
        changeBorder(password_input, "red");
        changeError(error_password, "비밀번호를 입력해 주세요.");
        return;
    }
    // 비밀번호 값이 있는 경우
    else {
        changeBorder(password_input);
        clearError(error_password);
    }
}

//이메일 유효성 검사
function isValidEmail(email) {
    return emailRegex.test(email);
}

// 로그인
function login(event) {
    event.preventDefault();
    if (email_input.value === "test@codeit.com" && password_input.value === "codeit101") {
        window.location.href = "/folder";
    } else {
        if (error_email.style.display === "none") {
            changeBorder(email_input, "red");
            changeError(error_email, "이메일을 확인해 주세요.");
        }
        if (error_password.style.display === "none") {
            changeBorder(email_ipassword_inputnput, "red");
            changeError(error_password, "비밀번호를 확인해 주세요.");
        }
    }
}

// Enter키로 로그인
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        login(event);
    }
});

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

// 테두리 색 바꾸기
function changeBorder(value, color = "gray20") {
    value.style.border = `1px solid var(--Linkbrary-${color})`;
}

// 에러 메세지 추가
function changeError(value, str) {
    value.innerText = str;
    value.style.display = "block";
}

// 에러 메세지 삭제
function clearError(value) {
    value.style.display = "none";
}
