const userInfo = {
    email: "test@codeit.com",
    password: "codeit101",
};

const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

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
    return email === userInfo.email;
}

// 비밀번호 검사
function checkPassword(password) {
    return password === userInfo.password;
}

// 유저정보 검사
export function checkUserInfo(email, password) {
    if (checkEmail(email) && checkPassword(password)) {
        return true;
    }
    return false;
}
