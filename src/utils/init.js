const initializeSignPage = () => {
  const isAccessToken = !!localStorage.getItem('accessToken');
  if (isAccessToken) {
    window.location.href = '../pages/folder.html';
  }
};

export { initializeSignPage };
