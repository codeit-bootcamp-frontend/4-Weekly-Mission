import handleClickEyeIcon from "/utils/onClickEyeIcon.js";

// const
const validator = {
  validationMap: {
    email: ["requiredEmail", "checkEmailFormat", "notSignupemail"],
    password: ["requiredPassword", "notSignuppassword"],
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
    requiredPassword: {
      validate: (value) => Boolean(value),
      message: "비밀번호를 입력해 주세요.",
    },
    notSignupemail: {
      validate: (value) => value,
      message: "이메일을 확인해 주세요.",
    },
    notSignuppassword: {
      validate: (value) => value,
      message: "비밀번호를 확인해 주세요.",
    },
  },
};
const userMap = {
  codeit: {
    email: "test@codeit.com",
    password: "codeit101",
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
  const emailInputEl = e.target.querySelector("#email-input");
  const pwInputEl = e.target.querySelector("#password-input");
  if (
    emailInputEl.value === userMap.codeit.email &&
    pwInputEl.value === userMap.codeit.password
  ) {
    window.location.replace("/folder");
  } else {
    formInputList.forEach((target) => {
      const { name } = target;
      toggleErrorStatus(target, [`notSignup${name}`]);
    });
  }
}

function handleInputFocusout({ target }) {
  const { name, value } = target;
  const invalidKey = findInvalidKey(name, value);
  toggleErrorStatus(target, invalidKey);
}

// Event Listener
loginFormEl.addEventListener("submit", handleFormSubmit);
formInputList.forEach((el) =>
  el.addEventListener("focusout", handleInputFocusout)
);
loginFormEl.addEventListener("click", handleClickEyeIcon);
