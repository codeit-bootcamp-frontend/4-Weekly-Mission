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

const useFetchData = (dataType, folderData = 0) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let targetData;

        if (folderData === 0) {
          targetData = await DATA_MAP[dataType]?.();
        } else {
          targetData = await DATA_MAP[dataType]?.(folderData);
        }

        setData(targetData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dataType, folderData]);

  return data;
};

export default useFetchData;
