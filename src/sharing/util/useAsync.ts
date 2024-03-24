import { useState } from "react";
import { useEffectOnce } from "./useEffectOnce";

export const useAsync = <T>(asyncFunction: () => Promise<T>) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  const execute = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await asyncFunction();
      setData(response);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error("Unknown"));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffectOnce(execute);

  return { execute, loading, error, data };
};
