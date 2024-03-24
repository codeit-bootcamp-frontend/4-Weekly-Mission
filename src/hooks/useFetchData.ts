import { useEffect, useState } from 'react';
import createAxiosInstance from '../utils/axios';

interface FetchDataResponse<T> {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
}

const useFetchData = <T>(url: string): FetchDataResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const axios = createAxiosInstance();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data: response } = await axios.get<T>(url);
        setData(response);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetchData;
