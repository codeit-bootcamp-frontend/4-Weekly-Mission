import { useState } from "react";
import FolderHeader from "../../components/Folder/Header/FolderHeader";
import FolderMain from "../../components/Folder/Main/FolderMain";

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
