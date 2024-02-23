import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axiosInstance";

const useFolderLinks = (selectedFolder, dataArray) => {
  const [folderLinks, setFolderLinks] = useState([]);

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
