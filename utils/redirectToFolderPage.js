/**
 * 리디렉션할 URL을 인자로 받아서 변경합니다.
 * @param {string} 리디렉션할 URL
 */
export const redirectToFolderPage = (url) => {
  location.href = url;
};
