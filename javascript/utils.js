import {REGEX_EMAIL, REGEX_PASSWORD} from './regex.js';
import {inputBoxEmail, inputPassword, eyeImg} from './constants.js';

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

export {isValidEmail, isValidPassword, showErrorMessage, removeMessage, clickEyeIcon, eventClickEye}