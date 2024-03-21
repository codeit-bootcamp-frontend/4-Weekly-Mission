import { useState, useEffect } from "react";
import FolderHeader from "./Header/FolderHeader";
import FolderMain from "./Main/FolderMain";
import { BASE_URL } from "constnats/constant";
import { FolderList, Folder } from "constnats/types";
import { updatedDate, updatedDuration } from "utils/createdAt";

const FolderPage = () => {
  const [cardData, setCardData] = useState<Folder[]>([]);
  const [folder, setFolder] = useState<FolderList>({
    id: null,
    name: "전체",
  });
  const [folderList, setFolderList] = useState<FolderList[]>([]);

  useEffect(() => {
    const folderListData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/users/1/folders`);
        const responseData = await response.json();
        const folderList = responseData.data;
        setFolderList(folderList);
        console.log(folderList);
      } catch (error) {
        console.error("error");
      }
    };
    folderListData();
  }, []);

  useEffect(() => {
    const folderCardData = async () => {
      try {
        let url = `${BASE_URL}/users/1/links`;
        if (folder.id !== null) {
          url = `${BASE_URL}/users/1/links?folderId=${folder.id}`;
        }
        const response = await fetch(url);
        const responseData = await response.json();
        const folderCardData = responseData.data.map((link: Folder) => ({
          ...link,
          time: updatedDuration(link.created_at),
          date: updatedDate(link.created_at),
        }));
        setCardData(folderCardData);
        console.log(folderCardData);
      } catch (error) {
        console.error("Error");
      }
    };
    folderCardData();
  }, [folder]);

  return (
    <>
      <FolderHeader folderList={folderList} />
      <FolderMain cardData={cardData} folderList={folderList} />
    </>
  );
};

export default FolderPage;
