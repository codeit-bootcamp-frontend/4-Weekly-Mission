import { useState } from "react";

type Callback = (...rest: any[]) => Promise<any>;

function useAsync(callback: Callback) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<any>(null);

  const wrappedFunction = async (...args: any[]) => {
    try {
      setPending(true);
      setError(null);
      return await callback(...args);
    } catch (error) {
      setError(error);
    } finally {
      setPending(false);
    }
  };

  return [pending, error, wrappedFunction];
}

export default useAsync;
