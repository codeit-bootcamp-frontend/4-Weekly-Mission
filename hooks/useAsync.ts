import { useState } from "react";
import { useEffectOnce } from "./useEffectOnce";
import { AxiosResponse } from "axios";

type ErrorData = null | unknown;

export const useAsync = <T>(
  asyncFunction: () => Promise<AxiosResponse<any, any>>
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorData>(null);
  const [data, setData] = useState<T>(null as T);

  const execute = async () => {
    setLoading(true);
    setError(null);
    setData(null as T);
    try {
      const response = await asyncFunction();
      setData(response?.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffectOnce(execute);

  return { execute, loading, error, data };
};
