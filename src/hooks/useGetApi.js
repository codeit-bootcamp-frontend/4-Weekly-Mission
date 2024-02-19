import { useState, useEffect } from 'react';

const useGetApi = (apiFunc, defaultData) => {
  const [data, setData] = useState(defaultData);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await apiFunc();
        setData(response);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [apiFunc]);

  const resetError = () => setError(null);

  return { data, error, isLoading, resetError };
};

export default useGetApi;
