/* Common Service Logic */

//이메일 양식 유효성 검사
function isValidEmailFormat(emailInputValue) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(emailInputValue);
}

//로컬 스토리지에 accessToken이 있으면 페이지 이동
function checkAccessToken() {
  const accessToken = localStorage.getItem("accessToken");
  //디버깅용 accessToken 제거
  //localStorage.removeItem("accessToken");
  if (accessToken) {
    // return (location.href = "../folder/index.html");
  }
}

export { isValidEmailFormat, checkAccessToken };
