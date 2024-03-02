import { useEffect, useState } from "react";

function useFetch(fetchFn) {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [event, setEvent] = useState(false);

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
      })
      .finally(() => {
        setEvent(false);
      });
  }, [event]);

  return { status, data, error, setEvent };
}

export default useFetch;
