// 공통으로 사용되는 이벤트 핸들러를 분리하라.
import {
  errorElement,
} from "./element.js";

//전역 이벤트 : 로컬 스토리지에 토근이 있을 경우, 폴더 페이지 이동
export function hasTokenInStorage() {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    window.location.href = '../folder';
  }
}

// 포커스인 이벤트: 에러 엘리먼트를 제거한다.
export function handleFocusIn(parentElementSelectorName) {
  errorElement.removeErrorElement(parentElementSelectorName);
}

// 포커스 아웃 이벤트(이메일) : 입력값에 따라 없을 경우, 포멧에 맞지 않을 경우를 검증한다.
export function handleFocusOutForEmail(element, inputSelectorName, parentElementSelectorName, isEmptyErrorSentence, notCorrectformatErrorSentence) {
  const stateOfNotInput = notInput(element, inputSelectorName, parentElementSelectorName, isEmptyErrorSentence);
  if (stateOfNotInput === 1) {
    return; // 만약 notInput이 호출되었다면, 종료한다.
  }

  notCorrectFormat(element, inputSelectorName, parentElementSelectorName, notCorrectformatErrorSentence);
}

// 포커스 아웃 이벤트(패스워드) : 입력값에 따라 없을 경우, 포멧에 맞지 않을 경우를 검증한다.
export function handleFocusOutForPassword(element, inputSelectorName, parentElementSelectorName, isEmptyErrorSentence, notCorrectformatErrorSentence) {
  const stateOfNotInput = notInput(element, inputSelectorName, parentElementSelectorName, isEmptyErrorSentence);
  if (stateOfNotInput === 1) {
    return; // 만약 notInput이 호출되었다면, 종료한다.
  }

  notCorrectFormatForPassword(element, inputSelectorName, parentElementSelectorName, notCorrectformatErrorSentence);
}

// 포커스 아웃 이벤트 : 입력값이 없을 경우, 에러 엘리먼트를 생성한다.
export function notInput(element, inputSelectorName, parentElementSelectorName, errorSentence) {
  if (element.value === "") {
    errorElement.createErrorSpanElement(parentElementSelectorName);
    errorElement.errorBorder(inputSelectorName)
    errorElement.errorMessageInElement(parentElementSelectorName, errorSentence);
    return 1;
  }
  return 0;
}

function notCorrectFormat(element, inputSelectorName, parentElementSelectorName, errorSentence) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(element.value)) {
    return
  } 
  errorElement.createErrorSpanElement(parentElementSelectorName);
  errorElement.errorBorder(inputSelectorName);
  errorElement.errorMessageInElement(parentElementSelectorName, errorSentence);
}

function notCorrectFormatForPassword(element, inputSelectorName, parentElementSelectorName, errorSentence) {
  const passwordFormat = element.value;

  if (passwordFormat.length < 8 || /^[a-zA-Z]+$/.test(passwordFormat) || /^[0-9]+$/.test(passwordFormat)) {
    errorElement.createErrorSpanElement(parentElementSelectorName);
    errorElement.errorBorder(inputSelectorName);
    errorElement.errorMessageInElement(parentElementSelectorName, errorSentence);
  }
}

// 아이콘 클릭 이벤트
export function togglePassword(passwordElement, iconElement) {
  if (passwordElement.type === "password") {
    passwordElement.type = "text";
    iconElement.setAttribute("src", "../Publics/sign/eye-off.svg");
  } else {
    passwordElement.type = "password";
    iconElement.setAttribute("src", "../Publics/sign/eye-on.svg");
  }
}