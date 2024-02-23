import { useCallback, useEffect, useState } from "react";

function useAsync(asyncFunction) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await asyncFunction();
      setResult(response);
      return response;
    } catch (error) {
      setError(error);
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
