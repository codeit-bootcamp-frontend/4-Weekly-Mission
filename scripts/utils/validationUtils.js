import { EXIST_EMAIL, EXIST_PASSWORD } from "./constant.js";
import { showError, removeError } from "./errorUtils.js";
import { $emailInput, $passwordInput } from "./tags.js";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const checkEmail = () => {
  if (emailRegex.test($emailInput.value)) {
    removeError($emailInput);
    return;
  }

  const message = $emailInput.value
    ? "올바른 이메일 주소가 아닙니다."
    : "이메일을 입력해주세요.";
  showError($emailInput, message);
};

const checkPassword = () => {
  if ($passwordInput.value) {
    removeError($passwordInput);
    return;
  }

  showError($passwordInput, "비밀번호를 입력해주세요.");
};

const validateEmailAndPassword = (e) => {
  if (
    $emailInput.value === EXIST_EMAIL &&
    $passwordInput.value === EXIST_PASSWORD
  )
    return;

  e.preventDefault();
  showError($emailInput, "이메일을 확인해주세요.");
  showError($passwordInput, "비밀번호를 확인해주세요.");
};

export { checkEmail, checkPassword, validateEmailAndPassword };
