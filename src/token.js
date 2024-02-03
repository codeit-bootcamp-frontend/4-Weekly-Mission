export const setToken = (res) => {
  const accessToken = res.data.accessToken;
  const refreshToken = res.data.refreshToken;
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};
