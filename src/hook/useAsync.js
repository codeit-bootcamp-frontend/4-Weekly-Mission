const { useState } = require("react");

function useAsync(callback) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const wrappedFunction = async (...args) => {
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
