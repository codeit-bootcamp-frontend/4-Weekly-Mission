import { useEffect, useState } from 'react';
import createAxiosInstance from '../utils/axios';

const useFetchData = url => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const axios = createAxiosInstance();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data: response } = await axios.get(url);
        setData(response);
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetchData;
