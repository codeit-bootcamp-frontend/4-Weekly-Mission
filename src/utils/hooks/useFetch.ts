import { useState, useEffect } from "react";

const useFetch = (url: string, handleData: any) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("error");
        }
        const responseData = await response.json();
        const jsonData = handleData(responseData);
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, handleData]);

  return { data, error, loading };
};

export default useFetch;
