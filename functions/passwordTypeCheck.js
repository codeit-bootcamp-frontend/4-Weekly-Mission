const passwordTypeCheck = function (passwordInput) {
  return passwordInput.getAttribute("type") === "password";
};

export { passwordTypeCheck };
