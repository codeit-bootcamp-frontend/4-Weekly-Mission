export const showPassword = ({ target }) => {
  const password = target.previousElementSibling;
  const { classList } = target;
  if (classList.contains("img-eye")) {
    classList.toggle("active");
    password.type = password.type === "password" ? "text" : "password";
  }
};
