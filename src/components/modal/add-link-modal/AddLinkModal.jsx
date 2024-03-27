import styles from "./AddLinkModal.module.scss";
import classNames from "classnames/bind";
import { FolderItem } from "../../folder/folder-item/FolderItem";
import { Modal } from "../Modal";
import { ModalContentBox } from "../modal-content-box/ModalContentBox";
import { ModalContentButton } from "../modal-content-button/ModalContentButton";
import { ModalContentDescription } from "../modal-content-description/ModalContentDescription";
import { ModalContentTitle } from "../modal-content-title/ModalContentTitle";

const cx = classNames.bind(styles);

export const AddLinkModal = ({
  isOpen,
  folders,
  selectedLinkUrl,
  selectedFolderId,
  setSelectedFolderId,
  onAddClick,
  onCloseClick,
  onKeyDown,
}) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>폴더에 추가</ModalContentTitle>
            <ModalContentDescription>{selectedLinkUrl}</ModalContentDescription>
          </div>
        }
        content={
          <div className={cx("modal-content")}>
            <div className={cx("folder-list")}>
              {folders?.map(({ id, name, link }) => (
                <FolderItem
                  key={id}
                  isSelected={id === selectedFolderId}
                  folderName={name}
                  linkCount={link?.count}
                  onClick={() => setSelectedFolderId(id)}
                />
              ))}
            </div>
            <ModalContentButton onClick={onAddClick}>
              추가하기
            </ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
