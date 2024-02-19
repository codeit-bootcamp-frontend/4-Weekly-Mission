import { useState, useEffect } from 'react';

const useGetApi = (apiFunc, defaultData) => {
  const [data, setData] = useState(defaultData);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiFunc();
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [apiFunc]);

  return { data, error, isLoading };
};

export default useGetApi;
