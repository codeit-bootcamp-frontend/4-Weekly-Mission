import { FolderData } from "@/constants/index.types";
import { useEffect, useState } from "react";

export default function useFetchFolder<T>(url: string) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result.folder);
      console.log(result.folder);
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
