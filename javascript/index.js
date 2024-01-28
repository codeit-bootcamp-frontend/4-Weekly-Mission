const USER_EMAIL = "test@codeit.com";
const USER_PASSWORD = "codeit101";

// email input
const inputEmail = document.querySelector(".sign-input");
const inputBoxEmail = document.querySelector(".sign-input-box");
// password input
const inputPassword = document.querySelector(".sign-input#password");
const inputBoxPassword = document.querySelector(".sign-input-box.sign-password");
// login button
const loginButton = document.querySelector(".cta");
// eye button & img
const eyeButton = document.querySelector(".eye-button");
const eyeImg = document.querySelector("#eye-id");

function isValidEmail(emailAdress) {
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    return exptext.test(emailAdress);
}

function showErrorMessage(element, message) {
    const inputChild = element === inputBoxEmail ? element.children[1] : element.children[2];
    console.log(inputChild);
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
// focus-out email
function eventFocusOutEmail() {
    // no email value
    if(inputEmail.value === "") {
        showErrorMessage(inputBoxEmail, "이메일을 입력해주세요");
    }
    // not email form
    else if(!isValidEmail(inputEmail.value)) {
        showErrorMessage(inputBoxEmail, "올바른 이메일 주소가 아닙니다.");
    }
    // error message remove
    else if(isValidEmail(inputEmail.value)) {
        removeMessage(inputBoxEmail);
    }
}
// focus-out password
function eventFocusOutPassword() {
    // no password value
    if(inputPassword.value === "") {
        showErrorMessage(inputBoxPassword, "비밀번호를 입력해주세요")
    }
    else {
        removeMessage(inputBoxPassword);
    }
}
// login button click
function eventClickBtn() {
    if(inputEmail.value === USER_EMAIL && inputPassword.value === USER_PASSWORD) {
        window.location.href = "/folder"
    }
    if(inputEmail.value !== USER_EMAIL) {
        showErrorMessage(inputBoxEmail, "아이디를 확인해주세요.");
    }
    if(inputPassword.value !== USER_PASSWORD) {
        showErrorMessage(inputBoxPassword, "비밀번호를 확인해주세요.");
    }
}
// press Enter
function eventKeyUpEnter(e) {
    if(e.keyCode == 13) {
        eventClickBtn();
    }
}

// press eye-icon
function eventClickEye() {
    if(inputPassword.type === "password") {
        inputPassword.type = "text";
        eyeImg.src = "./images/eye-on.png";
    } else {
        inputPassword.type = "password";
        eyeImg.src = "./images/eye-off.png";
    }
}

inputEmail.addEventListener('focusout', eventFocusOutEmail);
inputPassword.addEventListener('focusout', eventFocusOutPassword);
loginButton.addEventListener('click', eventClickBtn);
document.addEventListener('keyup', eventKeyUpEnter);
eyeButton.addEventListener('click', eventClickEye);