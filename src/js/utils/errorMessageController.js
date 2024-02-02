const addErrorMessage = (parentElement, errorMessage, errorTag) => {
  if (errorTag) {
    errorTag.innerText = errorMessage;
  } else {
    parentElement.classList.add('invalid-input-error');
    const newErrorTag = document.createElement('p');
    newErrorTag.innerText = errorMessage;
    parentElement.append(newErrorTag);
  }
};

const removeErrorMessage = (parentElement, errorTag) => {
  parentElement.classList.remove('invalid-input-error');
  errorTag?.remove();
};

export { addErrorMessage, removeErrorMessage };
