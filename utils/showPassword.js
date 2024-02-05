/**
 * 버튼을 클릭 시 비밀번호를 가리거나 보여줍니다.
 * @param {HTMLElement} target - 버튼 Element
 */
export const showPassword = ({ target }) => {
  const password = target.previousElementSibling;
  const { classList } = target;
  if (classList.contains("img-eye")) {
    classList.toggle("active");
    password.type = password.type === "password" ? "text" : "password";
  }
};
