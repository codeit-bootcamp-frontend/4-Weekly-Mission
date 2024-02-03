import * as action from '../lib/action.js'
import * as handleEvent from '../lib/eventKey.js'
import * as formErrorHandling from '../lib/formErrorHandling.js'
import * as input from '../lib/inputVerification.js'
import { signGlobals } from '../signGlobals.js' 
import { signIn } from '../api/signinApi.js'
import { signUp } from '../api/signupApi.js'
import {
  EMAIL_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE,
  EMAIL_REGEX,
  USERS,
  PASSWORD_EYE_ICON,
  PASSWORD_REGEX
} from '../constant/signVariable.js'

const handleSignIn = async () => {
  try {
    const responseData = await signIn('test@codeit.com', 'sprint101')
    console.log('로그인 성공:', responseData)
    localStorage.setItem('loginAccessToken', responseData.data.accessToken)
    const accessToken = localStorage.getItem('loginAccessToken');
    if (accessToken) {
      // window.location.href = '../../pages/folder.html';
      console.log('찐으로 로그인')
    }
  } catch (error) {
    console.error(error)
  }
};


const handleSignUp = async () => {
  try {
    const responseData = await signUp(`${signGlobals.signEmailInput.value}`, `${signGlobals.signPasswordInput.value}`);
    console.log('회원가입 성공:', responseData);
    localStorage.setItem('signupAccessToken', responseData.data.accessToken)
    const accessToken = localStorage.getItem('signupAccessToken');
    if (accessToken) {
      // window.location.href = '../../pages/folder.html';
      console.log('찐으로 회원가입')
    }
  } catch (error) {
    console.error(error);
  }
};


export function handlePasswordCheckFocusout() {
  const passwordCheckError = signGlobals.signPasswordCheckSecion?.lastChild

  formErrorHandling.handleInputFocusout(signGlobals.signPasswordCheckInput, passwordCheckError, null, PASSWORD_ERROR_MESSAGE)
  if (!input.isPasswordValueMatch(signGlobals.signPasswordInput, signGlobals.signPasswordCheckInput)) {
    formErrorHandling.showErrorMsg(signGlobals.signPasswordCheckInput, passwordCheckError, PASSWORD_ERROR_MESSAGE.agreement)
  }
}

export function handleSignUpButton() {
  signGlobals.signEmailInput.blur()
  signGlobals.signPasswordInput.blur()
  // if (input.isValueMatch(signGlobals.signEmailInput, USERS[0].id)) {
  //   formErrorHandling.showErrorMsg(signGlobals.signEmailInput, signGlobals.emailError, EMAIL_ERROR_MESSAGE.use)
  //   return
  // }
  if (!signGlobals.signEmailInput.value || !signGlobals.signPasswordInput.value || !signGlobals.signPasswordCheckInput.value) {
    alert('모든 입력 필드에 값을 입력하세요.')
    return
  }
  handleSignUp()
}

export function handleLoginButton() {
  signGlobals.signEmailInput.blur()
  signGlobals.signPasswordInput.blur()
  handleSignIn()
  // const isUserRegistered = USERS.some(user => input.isValueMatch(signGlobals.signEmailInput, user.id) && input.isValueMatch(signGlobals.signPasswordInput, user.password))
  // if (isUserRegistered) {
  //   action.loginAction()
  // }else if (!isUserRegistered){
  //   formErrorHandling.showErrorMsg(signGlobals.signEmailInput, signGlobals.emailError, EMAIL_ERROR_MESSAGE.validation)
  //   formErrorHandling.showErrorMsg(signGlobals.signPasswordInput, signGlobals.passwordError, PASSWORD_ERROR_MESSAGE.validation)
  // }
}

export function handleEmailFocusout() {
  formErrorHandling.handleInputFocusout(signGlobals.signEmailInput, signGlobals.emailError, EMAIL_REGEX, EMAIL_ERROR_MESSAGE)
}

export function handlePasswordFocusout() {
  formErrorHandling.handleInputFocusout(signGlobals.signPasswordInput, signGlobals.passwordError, PASSWORD_REGEX, PASSWORD_ERROR_MESSAGE)
}

export function handleChangePasswordType() {
  const passwordType = signGlobals.signPasswordInput.type
  const passwordChangeType = passwordType === 'password' ? 'text' : 'password'
  signGlobals.signPasswordInput.type = passwordChangeType
  passwordChangeType === 'password' ? signGlobals.eyeImg.src = PASSWORD_EYE_ICON.passwordType.src : signGlobals.eyeImg.src = PASSWORD_EYE_ICON.textType.src
}

export function handleEnter() {
  handleEvent.enter(() => {
    signGlobals.currentPageURL.includes("signup.html") ? signGlobals.signUpButton.click() : signGlobals.loginButton.click()
  })
}