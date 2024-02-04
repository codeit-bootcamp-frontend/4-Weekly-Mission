import {REGEX_EMAIL, REGEX_PASSWORD} from './regex.js';
import {inputBoxEmail, inputPassword, eyeImg} from './constants.js';


async function checkUsableEmail(givenEmail) {
    try {
        const signupEmail = {
            email: givenEmail,
        };
        const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupEmail),
        })
        if(response.ok) {
            return true;
        } else {
            throw new Error('Duplicated Email.');
        }
    }
    catch (error) {
        console.log(error);
        showErrorMessage(inputBoxEmail, "중복된 이메일 입니다.");
    }
}

function isValidEmail(emailAdress) {
    return REGEX_EMAIL.test(emailAdress);
}
function isValidPassword(passwordValue) {
    return REGEX_PASSWORD.test(passwordValue);    
}

function showErrorMessage(element, message) {
    const inputChild = element === inputBoxEmail ? element.children[1] : element.children[2];
    const lastChild = element.lastElementChild;

    if(lastChild === inputChild) {
        const newErrorTag = document.createElement("p");
        newErrorTag.textContent = message;
        
        element.append(newErrorTag);
        inputChild.classList.add('error-border');
        newErrorTag.classList.add('error-text');
    } else {
        lastChild.textContent = message;
    }
}
function removeMessage(element) {
    const inputChild = element === inputBoxEmail ? element.children[1] : element.children[2];
    const lastChild = element.lastElementChild;
    if(lastChild !== inputChild) {
        lastChild.remove();
        inputChild.classList.remove('error-border');
    }
}
function clickEyeIcon(element, image) {
    if(element.type === "password") {
        element.type = "text";
        image.src = "./images/eye-on.png";
    } else {
        element.type = "password";
        image.src = "./images/eye-off.png";
    }
}
// press eye-icon
function eventClickEye() {
    clickEyeIcon(inputPassword, eyeImg);
}

export {checkUsableEmail, isValidEmail, isValidPassword, showErrorMessage, removeMessage, clickEyeIcon, eventClickEye}