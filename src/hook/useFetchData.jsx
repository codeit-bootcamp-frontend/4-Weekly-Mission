import { useEffect, useState } from 'react';

/**
 * fetch 커스텀 훅
 * @param {function} fetchFunction 데이터 가져오는 비동기 함수
 * @param {function} processData 데이터 처리하는 함수
 */
function useFetchData(fetchFunction, processData) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetchFunction();
        if (!res.ok) {
          throw new Error('Response error');
        }
        const data = await res.json();
        setData(processData(data));
      } catch (e) {
        setError(e);
      }
    }
    fetchData();
  }, []);

  return [data, error];
}
export default useFetchData;
