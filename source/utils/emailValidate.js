function validateEmail(email) {
  const emailPattern = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  return emailPattern.test(email);
}

export default validateEmail;
