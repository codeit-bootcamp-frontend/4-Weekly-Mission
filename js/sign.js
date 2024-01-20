const addErrorMessage = (parentElement, errorMessage) => {
  const errorTag = document.createElement('p');
  errorTag.innerText = errorMessage;
  parentElement.append(errorTag);
};

const removeErrorMessage = parentElement => {
  const errorTag = parentElement.querySelector('p');
  if (errorTag) {
    errorTag.remove();
  }
};
