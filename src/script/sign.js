const email_input = document.querySelector("#signin_email");
const password_input = document.querySelector("#signin_password");
const email_error = document.querySelector("#email_error");
const password_error = document.querySelector("#password_error");
const eyes = document.querySelector(".eye_button");
const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

// 이메일 검사
function validateEmail() {
    // 이메일 값이 없는 경우
    if (email_input.value.trim() === "") {
        createError(email_input, email_error, "이메일을 입력해 주세요.");
        return;
    }
    // 올바른 이메일 주소가 아닐 경우
    else if (!isValidEmail(email_input.value)) {
        createError(email_input, email_error, "올바른 이메일 주소가 아닙니다.");
        return;
    }
    // 이메일 값이 있는 경우
    else {
        clearError(email_input, email_error);
    }
}

// 비밀번호 검사
function validatePassword() {
    // 비밀번호 값이 없는 경우
    if (password_input.value.trim() === "") {
        createError(password_input, password_error, "비밀번호를 입력해 주세요.");
        return;
    }
    // 비밀번호 값이 있는 경우
    else {
        clearError(password_input, password_error);
    }
}

// 이메일 유효성 검사
function isValidEmail(email) {
    return emailRegex.test(email);
}

// 로그인
function login(event) {
    event.preventDefault();
    if (email_input.value === "test@codeit.com" && password_input.value === "codeit101") {
        window.location.href = "/folder";
    } else {
        if (email_error.style.display === "none") {
            createError(email_input, email_error, "이메일을 확인해 주세요.");
        }
        if (password_error.style.display === "none") {
            createError(password_input, password_error, "비밀번호를 확인해 주세요.");
        }
    }
}

// 비밀번호 토글
function toggleEye() {
    const inputType = password_input.type === "password" ? "text" : "password";
    password_input.type = inputType;
}

// 에러 발생
function createError(input, error, str) {
    changeBorder(input);
    addErrorMessage(error, str);
}

// 에러 해결
function clearError(input, error) {
    changeBorder(input, "gray20");
    deleteErrorMessage(error);
}

// 테두리 색 바꾸기
function changeBorder(value, color = "red") {
    value.style.border = `1px solid var(--Linkbrary-${color})`;
}

// 에러 메세지 추가
function addErrorMessage(value, str) {
    value.innerText = str;
    value.style.display = "block";
}

// 에러 메세지 삭제
function deleteErrorMessage(value) {
    value.style.display = "none";
}
