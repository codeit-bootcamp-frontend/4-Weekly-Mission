import { useEffect, useState } from 'react';

export function useFetch(baseUrl) {
  const [data, setData] = useState(null);

  const fetchUrl = () => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return {
    data,
  };
}
