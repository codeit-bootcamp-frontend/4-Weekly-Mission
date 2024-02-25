import { useState } from "react";
import FolderButton from "./FolderButton/FolderButton";
import FolderCardList from "../FolderToolBar/FolderCardList/FolderCardList";
import ModalEdit from "../Modal/ModalEdit";
import { ALL } from "../../utils/utils";
import "./FolderToolBar.css";
import share from "../../images/share.svg";
import pen from "../../images/pen.svg";
import deleteIcon from "../../images/delete.svg";

const FolderToolBar = ({
  folderNameData,
  links,
  selectedButtonName,
  onFolderSelect,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalButtonName, setModalButtonName] = useState("");

  const handleAddFolderClick = () => {
    setModalTitle("폴더 추가");
    setModalButtonName("추가하기");
    setIsModalOpen(true);
  };

  const handleEditButtonClick = () => {
    setModalTitle("폴더 이름 변경");
    setModalButtonName("변경하기");
    setIsModalOpen(true);
  };

  return (
    <div className="container">
      <div className="button-container">
        <div className="folder-buttons">
          <FolderButton
            folderNameData={folderNameData}
            onFolderSelect={onFolderSelect}
            selectedButtonName={selectedButtonName}
          />
        </div>
        <div className="add-button-container">
          <button className="add-button" onClick={handleAddFolderClick}>
            <span>폴더 추가 +</span>
          </button>
        </div>
        <h2>{selectedButtonName}</h2>
        {selectedButtonName !== ALL && (
          <div className="icon-button-container">
            <button>
              <img src={share} alt="" />
            </button>
            <button onClick={handleEditButtonClick}>
              <img src={pen} alt="" />
            </button>
            <button>
              <img src={deleteIcon} alt="" />
            </button>
          </div>
        )}
      </div>
      <FolderCardList links={links} />
      {isModalOpen && (
        <ModalEdit
          setIsModalOpen={setIsModalOpen}
          modalTitle={modalTitle}
          modalButtonName={modalButtonName}
        />
      )}
    </div>
  );
};

export default FolderToolBar;
