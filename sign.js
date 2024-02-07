//  함수를 따로 공통화하는 것이 편하다..


export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]*$/;
  return passwordRegex.test(password);
};

export function alreadyLogin() {
  const accessToken = localStorage.getItem('access-token');
  if (accessToken) {
    window.location.href = '/folder';
  }
}














