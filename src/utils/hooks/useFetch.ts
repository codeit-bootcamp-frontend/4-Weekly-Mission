import { useState, useEffect } from "react";

interface Fetch<T> {
  data: T | null;
  error: null;
  loading: boolean;
}

const useFetch = <T>(url: string): Fetch<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData: T = await response.json();
        setData(responseData);
      } catch (error) {
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
