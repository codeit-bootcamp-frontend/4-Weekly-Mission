const validateEmailInput = input => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(input);
};

export { validateEmailInput };
