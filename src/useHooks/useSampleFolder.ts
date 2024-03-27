import { useEffect, useState } from "react";
import { getSampleFolderData } from "../APIs/SharePageApi";

type Folder = {
  profileImage: string;
  folderName: string;
  profileName: string;
};
export interface CardInfo {
  imageSource: string;
  createdAt: number;
  description: string;
  url: string;
  title: string;
}

export interface CardLinks extends CardInfo {
  id: number;
}

export const useSampleFolder = () => {
  const [folder, setFolder] = useState<Folder>({
    profileImage: "",
    folderName: "",
    profileName: "",
  });
  const [cardLinks, setCardLinks] = useState<CardLinks[]>([]);

  const fetchFolder = async () => {
    const data = await getSampleFolderData();
    if (data) {
      const { profileImage, profileName, folderName, cardLinks } = data;
      setFolder({ profileImage, profileName, folderName });
      setCardLinks(cardLinks);
    } else {
      console.log("data가 없습니다.");
    }
  };

  useEffect(() => {
    fetchFolder();
  }, []);

  return {
    folder,
    cardLinks,
  };
};
