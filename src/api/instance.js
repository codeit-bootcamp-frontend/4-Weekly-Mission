/**
 * HTTP request용 모듈
 *
 * @async
 * @function
 * @param {string} url 요청 URL
 * @param {string} method 요청할 HTTP 메서드
 * @param {Object} [body] 요청 본문 데이터(optional)
 * @param {Object} [headers] 요청에 추가적인 헤더(optional)
 * @returns {Promise} 응답 데이터
 * @throws {Error} 응답 상태가 'ok'가 아닐 경우 에러발생
 */

const baseUrl = 'https://bootcamp-api.codeit.kr/api';

const request = async (url, method, body, headers = {}) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  const res = await fetch(baseUrl + url, options);
  const data = await res.json();

  if (res.ok) return data;
  else throw Error(data);
};

export const get = (url) => request(url, 'GET');
export const post = (url, body) => request(url, 'POST', body);
