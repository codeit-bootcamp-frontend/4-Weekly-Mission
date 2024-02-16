import { useState, useEffect } from 'react';
export const useAPIData = (DataAPI, APIid = null) => {
  const [Data, setData] = useState(null);
  const handleData = async (ID) => {
    const APIData = await DataAPI(ID);
    setData(APIData);
  };

  useEffect(() => {
    const getAPIData = async () => {
      const APIData = await DataAPI(APIid);
      setData(APIData);
    };
    getAPIData();
  }, []);

  return { Data, handleData };
};
