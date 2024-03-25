import { useEffect, useState } from "react";
import { getFolderName, Folder } from "../API/FolderPageApi";

interface UseFolderResult {
  currentMenu: string;
  setCurrentMenu: React.Dispatch<React.SetStateAction<string>>;
  folder: Folder[];
}

export const useFolder = (): UseFolderResult => {
  const [folder, setFolder] = useState<Folder[]>([]);
  const [currentMenu, setCurrentMenu] = useState<string>("전체");

  const fetchFolder = async () => {
    try {
      const data = await getFolderName();
      setFolder(data);
    } catch (error) {
      console.error("Error fetching folder:", error);
    }
  };

  useEffect(() => {
    fetchFolder();
  }, []);

  return { currentMenu, setCurrentMenu, folder };
};
