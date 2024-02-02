import {
  EMPTY_MESSAGE,
  GET_ERROR_MESSAGE_SPAN,
  REGEX_EMAIL,
  REGEX_PASSWORD,
  SRC_IMG_CLOSE_EYE,
  SRC_IMG_OPEN_EYE,
} from "./constant.js";

// 유효성 검증 관련 함수
export const isFilledInput = (target) => {
  return target.value && target.value !== "";
};

export const isValidEmailForm = (target) => {
  return target.value && REGEX_EMAIL.test(target.value);
};

export const isValidPasswordForm = (target) => {
  return target.value && REGEX_PASSWORD.test(target.value);
};

export const isMatchWithPassword = (target, inputPassword) => {
  return target.value && target.value === inputPassword.value;
};

// 에러표시 UI 구현 함수
export const showErrorMessage = (
  isVisible,
  target,
  type,
  errorMessage = EMPTY_MESSAGE,
) => {
  const errorMessageSpan = GET_ERROR_MESSAGE_SPAN(target);
  const iconEye = target.parentElement.querySelector(".btn_eye");

  errorMessageSpan.textContent = errorMessage;

  // 에러 메시지 표시
  if (isVisible) {
    target.classList.add("error_input");
    if (type === "password") {
      iconEye.classList.add("large_bottom");
    }
    return;
  }
  // 에러 메시지 제거
  target.classList.remove("error_input");
  if (type === "password") {
    iconEye.classList.remove("large_bottom");
  }
};

// 기타 함수
export const toggleViewPassword = (target) => {
  if (target instanceof EventTarget) {
    const targetInput = target.parentElement.previousElementSibling;

    if (targetInput.getAttribute("type") === "password") {
      targetInput.setAttribute("type", "text");
      target.setAttribute("src", SRC_IMG_OPEN_EYE);
    } else {
      targetInput.setAttribute("type", "password");
      target.setAttribute("src", SRC_IMG_CLOSE_EYE);
    }
  }
};
