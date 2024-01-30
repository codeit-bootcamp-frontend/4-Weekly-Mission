import handleClickEyeIcon from "/utils/onClickEyeIcon.js";
// const
const validator = {
  validationMap: {
    email: ["requiredEmail", "checkEmailFormat", "emailInUse"],
    password: ["checkPasswordFormat"],
    checkpw: ["matchPassword"],
  },
  validations: {
    requiredEmail: {
      validate: (value) => Boolean(value),
      message: "이메일을 입력해주세요.",
    },
    checkEmailFormat: {
      validate: (value) =>
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/i.test(value),
      message: "올바른 이메일 주소가 아닙니다.",
    },
    emailInUse: {
      validate: (value) => value !== "test@codeit.com",
      message: "이미 사용중인 이메일입니다.",
    },
    checkPasswordFormat: {
      validate: (value) => /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/.test(value),
      message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    },
    matchPassword: {
      validate: (value) => {
        const passwordValue =
          loginFormEl.querySelector("#password-input").value;
        return Boolean(passwordValue === value);
      },
      message: "비밀번호가 일치하지 않아요.",
    },
  },
};
const ERROR_CLASS = "error";
const HIDDEN_CLASS = "hidden";

// DOM
const loginFormEl = document.querySelector("form");
const formInputList = [...loginFormEl.querySelectorAll("input")];
const inputErrorMessageList = [
  ...loginFormEl.querySelectorAll(".error-message"),
];

// function
function findInvalidKey(name, value) {
  const validationList = validator.validationMap[name];
  const invalidKey = validationList.find(
    (key) => !validator.validations[key].validate(value)
  );
  return invalidKey;
}

function toggleErrorStatus(target, invalidKey) {
  const { name } = target;
  const errorMessageEl = inputErrorMessageList.find((el) =>
    el.classList.contains(name)
  );

  if (invalidKey) {
    errorMessageEl.textContent = validator.validations[invalidKey].message;
    errorMessageEl.classList.remove(HIDDEN_CLASS);
    target.classList.add(ERROR_CLASS);
  } else {
    errorMessageEl.textContent = "";
    errorMessageEl.classList.add(HIDDEN_CLASS);
    target.classList.remove(ERROR_CLASS);
  }
}

// Event Handler
function handleFormSubmit(e) {
  e.preventDefault();
  formInputList.forEach((target) => {
    const { name, value } = target;
    const invalidKey = findInvalidKey(name, value);
    toggleErrorStatus(target, invalidKey);
  });
  if (formInputList.every((el) => !el.classList.contains(ERROR_CLASS))) {
    window.location.replace("/folder");
  }
}

function handleInputFocusout({ target }) {
  if (target.tagName === "INPUT") {
    const { name, value } = target;
    const invalidKey = findInvalidKey(name, value);
    toggleErrorStatus(target, invalidKey);
  }
}

// Event Listener
loginFormEl.addEventListener("submit", handleFormSubmit);
loginFormEl.addEventListener("focusout", handleInputFocusout);
loginFormEl.addEventListener("click", handleClickEyeIcon);
