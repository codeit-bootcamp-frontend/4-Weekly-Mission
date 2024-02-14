export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const errorMessage = {
    emptyEmail: '이메일을 입력해주세요.',
    emptyPassword: '비밀번호를 입력해주세요.',
    unValidEmailFormat: '올바른 이메일 주소가 아닙니다.',
    unValidEmail: '이메일을 확인해 주세요.',
    unValidPassword: '비밀번호를 확인해 주세요.',
    alreadyUseEamil: '이미 사용중인 이메일입니다.',
    unValidPasswordFormat: '비밀번호 영문,숫자 조합 8자 이상 입력해 주세요.',
    differPassword: '비밀번호가 일치하지 않아요.'
}

export const validation = {
    isEmpty(email) {
        return email === "";
    },
    isUnvalidEmail(email, password) {
        return email !== "test@codeit.com" && password === "codeit101";
    },
    isUnvalidPassowrd(email, password) {
        return email === "test@codeit.com" && password !== "codeit101";
    },
    isValidSignin(email, password) {
        return email === "test@codeit.com" && password === "codeit101";
    },
    isAlreadyUse(email) {
        return email === "test@codeit.com";
    },
    isDifferentPassowrd(password, passwordcheck) {
        return password !== passwordcheck;
    },
    isValidSignup(email, password, passwordcheck) {
        return (
            emailRegex.test(email) &&
            email !== "test@codeit.com" &&
            passwordRegex.test(password) &&
            password === passwordcheck
        );
    },
    isUnvalidSignupEmail(email, password, passwordcheck) {
        return (
            !emailRegex.test(email) ||
            email === "test@codeit.com" &&
            passwordRegex.test(password) &&
            password === passwordcheck
        );
    },
    isUnvalidSignupPassword(email, password, passwordcheck) {
        return (
            !passwordRegex.test(password) ||
            password !== passwordcheck &&
            emailRegex.test(email) &&
            email !== "test@Codeit.com"
        );
    }
}

export function showError(textBox, inputBox, message) {
    textBox.classList.remove('none');
    inputBox.classList.add('error-redline')
    textBox.textContent = message;
}

export function hideError(textBox, inputBox) {
    textBox.classList.add('none');
    inputBox.classList.remove('error-redline')
}

