import styles from './FolderToolBar.module.scss';
import classNames from 'classnames/bind';
import AddFolderButton from '@/components/feature/folder/addFolderButton/AddFolderButton';
import FolderButton from '@/components/feature/folder/folderButton/FolderButton';
import IconAndTextButton from '@/components/iconAndTextButton/IconAndTextButton';
import {
  ALL_LINKS_ID,
  ALL_LINKS_TEXT,
  BUTTONS,
  KAKAO_SHARE_DATA,
  MODALS_ID,
} from '@/utils/constant';
import { useState, KeyboardEventHandler } from 'react';
import ShareModal from '@/components/modal/share/ShareModal';
import InputModal from '@/components/modal/input/InputModal';
import AlertModal from '@/components/modal/alert/AlertModal';
import { copyToClipboard } from '@/utils/copyToClipboard';
import { useKakaoSdk } from '@/utils/useKakaoSdk';

type Folder = {
  id: number;
  name: string;
};

type FolderToolBarType = {
  folders: Folder[];
  selectedFolderId: string | number;
  onFolderClick: (folderId: string | number) => void;
};

const cx = classNames.bind(styles);

const FolderToolBar = ({ folders, selectedFolderId, onFolderClick }: FolderToolBarType) => {
  const { shareKakao } = useKakaoSdk();
  const [currentModal, setCurrentModal] = useState<string | null>(null);

  const folderName =
    ALL_LINKS_ID === selectedFolderId
      ? ALL_LINKS_TEXT
      : folders?.find(({ id }) => id === selectedFolderId)?.name;
  const shareLink = `프로젝트웹사이트주소작성?/shared?user=1&folder=${selectedFolderId}`;

  const closeModal = () => setCurrentModal(null);

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const handleKakaoClick = () => {
    shareKakao({ url: shareLink, ...KAKAO_SHARE_DATA });
  };

  const handleFacebookClick = () => {
    window.open(`http://www.facebook.com/sharer.php?u=${shareLink}`);
  };

  const handleLinkCopyClick = () => {
    copyToClipboard(shareLink);
  };

  return (
    <div className={cx('container')}>
      <div className={cx('folders')}>
        <FolderButton
          key={ALL_LINKS_ID}
          text={ALL_LINKS_TEXT}
          onClick={() => onFolderClick(ALL_LINKS_ID)}
          isSelected={ALL_LINKS_ID === selectedFolderId}
        />
        {folders?.map(({ id, name }) => (
          <FolderButton
            key={id}
            text={name}
            onClick={() => onFolderClick(id)}
            isSelected={id === selectedFolderId}
          />
        ))}
      </div>
      <div className={cx('add-button')}>
        <AddFolderButton onClick={() => setCurrentModal(MODALS_ID.addFolder)} />
        <InputModal
          isOpen={currentModal === MODALS_ID.addFolder}
          title="폴더 추가"
          placeholder="내용 입력"
          buttonText="추가하기"
          onCloseClick={closeModal}
          onKeyDown={handleKeyDown}
        />
      </div>
      <h2 className={cx('folder-name')}>{folderName}</h2>
      {selectedFolderId !== ALL_LINKS_ID && (
        <div className={cx('buttons')}>
          {BUTTONS.map(({ text, iconSource, modalId }) => (
            <IconAndTextButton
              key={text}
              iconSource={iconSource}
              onClick={() => setCurrentModal(modalId)}
            />
          ))}
          <ShareModal
            isOpen={currentModal === MODALS_ID.share}
            folderName={folderName}
            onKakaoClick={handleKakaoClick}
            onFacebookClick={handleFacebookClick}
            onLinkCopyClick={handleLinkCopyClick}
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
          />
          <InputModal
            isOpen={currentModal === MODALS_ID.rename}
            title="폴더 이름 변경"
            placeholder="내용 입력"
            buttonText="변경하기"
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
          />
          <AlertModal
            isOpen={currentModal === MODALS_ID.delete}
            title="폴더 삭제"
            description={folderName}
            buttonText="삭제하기"
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
          />
        </div>
      )}
    </div>
  );
};

export default FolderToolBar;
