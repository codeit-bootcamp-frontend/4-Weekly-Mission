// accessToken 저장
function saveAccessToken(token) {
  localStorage.setItem('accessToken', token);
}
// accessToken 가져오기
function getAccessToken() {
  return localStorage.getItem('accessToken');
}
// accessToken 삭제
function removeAccessToken() {
  localStorage.removeItem('accessToken');
}

export { saveAccessToken, getAccessToken, removeAccessToken };