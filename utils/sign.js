import * as DOM from './lib/DOM.js'
import * as input from './lib/inputVerification.js'
import {
  EMAIL_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE,
  EMAIL_REGEX
} from './constant/signVariable.js'

const signEmailSection = DOM.selectElement('.sign-email')
const signPasswordSection = DOM.selectElement('.sign-password')
const signEmailInput = DOM.selectElement('#email-input')
const signPasswordInput = DOM.selectElement('#password-input')
DOM.createTagAndclassWithText(signEmailSection, 'email-error', '')
DOM.createTagAndclassWithText(signPasswordSection, 'password-error', '')
const emailError = signEmailSection.lastChild
const passwordError = signPasswordSection.lastChild
signEmailSection.lastChild.className


function showErrorMsg(inputElement, textElement, text){
  inputElement.classList.add('red-border')
  textElement?.classList.remove('hidden')
  DOM.changeText(textElement, text)
}

// showErrorMsg(signEmailInput, emailError, '안녕')

// 눈 아이콘 버튼
const EYE_BUTTON = DOM.selectElement('.eye-button-icon')

//클래스 이름 상수화
const SHOW_ERROR_CLASS_NAME = 'show-error'
const RED_BORDER_CLASS_NAME = 'red-border'

function handleEmailFocusout(){
  if(input.isFormatValue(signEmailInput)){
    showErrorMsg(signEmailInput, emailError, EMAIL_ERROR_MESSAGE.empty)
    return
  }
  if(input.isRegexMatch(signEmailInput, EMAIL_REGEX)){
    emailError?.classList.add('hidden')
    return
  }
  showErrorMsg(signEmailInput, emailError, EMAIL_ERROR_MESSAGE.invalid)
}

function handleEmailFocusin(){
  signEmailInput.classList.remove('red-border')
}

function handlePasswordFocusout(){
  if(input.isFormatValue(signPasswordInput)){
    showErrorMsg(signPasswordInput, passwordError, PASSWORD_ERROR_MESSAGE.empty)
    return
  }
  passwordError.classList.add('hidden')
}

function handlePasswordFocusin(){
  signPasswordInput.classList.remove('red-border')
}


signEmailInput.addEventListener('focusout',handleEmailFocusout)
signEmailInput.addEventListener('focusin',handleEmailFocusin)
signPasswordInput.addEventListener('focusout', handlePasswordFocusout)
signPasswordInput.addEventListener('focusin', handlePasswordFocusin)









function submitLogin(){
  const emailValue = signEmailInput.value.trim();
  const passwordValue = signPasswordInput.value.trim();
  let correctEmail = 'test@codeit.com'
  let correctPassword = 'codeit101'
  if(emailValue === correctEmail && passwordValue === correctPassword){
    location.href = 'folder.html';
  }else{
    addClassList(EMAIL_VALIDATION_MESSAGE, SHOW_ERROR_CLASS_NAME)
    addClassList(signEmailInput, RED_BORDER_CLASS_NAME)
    removeClassList(INVALID_EMAIL_FORMAT_MESSAGE, SHOW_ERROR_CLASS_NAME)
    removeClassList(EMPTY_EMAIL_ERROR_MESSAGE, SHOW_ERROR_CLASS_NAME)
    addClassList(PASSWORD_VALIDATION_MESSAGE, SHOW_ERROR_CLASS_NAME)
    addClassList(signPasswordInput, RED_BORDER_CLASS_NAME)
    removeClassList(EMPTY_PASSWORD_ERROR_MESSAGE, SHOW_ERROR_CLASS_NAME)
  }
}
document.onkeyup = function (event) {
  if (e.key === 'Enter') {
    submitLogin();
  }
}

function togglePasswordVisibility() {
  const passwordFieldType = signPasswordInput.type;
  signPasswordInput.type = passwordFieldType === 'password' ? 'text' : 'password';
  EYE_BUTTON.src = `./images/eye-${passwordFieldType === 'password' ? 'on' : 'off'}.svg`;
};