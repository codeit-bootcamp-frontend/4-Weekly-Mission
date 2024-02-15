/**
 * 데이터 요청하는 비동기 함수
 * @param {string} url
 * @param {string} method
 * @param {*} data body에 넣을 값이 존재하다면 추가
 * @returns {Promise<Response>}
 */
export const fetchRequest = async (url, method, data) => {
  const res = await fetch(`${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : null,
  });
  if (!res.ok) {
    throw new Error('Response error');
  }
  const resData = await res.json();
  return resData;
};
