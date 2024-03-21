import { useState, useEffect } from 'react';

const useAPIData = <T>(
  DataAPI: (param: string | null) => Promise<T>,
  APIParameter: string | null = null,
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getAPIData = async () => {
      setIsLoading(true);
      const APIData = await DataAPI(APIParameter);
      setData(APIData);
      setIsLoading(false);
    };
    getAPIData();
  }, [APIParameter, DataAPI]);

  return { data, isLoading };
};

export default useAPIData;
