/*********************
       Import
*********************/

import {
  isEmpty,
  isEmailValid,
  isPasswordValid,
  showErrorMessage,
  hideErorrMessage,
  changePlaceholderFocusIn,
  changePlaceholderFocusOut,
  toggleInputVisibility,
} from "../scripts/utils.js";

/*********************
        IIFE
*********************/

// 로컬 스토리지에 'accessToken' 이 존재하면 folder 파일로 이동하는게 과제 조건이어서 구현했습니다.
// 혹시 앞으로의 코드 리뷰에 도움이 되실까 해서 코드잇 API 문서 페이지 주소 남기겠습니다.
// https://bootcamp-api.codeit.kr/docs
(function () {
  const myAccessToken = window.localStorage.getItem('accessToken');
  if (myAccessToken) {
    location.href = '../folder/index.html';
  };
})()

/*********************
      UI Constant
*********************/

const signupForm = document.querySelector('.signup-form');

const inputEmail = document.querySelector('#signup-email');
const inputPassword = document.querySelector('#signup-password');
const inputPasswordCheck = document.querySelector('#signup-password-check');

const errorMessageEmail = document.querySelector('.errorMessage-email');
const errorMessagePassword = document.querySelector('.errorMessage-password');
const errorMessagePasswordCheck = document.querySelector('.errorMessage-password-check');

const showButtonPassword = document.querySelector('.eye-img-password');
const showButtonPasswordCheck = document.querySelector('.eye-img-password-check');

/*********************
       Function
*********************/

// 이메일을 통해 유저정보를 얻어오는 API 가 없고, /api/check-email 로 이메일이 중복되는지만 확인받을 수 있어서 getUserByEmail 함수는 사용하지 못했습니다.
async function isEmailDuplicated(email) {
  const url = 'https://bootcamp-api.codeit.kr/api/check-email';
  const data = { "email": email };
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return !response.ok
};

// 회원가입이 성공적으로 이루어지면 accessToken 을 로컬 스토리지에 저장하고 folder 페이지로 이동.
async function registAccount(email, password) {
  const url = 'https://bootcamp-api.codeit.kr/api/sign-up';
  const data = {"email": email, "password": password};
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const json = await response.json();
    window.localStorage.setItem("accessToken", json.data.accessToken)
    return location.href = '../folder/index.html';
  } else {
    alert('서버 상의 문제로 회원 가입에 실패하였습니다. 다시 시도해주세요.');
  }
}

/*********************
     EventHandler
*********************/

async function validateEmailInput() {
  if (isEmpty(inputEmail.value)) {
    showErrorMessage(errorMessageEmail, '이메일을 입력해 주세요.');
    inputEmail.classList.add('red-border');
    return;
  } 

  if (!isEmailValid(inputEmail.value)) {
    showErrorMessage(errorMessageEmail, '올바른 이메일 주소가 아닙니다.')
    inputEmail.classList.add('red-border');
    return;
  }

  try {
    if (await isEmailDuplicated(inputEmail.value)) {
        showErrorMessage(errorMessageEmail, '이미 사용 중인 이메일입니다.');
        inputEmail.classList.add('red-border');
        return;
    }
  } catch {
    return;
  };
};

function validatePasswordInput() {
  if (isEmpty(inputPassword.value)) {
    showErrorMessage(errorMessagePassword, '비밀번호를 입력해 주세요.');
    inputPassword.classList.add('red-border');
    return;
  };

  if (!isPasswordValid(inputPassword.value)) {
    showErrorMessage(errorMessagePassword, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    inputPassword.classList.add('red-border');
    return;
  };
};

function validatePasswordCheckInput() {
  if (isEmpty(inputPasswordCheck.value)) {
    showErrorMessage(errorMessagePasswordCheck, '비밀번호를 입력해 주세요.')
    inputPasswordCheck.classList.add('red-border')
    return;
  };

  if (inputPasswordCheck.value !== inputPassword.value) {
    showErrorMessage(errorMessagePasswordCheck, '비밀번호가 일치하지 않습니다.')
    inputPasswordCheck.classList.add('red-border')
    return;
  }
};

function deleteErrorMessage(e) {
  if (e.target === inputEmail) {
    hideErorrMessage(errorMessageEmail);
    inputEmail.classList.remove('red-border');
  };

  if (e.target === inputPassword) {
    hideErorrMessage(errorMessagePassword);
    inputPassword.classList.remove('red-border');
  };

  if (e.target === inputPasswordCheck) {
    hideErorrMessage(errorMessagePasswordCheck);
    inputPasswordCheck.classList.remove('red-border');
  };
};

function onlyEngPassword() {
  const filteredValue = inputPassword.value.replace(/[^a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\\^_`{|}~]/g, '');
  inputPassword.value = filteredValue;
};

function togglePasswordVisibility() {
  toggleInputVisibility(inputPassword, showButtonPassword);
}

function togglePasswordCheckVisibility() {
  toggleInputVisibility(inputPasswordCheck, showButtonPasswordCheck);
}

async function signup(e) {
  e.preventDefault();

  if (!isEmailValid(inputEmail.value)) {
    showErrorMessage(errorMessageEmail, '올바른 이메일 주소가 아닙니다.');
    inputEmail.classList.add('red-border');
    return;
  }

  if (!isPasswordValid(inputPassword.value)) {
    showErrorMessage(errorMessagePassword, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    inputPassword.classList.add('red-border');
    return;
  }

  if (inputPasswordCheck.value !== inputPassword.value) {
    showErrorMessage(errorMessagePasswordCheck, '비밀번호가 일치하지 않습니다.')
    inputPasswordCheck.classList.add('red-border')
    return;
  }

  try { 
    if (await isEmailDuplicated(inputEmail.value)) {
      showErrorMessage(errorMessageEmail, '이미 사용 중인 이메일입니다.');
      inputEmail.classList.add('red-border');
      return;
    }

    return await registAccount(inputEmail.value, inputPassword.value);
  } catch {
    alert('서버 접근 중 오류가 발생했습니다.');
  }
};

/*********************
 EventHandler Binding
*********************/

signupForm.addEventListener('focusin', changePlaceholderFocusIn);
signupForm.addEventListener('focusout', changePlaceholderFocusOut);
signupForm.addEventListener('submit', signup);
signupForm.addEventListener('focusin', deleteErrorMessage);

inputEmail.addEventListener('focusout', validateEmailInput);
inputPassword.addEventListener('focusout', validatePasswordInput);
inputPassword.addEventListener('input', onlyEngPassword);
inputPasswordCheck.addEventListener('focusout', validatePasswordCheckInput);

showButtonPassword.addEventListener('click', togglePasswordVisibility);
showButtonPasswordCheck.addEventListener('click', togglePasswordCheckVisibility);