import { useEffect, useState } from "react";
import api from "./api";

const useFetchData = (apiEndpoint, func = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const result = await api(apiEndpoint);
      const body = await result.json();
      setData(body);

      {
        func && func();
      }
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [apiEndpoint]);

  return { data, error };
};
export default useFetchData;
