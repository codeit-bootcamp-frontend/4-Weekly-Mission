import styles from './AddLinkModal.module.scss';
import classNames from 'classnames/bind';
import { FolderItem } from 'folder/ui-folder-item';
import { Modal } from 'sharing/ui-modal';
import { ModalContentBox } from 'sharing/ui-modal-content-box';
import { ModalContentButton } from 'sharing/ui-modal-content-button';
import { ModalContentDescription } from 'sharing/ui-modal-content-description';
import { ModalContentTitle } from 'sharing/ui-modal-content-title';

const cx = classNames.bind(styles);

interface AddLinkModalProps {
  isOpen: boolean;
  folders: Folder[];
  selectedLinkUrl: string;
  selectedFolderId: number | null;
  setSelectedFolderId: React.Dispatch<React.SetStateAction<number | null>>;
  onAddClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onCloseClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

interface Folder {
  id: number;
  name: string;
  link: string | number;
}

export const AddLinkModal = ({
  isOpen,
  folders,
  selectedLinkUrl,
  selectedFolderId,
  setSelectedFolderId,
  onAddClick,
  onCloseClick,
  onKeyDown,
}: AddLinkModalProps) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx('modal-header')}>
            <ModalContentTitle>폴더에 추가</ModalContentTitle>
            <ModalContentDescription>{selectedLinkUrl}</ModalContentDescription>
          </div>
        }
        content={
          <div className={cx('modal-content')}>
            <div className={cx('folder-list')}>
              {folders?.map(({ id, name, link }: Folder) => (
                <FolderItem
                  key={id}
                  isSelected={id === selectedFolderId}
                  folderName={name}
                  linkCount={link?.count}
                  onClick={() => setSelectedFolderId(id)}
                />
              ))}
            </div>
            <ModalContentButton onClick={onAddClick}>추가하기</ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
