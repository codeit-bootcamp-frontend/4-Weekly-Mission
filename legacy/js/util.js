// focus 및 action에 따른 input border style changer
export function inputFocusBorderChange(type, inputElm, textElm, text = "") {
  let borderStyle = "1px solid #CCD5E3";
  if (type === "focus_on") {
    borderStyle = "1px solid #6D6AFE";
  } else if (type === "valid_error") {
    borderStyle = "1px solid #FF5B56";
  }
  inputElm.style.border = borderStyle;
  inputElm.style.outline = "none";
  textElm.textContent = text;
}

// hidden button initial setting
export function addEventPwHiddenBtn(pwHiddenBtn, pwInput, toggle) {
  pwHiddenBtn.innerHTML = '<img src="./images/eye-off.svg" />';
  // 심화 : pw eye button 클릭 이벤트 추가 > type - password, text toggle event
  pwHiddenBtn.addEventListener("click", function (e) {
    e.preventDefault();
    toggle = !toggle;
    if (toggle) {
      pwHiddenBtn.innerHTML = '<img src="./images/eye-on.svg" />';
      pwInput.type = "text";
    } else {
      pwHiddenBtn.innerHTML = '<img src="./images/eye-off.svg" />';
      pwInput.type = "password";
    }
  });
}

export function loginSuccess(data) {
  const accessToken = data?.accessToken;
  const refreshToken = data?.refreshToken;
  // 로컬스토리지에 저장
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
  // 정상적인 로그인일 경우 /folder 로 이동
  window.location.href = "/folder";
}
