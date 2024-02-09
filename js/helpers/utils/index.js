// 굳이 이렇게 나눌 필요 없다고 하셨었는데 그냥 각각의 파일에 document.getElementById로 가져오면 될까요?
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
