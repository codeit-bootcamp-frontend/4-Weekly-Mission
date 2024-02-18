import { useState, useEffect } from 'react';

import { getShared } from '../apis/api';

export const useFetchShared = () => {
  const [sharedFolders, setSharedFolders] = useState({});

  useEffect(() => {
    const fetchFolder = async () => {
      const { folder } = await getShared();
      
      setSharedFolders(folder);
    };

    fetchFolder();
  }, []);

  return sharedFolders;
}