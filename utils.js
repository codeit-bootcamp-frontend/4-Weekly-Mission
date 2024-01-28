const USER_EMAIL = "test@codeit.com";
const USER_PASSWORD = "codeit101";

function emailFormatCheck(email) {
  var regex =
    /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return email != "" && email != "undefined" && regex.test(email);
}

function passwordFormatCheck(password) {
  var regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  return regex.test(password);
}

function togglePasswordEye(passwordInput, toggleButton) {
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
  toggleButton.src =
    type === "password" ? "./images/eye-off.svg" : "./images/eye.svg";
}

function errorMessageVisibleAndTextChange(errorQuerySelector, message) {
  errorQuerySelector.style.visibility = "visible";
  errorQuerySelector.textContent = message;
}

function errorMessageHidden(errorQuerySelector) {
  errorQuerySelector.style.visibility = "hidden";
}

const isPasswordAndEmailMatch = (email, password) => {
  return USER_EMAIL === email && USER_PASSWORD === password;
};

export {
  emailFormatCheck,
  passwordFormatCheck,
  togglePasswordEye,
  errorMessageVisibleAndTextChange,
  errorMessageHidden,
  isPasswordAndEmailMatch,
  USER_EMAIL,
};
