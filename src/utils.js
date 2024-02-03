export const emailCheck = (confirmEmail) => {
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return email_regex.test(confirmEmail) ? true : false;
};

export const passwordCheck = (confirmPassword) => {
  const password_regax = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return password_regax.test(confirmPassword) ? true : false;
};
