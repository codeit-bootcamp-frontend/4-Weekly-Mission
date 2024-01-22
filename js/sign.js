const INPUT_TYPE = {
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

const INPUT_MESSAGE_LOGIN_ERROR = {
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

const ERROR_CLASS = 'error';

const USER_TEST = {
  [INPUT_TYPE.EMAIL]: 'test@codeit.com',
  [INPUT_TYPE.PASSWORD]: 'codeit101',
};

const signForm = document.querySelector('#signForm');

function handleFocusoutInput(event) {
  const target = event.target;

  if (target.tagName.toUpperCase() !== 'INPUT') return;

  const value = target.value;
  const type = target.dataset.type.toUpperCase();
  const messageBox = target.parentElement.nextElementSibling;
  let message = '';

  target.classList.remove(ERROR_CLASS);
  messageBox.classList.remove(ERROR_CLASS);
  messageBox.textContent = '';

  if (!value) {
    target.classList.add(ERROR_CLASS);
    message = INPUT_MESSAGE_EMPTY[type];
    return printMessage(messageBox, message, ERROR_CLASS);
  }

  let valid = true;
  if (type === INPUT_TYPE.EMAIL) {
    valid = validateEmail(value);
  }

  if (!valid) {
    target.classList.add(ERROR_CLASS);
    message = INPUT_MESSAGE_PATTERN_ERROR[type];
    return printMessage(messageBox, message, ERROR_CLASS);
  }
}

function handleSubmit(event) {
  event.preventDefault();

  if (event.target.id.toUpperCase() !== 'SIGNFORM') return;

  let valid = true;
  const emailInput = event.target['email'];
  const passwordInput = event.target['password'];
  const emailMessageBox = emailInput.parentElement.nextElementSibling;
  const passwordMessageBox = passwordInput.parentElement.nextElementSibling;

  emailInput.classList.remove(ERROR_CLASS);
  passwordInput.classList.remove(ERROR_CLASS);
  emailMessageBox.classList.remove(ERROR_CLASS);
  emailMessageBox.textContent = '';
  passwordMessageBox.classList.remove(ERROR_CLASS);
  passwordMessageBox.textContent = '';

  if (USER_TEST.EMAIL !== emailInput.value) {
    valid = false;
    emailInput.classList.add(ERROR_CLASS);
    printMessage(emailMessageBox, INPUT_MESSAGE_LOGIN_ERROR.EMAIL, ERROR_CLASS);
  } else if (USER_TEST.PASSWORD !== passwordInput.value) {
    valid = false;
    passwordInput.classList.add(ERROR_CLASS);
    printMessage(
      passwordMessageBox,
      INPUT_MESSAGE_LOGIN_ERROR.PASSWORD,
      ERROR_CLASS
    );
  }

  if (!valid) return;

  // event.target.submit();
  window.location.href = '/folder';
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
}

function printMessage(target, message, className) {
  target.innerHTML = message;
  target.classList.add(className);
}

function handleClickBlindButton(event) {
  event.stopPropagation();
  const target = event.target;

  if (!target.classList.contains('input-blind-toggle')) return;

  const input = target.previousElementSibling;
  let blindType = target.dataset.type.toLowerCase();

  blindType = blindType === BLIND_TYPE.ON ? BLIND_TYPE.OFF : BLIND_TYPE.ON;

  input.setAttribute('type', BLIND_INPUT_TYPE[blindType]);
  target.setAttribute('src', BLIND_IMAGE_SRC[blindType]);
  target.setAttribute('alt', BLIND_IMAGE_ALT[blindType]);
  target.setAttribute('data-type', blindType);
}

signForm.addEventListener('focusout', handleFocusoutInput);
signForm.addEventListener('submit', handleSubmit);
signForm.addEventListener('click', handleClickBlindButton);
