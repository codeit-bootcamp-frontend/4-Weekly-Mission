import { getFolderList } from "../api";
import { useState, useEffect } from "react";

const useFolderList = () => {
  const [folderList, setFolderList] = useState([]);

  useEffect(() => {
    const fetchFolderList = async () => {
      const { data } = await getFolderList();
      setFolderList(data);
    };

    fetchFolderList();
  }, []);

  return folderList;
};

export default useFolderList;
