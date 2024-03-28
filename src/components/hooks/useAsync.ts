import { useState } from "react";

type AsyncFunction<T, P extends any[]> = (...args: P) => Promise<T>;

function useAsync<T, P extends any[]>(
  asyncFunction: AsyncFunction<T, P>
): [Error | null, (...args: P) => Promise<T | undefined>] {
  const [error, setError] = useState<Error | null>(null);

  const wrappedFunction = async (...args: P) => {
    try {
      setError(null);
      return await asyncFunction(...args);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error("An unknown error occurred"));
      }
      return;
    }
  };

  return [error, wrappedFunction];
}

export default useAsync;
