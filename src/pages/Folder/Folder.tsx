import { useState } from "react";
import FolderHeader from "./Header/FolderHeader";
import FolderMain from "./Main/FolderMain";
import { Folder } from "../../constnats/types";

const FolderPage = () => {
  const [folderList, setFolderList] = useState<Folder[]>([]);

  const handleFolderLsitData = (folderList: Folder[]) => {
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

export default FolderPage;
