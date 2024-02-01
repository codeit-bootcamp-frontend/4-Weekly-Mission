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
