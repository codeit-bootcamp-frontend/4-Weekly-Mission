export const setToken = ({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}): void => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};
export const getToken = (): {
  accessToken: string | null;
  refreshToken: string | null;
} => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  return { accessToken, refreshToken };
};
