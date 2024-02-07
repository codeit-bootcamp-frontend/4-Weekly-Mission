const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const pwdRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

function validateInput(inputEl, errorEl, errorMsg) {
  errorEl.style.display = errorMsg ? "block" : "none";
  errorEl.innerText = errorMsg;
  inputEl.style.borderColor = errorMsg
    ? "var(--red)"
    : "var(--gray-20)";

  return errorMsg ? false : true;
}