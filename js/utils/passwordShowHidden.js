/**비밀번호를 보기 위해 속성을 바꾸는 함수 */
function showPasswordAttributes(imgTag, input) {
  imgTag.setAttribute("src", "./images/logo_icon/eye_icon.png");
  imgTag.setAttribute("alt", "비밀번호 보기");
  input.setAttribute("type", "text");
}

/**비밀번호를 숨기기 위해 속성을 바꾸는 함수 */
function hidePasswordAttributes(imgTag, input) {
  imgTag.setAttribute("src", "./images/logo_icon/hidden_eye_icon.png");
  imgTag.setAttribute("alt", "비밀번호 보기");
  input.setAttribute("type", "password");
}

/** 비밀번호 input의 현재 속성이 password인지 확인하는 함수 */
const passwordTypeCheck = function (passwordInput) {
  return passwordInput.getAttribute("type") === "password";
};

/** 눈 아이콘 클릭시 텍스트 보기 & 숨기기 전환하는 함수*/
const toggleShowPassword = function (imgTag, input) {
  passwordTypeCheck(input)
    ? showPasswordAttributes(imgTag, input)
    : hidePasswordAttributes(imgTag, input);
};

export { toggleShowPassword };
