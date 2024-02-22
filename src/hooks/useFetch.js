import { useEffect, useState } from 'react';

function useFetch(apiUrl) {
  const API_URL = process.env.REACT_APP_API_URL;

  // data, error 초기값은 비어있음, loading 초기값은 로딩 중인 상태
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // apiUrl 또는 API_URL이 변경될 경우 실행
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = new URL(apiUrl, API_URL);
        const response = await fetch(url);
        const result = await response.json();

        const responseError = result?.error ?? 'Fetch response failed';

        if (!response.ok) {
          throw new Error(`User response error: ${responseError}`);
        }

        setData(result);
      } catch (errorData) {
        const errorString = errorData.toString();
        setError(errorString);
      } finally {
        setLoading(false); // 로딩 끝
      }
    };

    // 함수 호출
    fetchData();
  }, [apiUrl, API_URL]);

  // 객체 반환
  return { data, loading, error };
}

export default useFetch;
