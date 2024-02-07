function saveAccessToken(accessToken) {
    localStorage.setItem('accessToken', accessToken);
  }
  
  function getAccessToken() {
    return localStorage.getItem('accessToken');
  }
  
  function logout() {
    localStorage.removeItem('accessToken');
    window.location.href = "/login";
  }
  
  function redirectToFolderIfLoggedIn() {
    if (getAccessToken()) {
      window.location.href = "/folder";
    }
  }
  
  export { saveAccessToken, getAccessToken, logout, redirectToFolderIfLoggedIn };
  