import { useState, useEffect } from 'react';
import {
  getSampleUserData,
  getSampleFolderData,
  getTargetUserData,
  getTargetUserFolderListData,
  getTargetUserFolderLinkListData,
} from '../api/api';

const DATA_MAP = {
  sampleUser: getSampleUserData,
  sampleFolder: getSampleFolderData,
  targetUser: getTargetUserData,
  targetUserFolderList: getTargetUserFolderListData,
  targetUserFolderLinkList: getTargetUserFolderLinkListData,
};

const useFetchData = (dataType, userId = null, folderId = null) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let targetData;

        if (userId) {
          if (userId && folderId) {
            targetData = await DATA_MAP[dataType]?.(userId, folderId);
          } else {
            targetData = await DATA_MAP[dataType]?.(userId);
          }
        } else {
          targetData = await DATA_MAP[dataType]?.();
        }
        setData(targetData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dataType, userId, folderId]);

  return data;
};

export default useFetchData;
