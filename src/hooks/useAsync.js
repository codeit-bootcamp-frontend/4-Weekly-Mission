import { useEffect, useState } from "react";

export const useAsync = (asyncFunction) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const executor = async () => {
    setIsLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await asyncFunction();
      setData(response?.data);
      return response;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    executor();
  }, []);

  return { executor, isLoading, error, data };
};
