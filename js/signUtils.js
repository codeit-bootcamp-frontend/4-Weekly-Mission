const userID = document.querySelector("#email");
const userPW = document.querySelector(".password");
const emailError = document.querySelector(".emailError");
const pwError = document.querySelector(".pwError");
const pwContainer = document.querySelector(".pw-container");

export function errorStyle(textStyle, boxStyle) {
  textStyle.style.color = "red";
  boxStyle.style.border = "1px solid red";
}

export function clearStyle(textStyle, boxStyle) {
  textStyle.textContent = "";
  boxStyle.style.border = "";
}

export function validateInput(
  obj,
  errorElement,
  validationFunction,
  inputErrorMessage,
  emptyErrorMessage
) {
  if (obj.value === "") {
    errorElement.textContent = emptyErrorMessage;
    errorStyle(errorElement, obj);
  } else if (!validationFunction(obj)) {
    errorElement.textContent = inputErrorMessage;
    errorStyle(errorElement, obj);
  } else {
    clearStyle(errorElement, obj);
  }
}

export function validEmail(obj) {
  const emptyErrorMessage = "이메일을 입력해주세요.";
  const inputErrorMessage = "올바른 이메일 주소가 아닙니다.";
  validateInput(
    obj,
    emailError,
    validEmailCheck,
    inputErrorMessage,
    emptyErrorMessage
  );
}

export function validPassword(obj) {
  const emptyErrorMessage = "비밀번호를 입력해주세요.";
  const inputErrorMessage =
    "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
  validateInput(
    obj,
    pwError,
    validPasswordCheck,
    inputErrorMessage,
    emptyErrorMessage
  );
}

export function goUrl() {
  let link = "folder/";
  location.href = link;
}

export function validEmailCheck(obj) {
  const pattern =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return !!obj.value.match(pattern);
}

export function validPasswordCheck(obj) {
  const pattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return !!obj.value.match(pattern);
}

export function showPW(e) {
  const lineThrough = this.querySelector(".line-through");
  const pwInput = this.querySelector(".password");
  if (e.target.classList.contains("eye-PW"))
    if (pwInput.type === "password") {
      pwInput.type = "text";
      lineThrough.style.display = "block";
    } else {
      pwInput.type = "password";
      lineThrough.style.display = "none";
    }
}

export function storeAccessToken(token) {
  localStorage.setItem("accessToken", token);
}

export { userID, userPW, emailError, pwError, pwContainer };
