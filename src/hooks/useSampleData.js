import { useState, useEffect } from 'react';
import { getSampleUserData, getSampleFolderData } from '../api/api';

const SAMPLE_DATA_MAP = {
  user: getSampleUserData,
  folder: getSampleFolderData,
};

const useSampleData = dataType => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sampleData = await SAMPLE_DATA_MAP[dataType]?.();
        setData(sampleData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dataType]);

  return data;
};

export default useSampleData;
