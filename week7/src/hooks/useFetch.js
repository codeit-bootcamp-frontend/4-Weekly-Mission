import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const body = await response.json();
      setData(body);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data };
};

export default useFetch;
