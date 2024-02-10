import { useCallback, useState } from "react";

function useAsync(asyncFunction) {
  const [error, setError] = useState(null);

  const wrappedFunction = useCallback(
    async (...args) => {
      try {
        setError(null);
        return await asyncFunction(...args);
      } catch (error) {
        setError(error);
        return;
      }
    },
    [asyncFunction]
  );

  return [error, wrappedFunction];
}

export default useAsync;
