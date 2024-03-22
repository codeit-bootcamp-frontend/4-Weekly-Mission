import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axiosInstance.tsx";

interface DataItem {
  id: number;
  name: string;
}

interface Link {
  id: number;
  title: string;
  url: string;
  image_source: string;
  created_at: string;
  description: string;
}
const useFolderLinks = (
  selectedFolder: string,
  dataArray: DataItem[] | null
): Link[] => {
  const [folderLinks, setFolderLinks] = useState<Link[]>([]);

  useEffect(() => {
    const fetchFolderLinks = async () => {
      if (selectedFolder && dataArray) {
        const folderId = dataArray.find(
          (item) => item.name === selectedFolder
        )?.id;
        if (folderId) {
          try {
            const response = await axiosInstance.get(
              `users/4/links?folderId=${folderId}`
            );
            setFolderLinks(response.data.data);
          } catch (error) {
            console.error("Error fetching folder links:", error);
          }
        }
      }
    };

    fetchFolderLinks();
  }, [selectedFolder, dataArray]);

  return folderLinks;
};

export default useFolderLinks;
