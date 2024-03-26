import { useEffect, useState } from "react";

export default function useGet<T>(url: string) {
  const [data, setData] = useState<T | []>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result.data);
        // console.log(result.data);
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
          console.error(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(url);
  }, [url]);

  return { data, isLoading };
}
