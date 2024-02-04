import { ERROR_MESSAGE, TEST_USER } from "./constant.js";
import { emailCheck, passwordCheck, redirectPage } from "./utils.js";

const setError = (currentElement, errorTextElement, errorMessage) => {
  currentElement.classList.add("errorInput");
  errorTextElement.textContent = errorMessage;
};
const removeError = (currentElement, errorTextElement) => {
  currentElement.classList.remove("errorInput");
  errorTextElement.textContent = "";
};

const confirmUserLogin = (currentElement, emailErrorElement, passwordErrorElement) => {
  const email = currentElement[0];
  const password = currentElement[1];
  const LOGIN_USER = { email: "test@codeit.com", password: "sprint101" };

  if (email.value === TEST_USER.ID && password.value === TEST_USER.PASSWORD) {
    redirectPage("folder");
  } else if (email.value === LOGIN_USER.email && password.value === LOGIN_USER.password) {
    logInUser(email.value, password.value);
  } else {
    setError(email, emailErrorElement, ERROR_MESSAGE.CONFIRM_EMAIL);
    setError(password, passwordErrorElement, ERROR_MESSAGE.CONFIRM_PASSWORD);
  }
};

const logInUser = async (email, password) => {
  const user = { email, password };
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const result = await response.json();
    const data = result["data"];
    const accessToken = data["accessToken"];
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      redirectPage("folder");
    }
  } catch (error) {
    console.log(error);
  }
};

const isDuplicateEmail = async (email) => {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/check-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (response.status === 200) {
      return true;
    } else if (response.status === 409) {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

const confirmEmail = (emailElement, emailErrorElement) => {
  if (!emailCheck(emailElement.value) || emailElement.value === TEST_USER.ID) {
    setError(emailElement, emailErrorElement, ERROR_MESSAGE.CONFIRM_EMAIL);
    return false;
  } else {
    removeError(emailElement, emailErrorElement);
    return true;
  }
};
const confirmPassword = (passwordElement, passwordErrorElement) => {
  if (!passwordCheck(passwordElement.value)) {
    setError(passwordElement, passwordErrorElement, ERROR_MESSAGE.CONFIRM_PASSWORD);
    return false;
  } else {
    removeError(passwordElement, passwordErrorElement);
    return true;
  }
};
const confirmPasswordCheck = (pwElement, pwCheckElement, pwCheckErrorElement) => {
  if (pwElement.value !== pwCheckElement.value) {
    setError(pwCheckElement, pwCheckErrorElement, ERROR_MESSAGE.CONFIRM_PASSWORD);
    return false;
  } else {
    removeError(pwCheckElement, pwCheckErrorElement);
    return true;
  }
};

const registerUser = async (email, password) => {
  const user = { email, password };
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const result = await response.json();
    const data = result["data"];
    const accessToken = data["accessToken"];
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      redirectPage("folder");
    }
  } catch (error) {
    console.log(error);
  }
};

const toggleEye = (currentPassword, currentEye) => {
  currentEye.classList.toggle("on");
  if (currentEye.classList.contains("on")) {
    currentPassword.removeAttribute("type");
  } else {
    currentPassword.setAttribute("type", "password");
  }
};

export {
  setError,
  removeError,
  confirmUserLogin,
  confirmEmail,
  confirmPassword,
  confirmPasswordCheck,
  registerUser,
  isDuplicateEmail,
  toggleEye,
};
