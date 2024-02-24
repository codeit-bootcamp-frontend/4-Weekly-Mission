import { useState, useEffect, useCallback } from "react";

const useGetJson = (func, param = null) => {
  const [values, setValues] = useState([]);
  const HandleLoad = useCallback(async () => {
    let results;
    try {
      results = await func(param);
    } catch (error) {
      console.error(error);
    }

    if (!results) return;
    setValues(results);
  }, [func, param]);

  useEffect(() => {
    HandleLoad();
  }, [HandleLoad]);

  return values;
};

export default useGetJson;
