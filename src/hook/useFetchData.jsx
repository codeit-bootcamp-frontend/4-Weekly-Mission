import { useQuery } from 'react-query';

/**
 * fetch 커스텀 훅
 * @param {Function} fetchFunction 데이터 가져오는 비동기 함수
 * @param {Function} processData 데이터 처리하는 함수
 * @param {string} queryKey
 */
function useFetchData(fetchFunction, queryKey, processData) {
  return useQuery(queryKey, async () => {
    const data = await fetchFunction();
    return processData(data);
  });
}

export default useFetchData;

// const fetchData = () => {};
