import { useState } from "react";

export default function useAsync(asyncFunction) {
  const [loadigError, setLoadingError] = useState(null);

  const wrappedFunction = async () => {
    try {
      setLoadingError(null);
      return await asyncFunction();
    } catch (error) {
      setLoadingError(error);
    }
  };

  return [loadigError, wrappedFunction];
}
