import ModalContainer from "./ModalContainer";
import useFolderList from "../../hooks/useFolderList";
import { useState } from "react";
import checkIcon from "../../assets/check.svg";
import "./ModalAddToFolder.css";

const ModalAddToFolderContent = ({ url, folderList, selectedFolder, handleFolderChange, handleAddToFolder }) => (
  <>
    <h2>폴더에 추가</h2>
    <p>{url}</p>
    <div className="folderOptionsContainer">
      {folderList.map((folder) => (
        <div
          key={folder.id}
          className={`folderOption ${selectedFolder === folder.id ? "selectedFolder" : ""}`}
          onClick={() => handleFolderChange(folder.id)}
        >
          <h4>{folder.name}</h4>
          <p>{folder.link.count}개 링크</p>
          {selectedFolder === folder.id ? (
            <img src={checkIcon} alt="check" className="checkIcon" />
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
    <button className="blueButton" onClick={handleAddToFolder}>
      추가하기
    </button>
  </>
);

const ModalAddToFolder = ({ isOpen, onClose, url }) => {
  const folderList = useFolderList();
  const [selectedFolder, setSelectedFolder] = useState("");
  const handleFolderChange = (e) => {
    setSelectedFolder(e);
  };
  const handleAddToFolder = () => {
    //implement add to folder logic later
    onClose();
  };

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <ModalAddToFolderContent
        url={url}
        folderList={folderList}
        selectedFolder={selectedFolder}
        handleFolderChange={handleFolderChange}
        handleAddToFolder={handleAddToFolder}
      />
    </ModalContainer>
  );
};

export default ModalAddToFolder;