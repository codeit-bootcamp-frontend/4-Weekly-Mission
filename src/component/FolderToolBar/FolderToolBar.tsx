import useModal from "../../hooks/useModal";
import FolderButton from "./FolderButton/FolderButton";
import FolderCardList from "./FolderCardList/FolderCardList";
import ModalEdit from "../Modal/ModalEdit";
import ModalShare from "../Modal/ModalShare";
import ModalDelete from "../Modal/ModalDelete";
import { ALL } from "../../utils/utils";
import {
  folderToolBarProps,
  handleModalType,
} from "../../interfaces/folder.interface";
import "./FolderToolBar.css";
import share from "../../images/share.svg";
import pen from "../../images/pen.svg";
import deleteIcon from "../../images/delete.svg";

const FolderToolBar = ({
  folderData,
  links,
  selectedButtonName,
  onFolderSelect,
}: folderToolBarProps) => {
  const {
    isModalOpen,
    openModal,
    closeModal,
    modalType,
    changeModalType,
    modalTitle,
    modalButtonName,
  } = useModal();

  const handleModalOpen = ({
    title,
    buttonName,
    modalType,
  }: handleModalType) => {
    openModal(true, title, buttonName, modalType);
  };

  return (
    <div className="container">
      <div className="button-container">
        <div className="folder-buttons">
          <FolderButton
            folderData={folderData}
            onFolderSelect={onFolderSelect}
            selectedButtonName={selectedButtonName}
          />
        </div>
        <div className="add-button-container">
          <button
            className="add-button"
            onClick={() => {
              handleModalOpen({
                title: "폴더 추가",
                buttonName: "추가하기",
                modalType: "folder-add",
              });
            }}
          >
            <span>폴더 추가 +</span>
          </button>
        </div>
        <h2 className="selected-btn">{selectedButtonName}</h2>
        {selectedButtonName !== ALL && (
          <div className="icon-button-container">
            <button
              onClick={() => {
                handleModalOpen({ title: "폴더 공유", modalType: "share" });
              }}
            >
              <img src={share} alt="폴더 공유 버튼" />
            </button>
            <button
              onClick={() => {
                handleModalOpen({
                  title: "폴더 이름 변경",
                  buttonName: "변경하기",
                  modalType: "edit",
                });
              }}
            >
              <img src={pen} alt="폴더 이름 변경 버튼" />
            </button>
            <button
              onClick={() =>
                handleModalOpen({
                  title: "폴더 삭제",
                  buttonName: "삭제하기",
                  modalType: "delete",
                })
              }
            >
              <img src={deleteIcon} alt="폴더 삭제 버튼" />
            </button>
          </div>
        )}
      </div>
      <FolderCardList
        links={links}
        isModalOpen={isModalOpen}
        modalType={modalType}
        openModal={openModal}
        closeModal={closeModal}
        changeModalType={changeModalType}
        modalTitle={modalTitle}
        modalButtonName={modalButtonName}
        folderData={folderData}
      />
      {isModalOpen && modalType === "edit" && (
        <ModalEdit
          closeModal={closeModal}
          modalTitle={modalTitle}
          modalButtonName={modalButtonName}
        />
      )}
      {isModalOpen && modalType === "folder-add" && (
        <ModalEdit
          closeModal={closeModal}
          modalTitle={modalTitle}
          modalButtonName={modalButtonName}
        />
      )}
      {isModalOpen && modalType === "share" && (
        <ModalShare closeModal={closeModal} modalTitle={modalTitle} />
      )}
      {isModalOpen && modalType === "delete" && (
        <ModalDelete
          closeModal={closeModal}
          modalTitle={modalTitle}
          modalButtonName={modalButtonName}
        />
      )}
    </div>
  );
};

export default FolderToolBar;
