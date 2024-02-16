import { useState, useEffect } from 'react';
export const useAPIData = (DataAPI, APIParameter = null) => {
  const [Data, setData] = useState(null);
  const handleData = async (newAPIParameter) => {
    const APIData = await DataAPI(newAPIParameter);
    setData(APIData);
  };

  useEffect(() => {
    const getAPIData = async () => {
      const APIData = await DataAPI(APIParameter);
      setData(APIData);
    };
    getAPIData();
  }, []);

  return { Data, handleData };
};
