// 공통으로 사용되는 이벤트 핸들러를 분리하라.
import {
  errorElement,
} from "./element.js";

// 포커스인 이벤트: 에러 엘리먼트를 제거한다.
export function handleFocusIn(parentElementSelectorName) {
  errorElement.removeErrorElement(parentElementSelectorName);
}

// 포커스 아웃 이벤트 : 입력값에 따라 없을 경우, 포멧에 맞지 않을 경우를 검증한다.
export function handleFocusOut(element, inputSelectorName, parentElementSelectorName, isEmptyErrorSentence, notCorrectformatErrorSentence) {
  if (element.value === "") {
    notInput(inputSelectorName, parentElementSelectorName, isEmptyErrorSentence);
    return; // else 사용 지양
  }

  notCorrectFormat(element, inputSelectorName, parentElementSelectorName, notCorrectformatErrorSentence);
}

function notInput(inputSelectorName, parentElementSelectorName, errorSentence) {
  errorElement.createErrorSpanElement(parentElementSelectorName);
  errorElement.errorBorder(inputSelectorName)
  errorElement.errorMessageInElement(parentElementSelectorName, errorSentence);
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