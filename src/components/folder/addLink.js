//import { useFolder } from "../../hooks/useFolder";
import LINK_LOGO from "../../assets/image/link.svg";
import { useGetFolders } from "../../hooks/useGetFolders";
import "./folderInfo.css";
import "./addLink.css";
import { AddLinkModal } from "../modal/add-link-modal/AddLinkModal";
import { useState } from "react";

export const AddLink = () => {
  const [open, setOpen] = useState(false);
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const closeModal = () => {
    setSelectedFolderId(null);
    setOpen(false);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };
  return (
    <div className="infoContainer">
      <div className="linkFlexBox">
        <div className="linkAddInputBox">
          <div className="linkAddInputFlexBox">
            <img src={LINK_LOGO} alt="" />
            <input placeholder="링크를 추가해보세요" />
          </div>
          <button className="addButton" onClick={() => setOpen(!open)}>
            추가하기
          </button>
        </div>
      </div>
      <AddLinkModal
        isOpen={open}
        folders={folders}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        onAddClick={() => {}}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
