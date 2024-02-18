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

export const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return year + "." + month + "." + day;
};
/*
  2분 미만은 “1 minute ago”
  59분 이하는 “OO minutes ago”
  60분 이상은 “1 hour ago”
  23시간 이하는 “OO hours ago”
  24시간 이상은 “1 day ago”
  30일 이하는 “OO days ago”
  31일 이상은 “1 month ago”
  11달 이하는 “OO months ago”
  12달 이상은 “1 year ago”
  OO달 이상은 “{OO/12(소수점 버린 정수)} years ago”
*/
export const setBeforeDate = (date) => {
  const currentDate = new Date();
  const subTime = currentDate.getTime() - date.getTime();

  const minSubTime = Math.floor(subTime / (1000 * 60));
  const hourSubTime = Math.floor(subTime / (1000 * 60 * 60));
  const daySubTime = Math.floor(subTime / (1000 * 60 * 60 * 24));
  const monthSubTime = Math.floor(subTime / (1000 * 60 * 60 * 24 * 30));
  const yearSubTime = Math.floor(subTime / (1000 * 60 * 60 * 24 * 30 * 12));

  if (minSubTime < 2) {
    return "1 minute ago";
  } else if (minSubTime < 59) {
    return minSubTime + " minutes ago";
  } else if (hourSubTime < 2) {
    return "1 hour ago";
  } else if (hourSubTime < 23) {
    return hourSubTime + " hours ago";
  } else if (daySubTime < 2) {
    return "1 day ago";
  } else if (daySubTime < 30) {
    return daySubTime + " days ago";
  } else if (monthSubTime < 2) {
    return "1 month ago";
  } else if (monthSubTime < 11) {
    return monthSubTime + " months ago";
  } else if (yearSubTime < 2) {
    return "1 year ago";
  } else {
    return yearSubTime + " years ago";
  }
};
