function updateErrorMessage(el, message, inputBox, addClass) {
  el.innerHTML = message;

  addClass
    ? inputBox.classList.add("error-box")
    : inputBox.classList.remove("error-box");
}

export { updateErrorMessage };
