import { useState, useEffect } from "react";

type AsyncFunction = () => Promise<any>;

export const useAsync = (asyncFunction: AsyncFunction, deps: any = null) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  const execute = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await asyncFunction();
      setData(response?.data);
      return response;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    execute();
  }, [deps]);

  return { execute, loading, error, data };
};
