/**
 * 비밀번호를 보여주는 함수
 * @param {HTMLElement} 토클 버튼 Element
 */
export const showPassword = ({ target }) => {
  const password = target.previousElementSibling;
  const { classList } = target;
  if (classList.contains("img-eye")) {
    classList.toggle("active");
    password.type = password.type === "password" ? "text" : "password";
  }
};
