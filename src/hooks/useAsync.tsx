import { useState } from "react";
import { useEffectOnce } from "./useEffectOnce.tsx";

interface AsyncFunction {
  (): Promise<any>;
}

interface AsyncResult {
  loading: boolean;
  error: any;
  data: any;
  execute: () => Promise<any>;
}

export const useAsync = (asyncFunction: AsyncFunction): AsyncResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffectOnce(execute);

  return { execute, loading, error, data };
};
