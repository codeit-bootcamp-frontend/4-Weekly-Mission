import { useEffect, useState } from "react";
import { getFolderName } from "../API/FolderPageApi";

export const useFolderName = () => {
  const [folder, setFolder] = useState([]);

  const fetchFile = async () => {
    const { data } = await getFolderName();
    setFolder(data);
  };

  useEffect(() => {
    fetchFile();
  }, []);

  return folder;
};
