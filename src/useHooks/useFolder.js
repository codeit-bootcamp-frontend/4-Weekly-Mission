import { useEffect, useState } from "react";
import { getFolderName } from "../APIs/FolderPageApi";

export const useFolder = () => {
  const [folder, setFolder] = useState([]);
  const [currentMenu, setCurrentMenu] = useState("전체");

  const fetchFolder = async () => {
    const { data } = await getFolderName();
    setFolder(data);
  };

  useEffect(() => {
    fetchFolder();
  }, []);

  return { currentMenu, setCurrentMenu, folder };
};
