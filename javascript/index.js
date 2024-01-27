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
    let exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    return exptext.test(emailAdress);
}
// focus-out email
function eventFocusOutEmail() {
    // no email value
    if(inputEmail.value === "") {
        if(inputBoxEmail.lastElementChild === inputEmail) {
            const nothingInput = document.createElement("p");
            nothingInput.textContent = "이메일을 입력해주세요";
            inputBoxEmail.append(nothingInput);

            inputEmail.classList.add('error-border');
            nothingInput.classList.add('error-text');
        } else {
            inputBoxEmail.lastElementChild.textContent = "이메일을 입력해주세요";
        }
    }
    // not email form
    else if(!isValidEmail(inputEmail.value)) {
        if(inputBoxEmail.lastElementChild === inputEmail) {
            const invalidInput = document.createElement("p");
            invalidInput.textContent = "올바른 이메일 주소가 아닙니다.";
            inputBoxEmail.append(invalidInput);

            inputEmail.classList.add('error-border');
            invalidInput.classList.add('error-text');
        } else {
            inputBoxEmail.lastElementChild.textContent = "올바른 이메일 주소가 아닙니다.";
        }
    }
    // error message remove
    else if(isValidEmail(inputEmail.value)) {
        if(inputBoxEmail.lastElementChild !== inputEmail) {
            inputBoxEmail.lastElementChild.remove();
            inputEmail.classList.remove('error-border');
        }
    }
}
// focus-out password
function eventFocusOutPassword() {
    // no password value
    if(inputPassword.value === "") {
        if(inputBoxPassword.lastElementChild === inputPassword) {
            const nothingInput = document.createElement("p");
            nothingInput.textContent = "비밀번호를 입력해주세요.";
            inputBoxPassword.append(nothingInput);

            inputPassword.classList.add('error-border');
            nothingInput.classList.add('error-text');
        } else {
            inputBoxPassword.lastElementChild.textContent = "비밀번호를 입력해주세요.";
        }
    }
    else {
        if(inputBoxPassword.lastElementChild !== inputPassword) {
            inputBoxPassword.lastElementChild.remove();
            inputPassword.classList.remove('error-border');
        }
    }
}
// login button click
function eventClickBtn() {
    if(inputEmail.value === "test@codeit.com" && inputPassword.value === "codeit101") {
        window.location.href = "/folder"
    }
    if(inputEmail.value !== "test@codeit.com") {
        if(inputBoxEmail.lastElementChild === inputEmail) {
            const invalidInput = document.createElement("p");
            invalidInput.textContent = "아이디를 확인해주세요.";
            inputBoxEmail.append(invalidInput);

            inputEmail.classList.add('error-border');
            invalidInput.classList.add('error-text');
        } else {
            inputBoxEmail.lastElementChild.textContent = "아이디를 확인해주세요.";
        }
    }
    if(inputPassword.value !== "codeit101") {
        if(inputBoxPassword.lastElementChild === inputPassword) {
            const nothingInput = document.createElement("p");
            nothingInput.textContent = "비밀번호를 확인해주세요.";
            inputBoxPassword.append(nothingInput);

            inputPassword.classList.add('error-border');
            nothingInput.classList.add('error-text');
        } else {
            inputBoxPassword.lastElementChild.textContent = "비밀번호를 확인해주세요.";
        }
    }
}
// press Enter
function eventPressEnter(e) {
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
document.addEventListener('keyup', eventPressEnter);
eyeButton.addEventListener('click', eventClickEye);