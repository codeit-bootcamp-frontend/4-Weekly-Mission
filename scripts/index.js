const RIGHT_EMAIL = "test@codeit.com";
const RIGHT_PASSWORD = "codeit101";
const $form = document.querySelector(".form-area");
const $emailInput = document.querySelector("#email");
const $passwordInput = document.querySelector("#password");
const $btnEye = document.querySelector(".ico-eye");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const findErrorMessage = (node) => node.parentElement.nextElementSibling;

const removeError = ($input) => {
  const $msg = findErrorMessage($input);
  $input.classList.remove("error");
  $msg.classList.add("hidden");
};

const showError = ($input, errorMessage) => {
  const $msg = findErrorMessage($input);
  $msg.textContent = errorMessage;
  $input.classList.add("error");
  $msg.classList.remove("hidden");
};

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

const togglePassoword = (e) => {
  e.target.classList.toggle("on");
  e.target.previousElementSibling.type = e.target.classList.contains("on")
    ? "text"
    : "password";
};

const validateEmailAndPassword = (e) => {
  if (
    $emailInput.value !== RIGHT_EMAIL ||
    $passwordInput.value !== RIGHT_PASSWORD
  ) {
    e.preventDefault();
    showError($emailInput, "이메일을 확인해주세요.");
    showError($passwordInput, "비밀번호를 확인해주세요.");
  }
};

$emailInput.addEventListener("focusout", checkEmail);
$passwordInput.addEventListener("focusout", checkPassword);
$btnEye.addEventListener("click", togglePassoword);
$form.addEventListener("submit", validateEmailAndPassword);
