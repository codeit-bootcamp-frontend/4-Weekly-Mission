// 로그인 상태 확인
function authCheck() {
  if (localStorage.getItem('accessToken')) {
    location.href = './folder.html';
  }
}

export { authCheck };
