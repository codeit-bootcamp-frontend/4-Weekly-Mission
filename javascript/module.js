import { EMAILREGEX, PASSWORDREGEX } from "./constants.js";

export const validation = {
    isEmptyEmail(email) {
        return email === "";
    },
    isEmptyPassword(password) {
        return password === "";
    },
    isDifferentPassowrd(password, passwordcheck) {
        return password !== passwordcheck;
    },
    isValidSignup(email, password, passwordcheck) {
        return (
            EMAILREGEX.test(email) &&
            PASSWORDREGEX.test(password) &&
            password === passwordcheck
        );
    },
    isUnvalidSignupEmail(email, password, passwordcheck) {
        return (
            (!EMAILREGEX.test(email) &&
            (PASSWORDREGEX.test(password) && password === passwordcheck)
        );
    },
    isUnvalidSignupPassword(email, password, passwordcheck) {
        return (
            (!PASSWORDREGEX.test(password) &&
            (EMAILREGEX.test(email) && email !== "test@Codeit.com")
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

export function checkAccessToken() {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        window.location.href = '/folder.html';
    }
}
