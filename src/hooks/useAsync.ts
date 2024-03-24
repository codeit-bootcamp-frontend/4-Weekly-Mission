import { useCallback } from 'react';

function useAsync<T>(asyncFunction: (...args: any[]) => Promise<T>) {
  const wrappedFunction = useCallback(
    async (...args: any) => {
      try {
        return await asyncFunction(...args);
      } catch (error: any) {
        return;
      }
    },
    [asyncFunction],
  );

  return wrappedFunction;
}

export default useAsync;
