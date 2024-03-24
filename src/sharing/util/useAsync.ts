import { useState } from "react";
import { useEffectOnce } from "./useEffectOnce";

export const useAsync = (asyncFunction: any) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  interface CustomError extends Error {
    response?: {
      date: any;
      status: number;
      headers: string;
    };
  }
  const execute = async () => {
    setLoading(true);
    setData(null);
    try {
      const response = await asyncFunction();
      setData(response?.data);
      return response;
    } catch (error: unknown) {
      const customErr = error as CustomError;
      console.error(customErr.response?.date);
      console.error(customErr.response?.status);
      console.error(customErr.response?.headers);
    } finally {
      setLoading(false);
    }
  };

  useEffectOnce(execute);

  return { execute, loading, data };
};
