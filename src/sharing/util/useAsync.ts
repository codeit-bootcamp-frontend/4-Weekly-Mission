import { useState } from "react";
import { useEffectOnce } from "./useEffectOnce";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useAsync = (asyncFunction: () => Promise<any>) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null); //처음엔 null이지만 error도 될 수 있어
  const [data, setData] = useState(null);

  const execute = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await asyncFunction();
      setData(response?.data);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffectOnce(execute);

  return { execute, loading, error, data };
};
