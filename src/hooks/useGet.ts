import { useEffect, useState } from "react";

export default function useGet<T>(url: string) {
  const [data, setData] = useState<T | []>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result.data);
      // console.log(result.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, isLoading };
}
