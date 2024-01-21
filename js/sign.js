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

const ERROR_CLASS = 'error';

const inputWrapper = document.querySelector('.inputs');

function handleFocusoutInput(event) {
  const target = event.target;

  if (target.tagName.toUpperCase() !== 'INPUT') return;
  const value = target.value;
  const type = target.dataset.type.toUpperCase();
  const messageBox = target.parentElement.nextElementSibling;
  let message = '';
  target.classList.remove(ERROR_CLASS);
  messageBox.classList.remove(ERROR_CLASS);

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

inputWrapper.addEventListener('focusout', handleFocusoutInput);
