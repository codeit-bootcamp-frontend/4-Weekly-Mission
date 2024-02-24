import { useState } from "react";

function useAsync(asyncFunction) {
  const [error, setError] = useState(null);

  const wrappedFunction = async (...args) => {
    try {
      setError(null);
      return await asyncFunction(...args); //api
    } catch (error) {
      setError(error);
      return;
    }
  };

  return [error, wrappedFunction];
}

export default useAsync;
