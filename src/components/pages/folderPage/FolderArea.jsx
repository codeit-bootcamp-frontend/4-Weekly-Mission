import { useState } from "react";
import FolderListArea from "./FolderListArea";
import LinkList from "./LinkList";
import { totalFolderId } from "../../../util/constants";

const FolderArea = () => {
  const [selectedFolderId, setSelectedFolderId] = useState(totalFolderId);

  const handleFolderNameClick = (id) => {
    setSelectedFolderId(id);
  };

  return (
    <>
      <FolderListArea
        selectedFolderId={selectedFolderId}
        onFolderNameClick={handleFolderNameClick}
      />
      <LinkList selectedFolderId={selectedFolderId} />
    </>
  );
};

export default FolderArea;
