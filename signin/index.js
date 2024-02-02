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

const signInForm = document.querySelector('.signin-form');

const inputEmail = document.querySelector('#signin-email');
const inputPassword = document.querySelector('#signin-password');

const errorMessageEmail = document.querySelector('.errorMessage-email');
const errorMessagePassword = document.querySelector('.errorMessage-password');

const showButtonPassword = document.querySelector('.eye-img-password');

/*********************
       Function
*********************/

// 입력한 이메일, 비밀번호에 대한 계정이 존재하면 accessToken 을 로컬 스토리지에 저장하고 true 를 반환.
async function isUserExistence(email, password) { 
  const url = 'https://bootcamp-api.codeit.kr/api/sign-in';
  const data = {"email": email, "password": password};
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const json = await response.json();
    window.localStorage.setItem("accessToken", json.data.accessToken);
  }
  return response.ok;
};

/*********************
     EventHandler
*********************/

function validateEmailInput() {
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
};

function validatePasswordInput() {
  if (isEmpty(inputPassword.value)) {
    showErrorMessage(errorMessagePassword, '비밀번호를 입력해 주세요.')
    inputPassword.classList.add('red-border')
  };
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
};

function togglePasswordVisibility() {
  toggleInputVisibility(inputPassword, showButtonPassword);
}

async function login(e) {
  e.preventDefault();

  if (!isEmailValid(inputEmail.value)) {
    showErrorMessage(errorMessageEmail, '이메일을 확인해 주세요.');
    inputEmail.classList.add('red-border');
    showErrorMessage(errorMessagePassword, '비밀번호를 확인해 주세요.');
    inputPassword.classList.add('red-border');
    return;
  }

  if (!isPasswordValid(inputPassword.value)) {
    showErrorMessage(errorMessageEmail, '이메일을 확인해 주세요.');
    inputEmail.classList.add('red-border');
    showErrorMessage(errorMessagePassword, '비밀번호를 확인해 주세요.');
    inputPassword.classList.add('red-border');
    return;
  }

  try {
    if (await !isUserExistence(inputEmail.value, inputPassword.value)) {
      showErrorMessage(errorMessageEmail, '이메일을 확인해 주세요.');
      inputEmail.classList.add('red-border');
      showErrorMessage(errorMessagePassword, '비밀번호를 확인해 주세요.');
      inputPassword.classList.add('red-border');
      return;
    };
  } catch {
    alert('서버 접근 중 문제가 발생하였습니다.');
    return;
  }

  // return location.href = '../folder/index.html';
};

/*********************
 EventHandler Binding
*********************/

signInForm.addEventListener('focusin', changePlaceholderFocusIn);
signInForm.addEventListener('focusout', changePlaceholderFocusOut);
signInForm.addEventListener('submit', login);
signInForm.addEventListener('focusin', deleteErrorMessage);

inputEmail.addEventListener('focusout', validateEmailInput);
inputPassword.addEventListener('focusout', validatePasswordInput);

showButtonPassword.addEventListener('click', togglePasswordVisibility);