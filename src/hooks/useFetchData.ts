import { useState, useEffect } from "react";
import {
  profileDataFetch,
  folderListDataFetch,
  selectedFolderDataFetch,
} from "../api/api";

const DATA_MAP = {
  profileDataFetch,
  folderListDataFetch,
  selectedFolderDataFetch,
};

const useFetchData = (dataType: string, userId = 0, folderData = 0) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let targetData;

        if (folderData === 0) {
          targetData = await DATA_MAP[dataType]?.(userId);
        } else {
          targetData = await DATA_MAP[dataType]?.(userId, folderData);
        }

        setData(targetData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dataType, userId, folderData]);

  return data;
};

export default useFetchData;
