export function getElementById(id) {
  return document.getElementById(id);
}

export function addClass(element, className) {
  element.classList.add(className);
}

export function removeClass(element, className) {
  element.classList.remove(className);
}

export function noErrorMessage(element) {
  return element.classList.contains('hidden');
}

export function makeVisiable(element) {
  element.classList.remove('hidden');
}

export function makeInvisiable(element) {
  element.classList.add('hidden');
}
