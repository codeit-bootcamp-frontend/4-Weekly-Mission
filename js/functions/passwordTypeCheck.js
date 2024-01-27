/** 현재 속성이 password인지 확인하는 함수 */
const passwordTypeCheck = function (passwordInput) {
  return passwordInput.getAttribute("type") === "password";
};

export { passwordTypeCheck };
