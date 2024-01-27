/**비밀번호를 보기 위해 속성을 바꾸는 함수 */
function typeToText(imgTag, input) {
  imgTag.setAttribute("src", "./images/logo_icon/eye_icon.png");
  imgTag.setAttribute("alt", "비밀번호 보기");
  input.setAttribute("type", "text");
}

/**비밀번호를 숨기기 위해 속성을 바꾸는 함수 */
function typeToPassword(imgTag, input) {
  imgTag.setAttribute("src", "./images/logo_icon/hidden_eye_icon.png");
  imgTag.setAttribute("alt", "비밀번호 보기");
  input.setAttribute("type", "text");
}

export { typeToText, typeToPassword };
