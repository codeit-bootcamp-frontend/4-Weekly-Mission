import { useState, useEffect } from "react";

const useAsync = (asyncFunction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await asyncFunction();
        setData(result.data);
      } catch (error) {
        setError(error);
        console.error("error during fetch data", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [asyncFunction]);

  return { data, loading, error };
};

export default useAsync;
