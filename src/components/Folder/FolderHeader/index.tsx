import { ChangeEvent } from "react";
import { useModal } from "../../../hooks/useModal";
import { AddLinkModal } from "../../Modal";
import { Folder } from "../../../types";
import "./FolderHeader.css";

interface Props {
  linkUrl: string;
  handleLinkAddInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  folderList: Folder[];
}

export const FolderHeader = ({
  linkUrl,
  handleLinkAddInputChange,
  folderList,
}: Props) => {
  const {
    openModal: AddOpenModal,
    modalRef: AddModalRef,
    handleModalClose: AddHandleModalClose,
    handleModalOpen: AddHandleModalOpen,
  } = useModal();
  return (
    <div className="folderHeader">
      <div className="folderHeader-link">
        <div className="folderHeader-link-icon"></div>
        <input
          type="link"
          className="folderHeader-link-input"
          value={linkUrl}
          placeholder="링크를 추가해보세요."
          onChange={handleLinkAddInputChange}
        />
        <button
          className="folderHeader-link-button"
          onClick={AddHandleModalOpen}
        >
          추가하기
        </button>
        {AddOpenModal && (
          <AddLinkModal
            linkUrl={linkUrl}
            folderList={folderList}
            openModal={AddOpenModal}
            modalRef={AddModalRef}
            handleModalClose={AddHandleModalClose}
          />
        )}
      </div>
    </div>
  );
};
