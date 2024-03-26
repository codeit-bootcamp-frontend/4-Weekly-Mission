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

const useFetchData = (
  dataType: keyof typeof DATA_MAP,
  userId = 0,
  folderData?: { id: number }
) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let targetData;
        if (
          dataType === "profileDataFetch" ||
          dataType === "folderListDataFetch"
        ) {
          targetData = await DATA_MAP[dataType]?.(userId);
        } else {
          targetData = await DATA_MAP[dataType]?.(
            userId,
            folderData as { id: number }
          );
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
