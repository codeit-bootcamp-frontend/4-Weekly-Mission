import { useEffect, useState } from "react";

function useFetch(fetchFn) {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setStatus("fetching");
    fetchFn()
      .then((response) => {
        setStatus("success");
        setData(response);
      })
      .catch((error) => {
        setStatus("error");
        setError(error);
      });
  }, []);

  return { status, data, error };
}

export default useFetch;
