import { useState, useEffect } from 'react';
import { getSampleUserData, getSampleFolderData } from '../api/api';

const useSampleData = dataType => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let sampleData;
        if (dataType === 'user') {
          sampleData = await getSampleUserData();
        } else if (dataType === 'folder') {
          sampleData = await getSampleFolderData();
        }
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
