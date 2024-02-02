/**
 *  로컬 스토리지에 access token이 있는지 확인 합니다.
 *  @returns {boolean}
 */
export const isLogin = () => localStorage.getItem("access_token");
