// 비밀번호 보이기/숨기기 토글 함수
export function togglePasswordVisibility(passwordInput, toggleIcon) {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  const imageUrl =
    type === "password"
      ? "../image/icons/eye-off.svg"
      : "../image/icons/eye-on.svg";
  passwordInput.setAttribute("type", type);
  toggleIcon.src = imageUrl;
}
