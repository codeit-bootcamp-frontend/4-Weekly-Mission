import { useState } from "react";

export default function useAsync(asyncFunction: any) {
  const [isRequested, setIsRequested] = useState(false);
  const [error, setError] = useState<any>(null);

  const useAsyncManager = async (...items: any) => {
    try {
      setError(null);
      setIsRequested(true);
      return await asyncFunction(...items);
    } catch (error: any) {
      setError(error);
      return;
    } finally {
      setIsRequested(false);
    }
  };

  return [isRequested, error, useAsyncManager];
}
