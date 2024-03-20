import { useState } from "react";
import FolderHeader from "../Folder/Header/FolderHeader";
import FolderMain from "../Folder/Main/FolderMain";

const Folder = () => {
  const [folderList, setFolderList] = useState([]);

  const handleFolderLsitData = (folderList) => {
    setFolderList(folderList);
  };
  console.log(folderList);

  return (
    <>
      <FolderHeader folderList={folderList} />
      <FolderMain onChange={handleFolderLsitData} />
    </>
  );
};

export default Folder;
