import { useEffect, useState } from "react";

const useAsync = (asyncFunction) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const run = async () => {
    setPending(true);
    setError(null);
    setData(null);
    try {
      const response = await asyncFunction();
      setData(response.data);
      return response;
    } catch (error) {
      setError(error);
    } finally {
      setPending(false);
    }
  };

  //처음 데이터를 불러오기 위해 useEffect 훅이 한번만 실행됨
  useEffect(() => {
    run();
    // eslint-disable-next-line
  }, []);

  return { run, pending, error, data };
};

export default useAsync;
