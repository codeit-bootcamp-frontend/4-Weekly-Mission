import { validateEmail } from './validation.js';
import { CLASS } from './class.js';

export const INPUT_TYPE = {
  EMAIL: 'EMAIL',
  PASSWORD: 'PASSWORD',
};

const INPUT_MESSAGE_EMPTY = {
  [INPUT_TYPE.EMAIL]: '이메일을 입력해 주세요.',
  [INPUT_TYPE.PASSWORD]: '비밀번호를 입력해 주세요.',
};

const INPUT_MESSAGE_PATTERN_ERROR = {
  [INPUT_TYPE.EMAIL]: '올바른 이메일 주소가 아닙니다.',
};

export const INPUT_MESSAGE_LOGIN_ERROR = {
  [INPUT_TYPE.EMAIL]: '이메일을 확인해 주세요.',
  [INPUT_TYPE.PASSWORD]: '비밀번호를 확인해 주세요.',
};

const BLIND_TYPE = {
  ON: 'on',
  OFF: 'off',
};

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
  const target = event.target;

  if (target.tagName.toUpperCase() !== 'INPUT') return;

  const value = target.value;
  const type = target.dataset.type.toUpperCase();
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

  if (type === INPUT_TYPE.EMAIL && !validateEmail(value)) {
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

  const blindType =
    target.dataset.type.toLowerCase() === BLIND_TYPE.ON
      ? BLIND_TYPE.OFF
      : BLIND_TYPE.ON;

  input.setAttribute('type', BLIND_INPUT_TYPE[blindType]);
  target.setAttribute('src', BLIND_IMAGE_SRC[blindType]);
  target.setAttribute('alt', BLIND_IMAGE_ALT[blindType]);
  target.setAttribute('data-type', blindType);
}

export function printMessage(target, message, className) {
  target.innerHTML = message;
  target.classList.add(className);
}
