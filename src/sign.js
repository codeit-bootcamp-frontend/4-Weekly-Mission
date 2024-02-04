export function errorBoxOnOff(type, target) {
  const targetNode = document.querySelector(`#${target}`)
  targetNode.style.display = type === 'off' ? 'none' : 'block'
}

export function showError(id, message) {
  errorBoxOnOff('on', `${id}ErrorBox`);
  document.querySelector(`#${id}ErrorBox`).textContent = message;
  document.querySelector(`#${id}`).classList.add('error_box_border');
}

export function hideError(id) {
  errorBoxOnOff('off', `${id}ErrorBox`);
  document.querySelector(`#${id}`).classList.remove('error_box_border');
}

export function checkisValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export function checkString(str) {
  // 정규표현식을 사용하여 문자열에 숫자만 있는지 확인
  const isNumberOnly = /^\d+$/.test(str);
  // 정규표현식을 사용하여 문자열에 문자만 있는지 확인
  const isLetterOnly = /^[a-zA-Z]+$/.test(str);
  // 문자열의 길이가 8자 미만인지 확인
  const isShort = str.length < 8;
  if (isShort || isNumberOnly || isLetterOnly) {
    return false;
  }
  return true;
}

export const userData = {
  email: 'test@codeit.com',
  password: 'codeit101'
};