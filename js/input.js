import {
  validateEmail,
  validatePassword,
  validatePasswordRepeat,
} from './validation.js';
import { CLASS } from './class.js';
import { checkDuplicateEmail } from './sign.js';

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

const INPUT_MESSAGE_SAME_ERROR = {
  [INPUT_TYPE.EMAIL]: '이미 사용 중인 이메일입니다.',
};

export const INPUT_MESSAGE_LOGIN_ERROR = {
  [INPUT_TYPE.EMAIL]: '이메일을 확인해 주세요.',
  [INPUT_TYPE.PASSWORD]: '비밀번호를 확인해 주세요.',
};

export const ON_OFF = {
  ON: 'on',
  OFF: 'off',
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

export async function handleFocusoutInput(event) {
  const scope = event.currentTarget;
  const target = event.target;

  if (target.tagName.toUpperCase() !== 'INPUT') return;

  const type = target.dataset.type?.toUpperCase();

  if (!INPUT_TYPE.hasOwnProperty(type)) return;

  const value = target.value;
  const validation =
    target.dataset.validation?.toLowerCase() === ON_OFF.ON ? true : false;
  const messageBox = target.parentElement.nextElementSibling;

  removeError(target);
  removeError(messageBox);

  if (!value) {
    addEmptyError(type, target, messageBox);
    return;
  }

  if (validation && !validateInput(type, value, scope)) {
    addPatternError(type, target, messageBox);
    return;
  }

  if (scope.id === 'signup-form' && type === INPUT_TYPE.EMAIL) {
    const validEmail = await checkDuplicateEmail(value);
    if (!validEmail) {
      addSameError(type, target, messageBox);
      return;
    }
  }
}

export function handleClickBlindButton(event) {
  event.stopPropagation();
  const target = event.target;

  if (!target.classList.contains('input-blind-toggle')) return;

  const input = target.previousElementSibling;

  togglePasswordBlind(input, target);
}

function togglePasswordBlind(input, toggleButton) {
  const blindType =
    toggleButton.dataset.type.toLowerCase() === BLIND_TYPE.ON
      ? BLIND_TYPE.OFF
      : BLIND_TYPE.ON;

  input.setAttribute('type', BLIND_INPUT_TYPE[blindType]);
  toggleButton.setAttribute('src', BLIND_IMAGE_SRC[blindType]);
  toggleButton.setAttribute('alt', BLIND_IMAGE_ALT[blindType]);
  toggleButton.setAttribute('data-type', blindType);

  input.focus();
  setCursorToEnd(input);
}

function setCursorToEnd(input) {
  const valueLength = input.value.length;

  setTimeout(() => {
    input.setSelectionRange(valueLength, valueLength);
  }, 0);
}

export function validateInput(type, value, scope = document) {
  switch (type) {
    case INPUT_TYPE.EMAIL:
      return validateEmail(value);
    case INPUT_TYPE.PASSWORD:
      return validatePassword(value);
    case INPUT_TYPE.PASSWORD_REPEAT:
      return validatePasswordRepeat(
        value,
        'input[data-type="password"]',
        scope
      );
    default:
      return false;
  }
}

export function confirmSameUserEmail(email) {
  return !(USER_TEST.EMAIL === email);
}

export function addLoginError(type, target, messageBox) {
  target.classList.add(CLASS.ERROR);
  printMessage(messageBox, INPUT_MESSAGE_LOGIN_ERROR[type], CLASS.ERROR);
}

export function addEmptyError(type, target, messageBox) {
  target.classList.add(CLASS.ERROR);
  printMessage(messageBox, INPUT_MESSAGE_EMPTY[type], CLASS.ERROR);
}

export function addPatternError(type, target, messageBox) {
  target.classList.add(CLASS.ERROR);
  printMessage(messageBox, INPUT_MESSAGE_PATTERN_ERROR[type], CLASS.ERROR);
}

export function addSameError(type, target, messageBox) {
  target.classList.add(CLASS.ERROR);
  printMessage(messageBox, INPUT_MESSAGE_SAME_ERROR[type], CLASS.ERROR);
}

export function removeError(target) {
  target.classList.remove(CLASS.ERROR);
  if (target.classList.contains('input-message')) {
    target.textContent = '';
  }
}

export function printMessage(target, message, className) {
  target.innerHTML = message;
  target.classList.add(className);
}
