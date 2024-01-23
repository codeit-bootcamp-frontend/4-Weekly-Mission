export const isValidEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,24}$/i;
  return regex.test(email);
};

export const isValidPassword = (password) => {
  const regex = /(?=.*\d)(?=.*[a-z]).{8,}/;
  return regex.test(password);
};
