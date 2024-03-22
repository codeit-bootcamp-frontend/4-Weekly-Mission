import { useState, useEffect } from "react";
import FolderHeader from "./Header/FolderHeader";
import FolderMain from "./Main/FolderMain";
import {
  FOLDER_CARD_DATA_API_URL,
  FOLDER_LIST_API_URL,
} from "constnats/constant";
import { FolderList, Folder } from "constnats/types";
import { updatedDate, updatedDuration } from "utils/createdAt";

const FolderPage = () => {
  const [folder, setFolder] = useState<FolderList>({
    id: null,
    name: "전체",
  });
  const [cardData, setCardData] = useState<Folder[]>([]);
  const [folderList, setFolderList] = useState<FolderList[]>([]);

  useEffect(() => {
    const folderListData = async () => {
      try {
        const response = await fetch(FOLDER_LIST_API_URL);
        const responseData = await response.json();
        const folderList = responseData.data;
        setFolderList(folderList);
      } catch (error) {
        console.error("error");
      }
    };
    folderListData();
  }, []);

  useEffect(() => {
    const folderCardData = async () => {
      try {
        let url =
          folder.id === null
            ? FOLDER_CARD_DATA_API_URL
            : `${FOLDER_CARD_DATA_API_URL}?folderId=${folder.id}`;
        const response = await fetch(url);
        const responseData = await response.json();
        const folderCardData = responseData.data.map(
          (cardDataList: Folder) => ({
            ...cardDataList,
            time: updatedDuration(cardDataList.created_at),
            date: updatedDate(cardDataList.created_at),
          })
        );
        setCardData(folderCardData);
      } catch (error) {
        console.error("Error");
      }
    };
    folderCardData();
  }, [folder]);

  const handleFolderChange = async (selectedFolder: FolderList) => {
    setFolder(selectedFolder);
  };

  return (
    <>
      <FolderHeader folderList={folderList} />
      <FolderMain
        cardData={cardData}
        folderList={folderList}
        onChange={handleFolderChange}
      />
    </>
  );
};

export default FolderPage;
