export const displayPassword = (
  inputType,
  $passwordInput,
  $eyeOpenIcon,
  $eyeCloseIcon
) => {
  if (inputType === 'text') {
    $passwordInput.type = 'password';
    $eyeOpenIcon.classList.remove('display-hidden');
    $eyeCloseIcon.classList.add('display-hidden');
  } else {
    $passwordInput.type = 'text';
    $eyeOpenIcon.classList.add('display-hidden');
    $eyeCloseIcon.classList.remove('display-hidden');
  }
};
