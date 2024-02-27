import { useEffect, useState } from "react";
import { getSampleFolderData } from "../APIs/SharePageApi";

export const useSampleFolder = () => {
  const [folder, setFolder] = useState({
    profileImage: "",
    profileName: null,
    folderName: null,
  });
  const [cardLinks, setCardLinks] = useState([]);

  const fetchFolder = async () => {
    const { profileImage, profileName, folderName, cardLinks } =
      await getSampleFolderData();
    setFolder({ profileImage, profileName, folderName });
    setCardLinks(cardLinks);
  };

  useEffect(() => {
    fetchFolder();
  }, []);

  return {
    folder,
    cardLinks,
  };
};
