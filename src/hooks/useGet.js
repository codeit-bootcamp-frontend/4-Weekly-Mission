import { useEffect, useState } from "react";

export default function useGet(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.error(`fetch 에러 ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, isLoading };
}
