import {EMAIL_REGEX, PASSWORD_REGEX} from '../constant.js'

//빈 문자열인지 체크
export function isEmptyString(value) {
  return typeof value === 'string' && value.trim() === '';
}
//이메일의 유효성 검사
export function isValidEmail(email) { 
  return EMAIL_REGEX.test(email);
}

//비밀번호의 유효성 검사
export function isValidPassword(email) { 
  return PASSWORD_REGEX.test(email);
}

//해당 Element가 보이는 상태인지 아닌지를 판별
export function isVisiable(element) {
  return element.classList.contains('hidden');
}

export function makeVisiable(element) {
  element.classList.remove('hidden');
}

export function makeInvisiable(element) {
  element.classList.add('hidden');
}
