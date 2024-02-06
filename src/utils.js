const SIGN_INPUT_ERROR_CLASSNAME = 'sign-input-error';
const ERROR_MESSAGE_CLASSNAME = 'error-message-on';
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export function setInputError(elements, message) {
  elements.input.className += ` ${SIGN_INPUT_ERROR_CLASSNAME}`;
  elements.errorMessage.className += ` ${ERROR_MESSAGE_CLASSNAME}`;
  elements.errorMessage.textContent = message;
}

export function removeInputError(elements) {
  elements.input.classList.remove(SIGN_INPUT_ERROR_CLASSNAME);
  elements.errorMessage.classList.remove(ERROR_MESSAGE_CLASSNAME);
  elements.errorMessage.textContent = '';
}

export function isEmailValid(email) {
  return new RegExp(EMAIL_REGEX).test(email);
}

export function isPasswordValid(password) {
  const isEightLettersOrMore = password.length >= 8;
  const hasNumberAndCharacter =
    password.match(/[0-9]/g) && password.match(/[a-zA-Z]/gi);
  return isEightLettersOrMore && hasNumberAndCharacter;
}

export function togglePassword(input, toggleButton) {
  if (input.getAttribute('type') === 'password') {
    input.setAttribute('type', 'text');
    toggleButton
      .getElementsByTagName('img')[0]
      .setAttribute('src', './images/eye-on.svg');
    return;
  }
  input.setAttribute('type', 'password');
  toggleButton
    .getElementsByTagName('img')[0]
    .setAttribute('src', './images/eye-off.svg');
}

export const TEST_USER = {
  email: 'test@codeit.com',
  password: 'codeit101',
};

export function signIn(requestData) {
  return fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        // 요청이 성공하면 '/folder'로 이동
        window.location.href = '/folder.html';
      } else {
        // 요청이 실패하면 에러 처리
        console.error('Failed to sign in:', response.statusText);
      }
    })
    .catch((error) => {
      console.error('Error during sign-in:', error);
    });
}

export function checkEmail(email) {
  const requestData = { email };

  return fetch('https://bootcamp-api.codeit.kr/api/check-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => {
      if (response.status === 200) {
        // 중복된 이메일이 아닌 경우
        return false;
      }
      // 중복된 이메일인 경우
      return true;
    })
    .catch((error) => {
      console.error('Error during email check:', error);
      return false; // 에러 발생 시 중복된 이메일이 아니라고 가정
    });
}

export function signUp(requestData) {
  return fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => {
      if (response.ok) {
        // 성공적으로 회원가입되면 '/folder'로 이동
        window.location.href = '/folder.html';
      } else {
        // 요청이 실패하면 에러 처리
        console.error('Failed to sign up:', response.statusText);
      }
    })
    .catch((error) => {
      console.error('Error during sign-up:', error);
    });
}

export function trySignUp(email, password) {
  // 이메일 중복 확인
  return checkEmail(email)
    .then((isEmailAvailable) => {
      if (!isEmailAvailable) {
        console.log('중복된 이메일입니다.');
        return;
      }

      // 회원가입 시도
      const requestData = { email, password };
      return signUp(requestData);
    })
    .catch((error) => {
      console.error('Error during sign-up:', error);
    });
}
