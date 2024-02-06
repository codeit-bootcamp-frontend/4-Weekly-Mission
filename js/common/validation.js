export function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return regex.test(email);
}

export function validatePassword(password) {
  const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return regex.test(password);
}

export function validatePasswordRepeat(repeatValue, target, scope = document) {
  const passwordInput = scope.querySelector(target);
  return passwordInput && passwordInput.value === repeatValue;
}
