import { useEffect, useState } from "react";
import { getLinkData } from "../APIs/FolderPageApi";

export const useFolder = () => {
  const [folder, setFolder] = useState([]);

  const fetchFolder = async () => {
    const links = await getLinkData();
    setFolder(links.data);
  };

  useEffect(() => {
    fetchFolder();
  }, []);

  return folder;
};
