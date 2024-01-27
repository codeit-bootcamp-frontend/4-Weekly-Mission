import { validateEmail, validatePassword } from './validation.js';
import { CLASS } from './class.js';

export const INPUT_TYPE = {
  EMAIL: 'EMAIL',
  PASSWORD: 'PASSWORD',
  PASSWORD_REPEAT: 'PASSWORD_REPEAT',
};

const INPUT_MESSAGE_EMPTY = {
  [INPUT_TYPE.EMAIL]: '이메일을 입력해 주세요.',
  [INPUT_TYPE.PASSWORD]: '비밀번호를 입력해 주세요.',
  [INPUT_TYPE.PASSWORD_REPEAT]: '비밀번호를 입력해 주세요.',
};

const INPUT_MESSAGE_PATTERN_ERROR = {
  [INPUT_TYPE.EMAIL]: '올바른 이메일 주소가 아닙니다.',
  [INPUT_TYPE.PASSWORD]: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
  [INPUT_TYPE.PASSWORD_REPEAT]: '비밀번호가 일치하지 않아요.',
};

export const INPUT_MESSAGE_LOGIN_ERROR = {
  [INPUT_TYPE.EMAIL]: '이메일을 확인해 주세요.',
  [INPUT_TYPE.PASSWORD]: '비밀번호를 확인해 주세요.',
};

const ON_OFF = {
  ON: 'ON',
  OFF: 'OFF',
};

const BLIND_TYPE = { ...ON_OFF };

const BLIND_IMAGE_SRC = {
  [BLIND_TYPE.ON]: '/images/sign/eye_off.svg',
  [BLIND_TYPE.OFF]: '/images/sign/eye_on.svg',
};

const BLIND_IMAGE_ALT = {
  [BLIND_TYPE.ON]: '비밀번호 숨기기 이미지',
  [BLIND_TYPE.OFF]: '비밀번호 보이기 이미지',
};

const BLIND_INPUT_TYPE = {
  [BLIND_TYPE.ON]: 'password',
  [BLIND_TYPE.OFF]: 'text',
};

export function handleFocusoutInput(event) {
  const scope = event.currentTarget;
  const target = event.target;

  if (target.tagName.toUpperCase() !== 'INPUT') return;

  const type = target.dataset.type?.toUpperCase();

  if (!INPUT_TYPE.hasOwnProperty(type)) return;

  const value = target.value;
  const validation =
    target.dataset.validation?.toUpperCase() === ON_OFF.ON ? true : false;
  const messageBox = target.parentElement.nextElementSibling;
  let message = '';

  target.classList.remove(CLASS.ERROR);
  messageBox.classList.remove(CLASS.ERROR);
  messageBox.textContent = '';

  if (!value) {
    target.classList.add(CLASS.ERROR);
    message = INPUT_MESSAGE_EMPTY[type];
    return printMessage(messageBox, message, CLASS.ERROR);
  }

  if (validation && !validateInput(type, value, scope)) {
    target.classList.add(CLASS.ERROR);
    message = INPUT_MESSAGE_PATTERN_ERROR[type];
    return printMessage(messageBox, message, CLASS.ERROR);
  }
}

export function handleClickBlindButton(event) {
  event.stopPropagation();
  const target = event.target;

  if (!target.classList.contains('input-blind-toggle')) return;

  const input = target.previousElementSibling;
  const valueLength = input.value.length;
  input.focus();
  setTimeout(() => {
    input.setSelectionRange(valueLength, valueLength);
  }, 0);

  const blindType =
    target.dataset.type.toLowerCase() === BLIND_TYPE.ON
      ? BLIND_TYPE.OFF
      : BLIND_TYPE.ON;

  input.setAttribute('type', BLIND_INPUT_TYPE[blindType]);
  target.setAttribute('src', BLIND_IMAGE_SRC[blindType]);
  target.setAttribute('alt', BLIND_IMAGE_ALT[blindType]);
  target.setAttribute('data-type', blindType);
}

function validateInput(type, value, scope = document) {
  if (type === INPUT_TYPE.EMAIL) {
    return validateEmail(value);
  } else if (type === INPUT_TYPE.PASSWORD) {
    return validatePassword(value);
  } else if (type === INPUT_TYPE.PASSWORD_REPEAT) {
    const passwordInput = scope.querySelector('input[data-type="password"');
    return passwordInput.value === value;
  } else {
    return false;
  }
}

export function printMessage(target, message, className) {
  target.innerHTML = message;
  target.classList.add(className);
}
