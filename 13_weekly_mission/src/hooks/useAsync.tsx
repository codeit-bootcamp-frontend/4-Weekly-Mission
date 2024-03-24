import { useState, useEffect } from 'react';

interface Link {
  id: number;
  createdAt: string;
  url: string;
  imageSource: string;
  title: string;
  description: string;
}

export const useAsync = (asyncFunction: () => Promise<any>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>();
  const [data, setData] = useState<Link[] | any>([]);

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
