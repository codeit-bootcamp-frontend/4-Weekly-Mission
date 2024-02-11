import { useQuery } from 'react-query';
// import { useEffect, useState } from 'react';

/**
 * fetch 커스텀 훅
 * @param {function} fetchFunction 데이터 가져오는 비동기 함수
 * @param {function} processData 데이터 처리하는 함수
 */

function useFetchData(fetchFunction, queryKey, processData) {
  return useQuery(queryKey, async () => {
    const res = await fetchFunction();
    if (!res.ok) {
      throw new Error('Response error');
    }
    const data = await res.json();
    return processData(data);
  });
}

export default useFetchData;
