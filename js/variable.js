export function getEmailInput(login) {
  return document.getElementById(`input-email-${login}`);
}

export function getPasswordInput(login) {
  return document.getElementById(`input-password-${login}`);
}

export function getPasswordCheck() {
  return document.getElementById('input-password-signup-check');
}

export function getLoginForm(login) {
  return document.getElementById(`${login}-form`);
}

export const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
