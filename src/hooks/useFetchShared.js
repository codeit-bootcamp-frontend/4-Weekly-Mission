import { useState, useEffect } from 'react';

import { getShared } from '../apis/api';

export const useFetchShared = () => {
  const [sharedFolder, setSharedFolder] = useState({});

  useEffect(() => {
    const fetchFolder = async () => {
      const { folder } = await getShared();
      
      setSharedFolder(folder);
    };

    fetchFolder();
  }, []);

  return sharedFolder;
}