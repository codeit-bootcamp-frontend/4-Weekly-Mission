const email = document.querySelector("#sign_email");
const password = document.querySelector("#sign_password");
const confirmPassword = document.querySelector("#sign_confirm_password");
const emailError = document.querySelector("#error_email");
const passwordError = document.querySelector("#error_password");
const confirmPasswordError = document.querySelector("#error_confirm_password");
const eyes = document.querySelector(".eye_button");
const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

// 이메일 검사
function validateEmail() {
    // 이메일 값이 없는 경우
    if (email.value.trim() === "") {
        createError(email, emailError, "이메일을 입력해 주세요.");
        return;
    }
    // 올바른 이메일 주소가 아닐 경우
    else if (!isValidEmail(email.value)) {
        createError(email, emailError, "올바른 이메일 주소가 아닙니다.");
        return;
    }
    // 이메일 값이 있는 경우
    else {
        clearError(email, emailError);
    }
}

// 사용중인 이메일 검사
function duplicateEmail() {
    const isDuplicate = email.value === "test@codeit.com";

    if (isDuplicate) {
        createError(email, emailError, "이미 사용 중인 이메일입니다.");
    } else {
        validateEmail();
    }
}

// 비밀번호 검사
function validatePassword() {
    // 비밀번호 값이 없는 경우
    if (password.value.trim() === "") {
        createError(password, passwordError, "비밀번호를 입력해 주세요.");
    }
    // 비밀번호 값이 있는 경우
    else {
        clearError(password, passwordError);
    }
}

// 비밀번호 확인 검사
function checkConfirmPassword() {
    const isConfirmPassword = password.value === confirmPassword.value;

    if (isConfirmPassword) {
        createError(confirmPassword, confirmPasswordError, "비밀번호가 다릅니다.");
    }
}

// 이메일 유효성 검사
function isValidEmail(email) {
    return emailRegex.test(email);
}

// 비밀번호 유효성 검사
function isValidPassword(password) {
    return passwordRegex.test(password);
}

// 로그인
function login(event) {
    event.preventDefault();
    if (email.value === "test@codeit.com" && password.value === "codeit101") {
        window.location.href = "/folder";
    } else {
        createError(email, emailError, "이메일을 확인해 주세요.");
        createError(password, passwordError, "비밀번호를 확인해 주세요.");
    }
}

// 비밀번호 토글
function toggleEye() {
    const inputType = password.type === "password" ? "text" : "password";
    password.type = inputType;
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
