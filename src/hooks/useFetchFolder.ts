import { useEffect, useState } from "react";

export default function useFetchFolder<T>(url: string) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result.folder);
        // console.log(result.folder);
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
