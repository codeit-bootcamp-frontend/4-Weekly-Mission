import ModalContainer from "./ModalContainer";
import useFolderList from "../../hooks/useFolderList";
import { useState } from "react";
import checkIcon from "../../assets/check.svg";
import "./ModalAddToFolder.css";

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
  const addFolderContent = (
    <>
      <h2>폴더에 추가</h2>
      <p>{url}</p>
      <div className="folderOptionsContainer">
        {folderList.map((folder) => (
          <div
            key={folder.id}
            className={`folderOption ${
              selectedFolder === folder.id ? "selectedFolder" : ""
            }`}
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

  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={onClose}
      children={addFolderContent}
    />
  );
};
export default ModalAddToFolder;
