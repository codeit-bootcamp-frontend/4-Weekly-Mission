export const changeInputColor = (messageElement, inputElement) => {
  messageElement.innerHTML ? inputElement.classList.add("error") : inputElement.classList.remove("error");
};
