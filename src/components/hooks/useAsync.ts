import { useCallback, useEffect, useState } from 'react';

interface AsyncFunction<T> {
  (): Promise<T>;
}
interface AsyncResult<T> {
  loading: boolean;
  error: Error | null;
  result: T | null;
  execute: () => Promise<T | void>;
}

function useAsync<T>(asyncFunction: AsyncFunction<T>): AsyncResult<T> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [result, setResult] = useState<T | null>(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await asyncFunction();
      setResult(response);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  }, [asyncFunction]);

  useEffect(() => {
    execute();
  }, []);

  return { loading, error, execute, result };
}
export default useAsync;
