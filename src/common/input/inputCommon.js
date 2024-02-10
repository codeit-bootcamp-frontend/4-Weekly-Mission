import init from '../init/init.js';
import email from './email/emailValidation.js';
import password from './password/passwordValidtaion.js';

// 로그인 이메일 blur
const signinEmail = (e) => {
  init(e.target);
  email.validateSigninEmailInput(e.target);
}

// 회원가입 이메일 blur
const signupEmail = (e) => {
  init(e.target);
  email.validateSignupEmailInput(e.target);
}

// 로그인 비밀번호 blur
const signinPassword = (e) => {
  init(e.target);
  password.validateSigninPasswordInput(e.target);
}

// 회원가입 비밀번호 blur
const signupPassword = (e) => {
  init(e.target);
  password.validateSignupPasswordInput(e.target);
}

// 회원가입 비밀번호 확인 blur
const signupPasswordChk = (e) => {
  init(e.target);
  password.validateSignupPasswordChkInput(e.target);
}

export default {signinEmail, signupEmail, signinPassword, signupPassword, signupPasswordChk};