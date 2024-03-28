import { useState, useEffect } from 'react';
import type { LinkData } from '../components/apis/useGetLink';

export const useAsync = (asyncFunction: () => Promise<any>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>();
  const [data, setData] = useState<LinkData[] | any>([]);

  const useEffectOnce = (callback: () => void) => {
    useEffect(() => {
      callback();
    }, []);
  };

  const execute = async () => {
    setLoading(true);
    setError(false);
    setData([]);
    try {
      const response = await asyncFunction();
      setData(response?.data);
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
