function validatePassword(password) {
  const passwordPattern = new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$');
  return passwordPattern.test(password);
}

export default validatePassword;
