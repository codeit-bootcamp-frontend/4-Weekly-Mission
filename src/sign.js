export function errorBoxOnOff(type, target) {
  const targetNode = document.querySelector(`#${target}`)
  targetNode.style.display = type === 'off' ? 'none' : 'block'
}

export function showError(id, message) {
  errorBoxOnOff('on', `${id}ErrorBox`);
  document.querySelector(`#${id}ErrorBox`).textContent = message;
  document.querySelector(`#${id}`).classList.add('error_box_border');
}

export function hideError(id) {
  errorBoxOnOff('off', `${id}ErrorBox`);
  document.querySelector(`#${id}`).classList.remove('error_box_border');
}

export function checkisValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

