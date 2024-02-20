import { useState } from 'react';
import ModalBackgroundDim from './ModalBackgroundDim';
import check from '../../../images/check.svg';
import './AddLinkModal.css';

export default function AddLinkModal({ onClose, linkUrl, folderNameAndLinkList }) {
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const handleSelectedFolderId = folderId => setSelectedFolderId(folderId);
  return (
    <>
      <ModalBackgroundDim />
      <div className="addLinkModalContainer">
        <div className="addLinkModalContent">
          <div className="addLinkModalTitle">
            <p>폴더에 추가</p>
            <p>{linkUrl}</p>
          </div>
          <div className="addLinkModalCurrentFolderList">
            {folderNameAndLinkList?.map(([name, count, id]) => (
              <div
                className={`folderContainer ${selectedFolderId === id ? `selected` : ''}`}
                key={id}
                onClick={() => handleSelectedFolderId(id)}>
                <div className="folderContent">
                  <p>{name}</p>
                  <p>{count}개 링크</p>
                </div>
                {selectedFolderId === id && <img src={check} alt="체크표시" />}
              </div>
            ))}
          </div>
          <button>추가하기</button>
        </div>
        <button className="modalCloseButton" onClick={onClose}>
          <img src="https://weekly-mission-week9.vercel.app/images/close.svg" alt="close" />
        </button>
      </div>
    </>
  );
}
