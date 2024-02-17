import { useEffect, useState } from "react";
import { getFolderName, getLinkData } from "../APIs/FolderPageApi";

export const useFiles = () => {
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
