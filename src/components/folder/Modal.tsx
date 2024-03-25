/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import '../../style/modal.css';
import modalClose from '../../images/modalClose.svg';
import modalFacebook from '../../images/modalFacebook.svg';
import modalLink from '../../images/modallink.svg';
import modalKakao from '../../images/modalKakao.svg';
import check from '../../images/check.svg';
import { useState } from 'react';

interface Folder {
  id: string;
  name: string;
}

interface ModalProps {
  values: {
    visibility: boolean;
    target: string;
    url?: string;
  };
  onClose: (visibility: boolean) => void;
  folderName: Folder;
  folders: {
    id: string;
    name: string;
    link: {
      count: number;
    };
  }[];
  userId: string;
}


function Modal({ values, onClose, folderName, folders, userId }: ModalProps) {
  const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);
  const closeModal = () => onClose(false);
  const { url } = values;

  const handleFolderButtonClick = (folderId: string) => {
    setSelectedFolderId(folderId);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  const createShareLink = () => {
    const hostAddress = 'http://localhost:3000/';
    return `${hostAddress}/shared?user=${userId}&folder=${folderName.id}`;
  };

  const handleShare = (platform: 'facebook' | 'kakao') => {
    const shareLink = createShareLink();
    let url = '';

    if (platform === 'facebook') {
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareLink,
      )}`;
    }

    window.open(url, '_blank');
  };

  const handleCopyLink = async () => {
    const shareLink = createShareLink();
    await navigator.clipboard.writeText(shareLink);
    alert('링크가 클립보드에 복사되었습니다.');
  };

  if (!values['visibility']) return null;

  return (
    <div className="modal-wrapper">
      <div className="modal-background" onClick={handleBackgroundClick} />
      <div className="modal-container">
        <button onClick={closeModal} className="modal-cancel-btn">
          <img src={modalClose} />
        </button>
        {values['target'] === '이름 변경' && (
          <>
            <h2 id="modalTitle" className="modal-title">
              폴더 이름 변경
            </h2>
            <input className="modal-input" autoFocus />
            <button className="modal-button">변경하기</button>
          </>
        )}
        {values['target'] === '추가하기' && (
          <>
            <h2 id="modalTitle" className="modal-title">
              폴더 추가
            </h2>
            <input className="modal-input" autoFocus />
            <button className="modal-button">변경하기</button>
          </>
        )}
        {values['target'] === '공유' && (
          <>
            <h2 id="modalTitle" className="modal-title">
              폴더 공유
            </h2>
            <h3>{folderName.name}</h3>
            <div className="modal-shared-icon">
              <button className="grey-btn">
                <div className="modal-kakao">
                  <img src={modalKakao} />
                </div>
              </button>
              <button onClick={() => handleShare('facebook')}>
                <div className="modal-facebook">
                  <img src={modalFacebook} />
                </div>
              </button>
              <button onClick={handleCopyLink}>
                <div className="modal-link">
                  <img src={modalLink} />
                </div>
              </button>
            </div>
          </>
        )}
        {values['target'] === '삭제' && (
          <>
            <h2 id="modalTitle" className="modal-title">
              폴더 삭제
            </h2>
            <h3>{folderName.name}</h3>
            <button className="modal-delete-button">삭제하기</button>
          </>
        )}
        {values['target'] === '삭제하기' && (
          <>
            <h2 id="modalTitle" className="modal-title">
              링크 삭제
            </h2>
            <h3>{url}</h3>
            <button className="modal-delete-button">삭제하기</button>
          </>
        )}
        {values['target'] === '폴더에 추가' && (
          <div
            className={`modal-container ${
              values['target'] === '폴더에 추가' ? 'folder-add-active' : ''
            }`}
          >
            <h2 id="modalTitle" className="modal-title">
              폴더에 추가
            </h2>
            <h3>{url}</h3>
            {folders.map((folder) => (
              <div className="modal-add-active-box">
                <button
                  className={`modal-folder-add-box ${
                    selectedFolderId === folder.id ? 'selected' : ''
                  }`}
                  key={folder.id}
                  onClick={() => handleFolderButtonClick(folder.id)}
                >
                  <div className="folder-info">
                    <span className="folder-name">{folder.name}</span>
                    <span className="link-count">
                      {folder.link.count}개 링크
                    </span>
                  </div>
                  {selectedFolderId === folder.id && (
                    <img className="folder-add-img" src={check} />
                  )}
                </button>
              </div>
            ))}
            <button className="modal-button">추가하기</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
