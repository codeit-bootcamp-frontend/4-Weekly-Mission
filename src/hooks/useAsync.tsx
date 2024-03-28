import { useState, useEffect } from 'react';

export const useAsync = (asyncFunction: () => Promise<any>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>();
  const [data, setData] = useState(null);

  const useEffectOnce = (callback: () => void) => {
    useEffect(() => {
      callback();
    }, []);
  };

  const execute = async () => {
    setLoading(true);
    setError(false);
    setData(null);
    try {
      const response = await asyncFunction();
      setData(response?.data?.data);
      return response;
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffectOnce(execute);

  return { execute, loading, error, data };
};
