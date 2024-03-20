import { useEffect, useState } from 'react';
export function useFetch<T>(baseUrl: string): { data: T | null } {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await fetch(baseUrl);
        const jsonData: T = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('데이터를 불러오지 못했습니다', error);
      }
    };
    fetchUrl();
  }, [baseUrl]);
  return {
    data,
  };
}
