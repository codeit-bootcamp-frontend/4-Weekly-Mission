import { useState, useEffect } from 'react';
import { getSampleUserData, getSampleFolderData, getUserData } from '../api/api';

const DATA_MAP = {
  sampleUser: getSampleUserData,
  sampleFolder: getSampleFolderData,
  user: getUserData,
};

const useFetchData = (dataType, id = null) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let targetData;
        if (id) {
          targetData = await DATA_MAP[dataType]?.(id);
        } else {
          targetData = await DATA_MAP[dataType]?.();
        }
        setData(targetData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dataType, id]);

  return data;
};

export default useFetchData;
