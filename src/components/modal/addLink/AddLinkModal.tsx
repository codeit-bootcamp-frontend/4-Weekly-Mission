import styles from './AddLinkModal.module.scss';
import classNames from 'classnames/bind';
import FolderItem from '@/components/feature/folder/folderItem/FolderItem';
import Modal from '@/components/modal/Modal';
import ModalContentBox from '@/components/modal/content/contentBox/ModalContentBox';
import ModalContentButton from '@/components/modal/content/contentButton/ModalContentButton';
import ModalContentDescription from '@/components/modal/content/contentDescription/ModalContentDescription';
import ModalContentTitle from '@/components/modal/content/contentTitle/ModalContentTitle';
import { KeyboardEventHandler } from 'react';

type Folder = {
  id: number;
  name: string;
  link?: { count: number };
};

type AddLinkModalType = {
  isOpen: boolean;
  folders: Folder[];
  selectedLinkUrl?: string | null;
  selectedFolderId: number | null;
  setSelectedFolderId: (id: number) => void;
  onAddClick: () => void;
  onCloseClick: () => void;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
};

const cx = classNames.bind(styles);

const AddLinkModal = ({
  isOpen,
  folders,
  selectedLinkUrl,
  selectedFolderId,
  setSelectedFolderId,
  onAddClick,
  onCloseClick,
  onKeyDown,
}: AddLinkModalType) => {
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
            <ModalContentButton onClick={onAddClick}>추가하기</ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};

export default AddLinkModal;
