import { useState } from 'react';
import closeIcon from '../../assets/icons/close.svg';
import checkIcon from '../../assets/icons/check.svg';

const FolderInfo = ({ name, count, isSelected, onSelect }) => {
  const handleClick = () => {
    onSelect(name);
  };

  return (
    <div className={`modal-folder ${isSelected ? 'selected' : ''}`} onClick={handleClick}>
      <div className="modal-folder-info">
        <h2>{name}</h2>
        <h3>{count}개 링크</h3>
      </div>
      {isSelected && <img src={checkIcon} />}
    </div>
  );
};

const AddLinkModal = ({ data, closeModal }) => {
  const { link, folderList } = data;
  const [selectedFolder, setSelectedFolder] = useState();

  const handleFolderSelect = (folder) => {
    setSelectedFolder(folder);
  };

  return (
    <>
      <div className="modal-box-text">
        <h2 className="modal-title">폴더에 추가</h2>
        <h3 className="modal-sub-text">{link}</h3>
      </div>
      <div className="modal-folder-list">
        {folderList.map((folder) => (
          <FolderInfo
            key={folder.id}
            name={folder['name']}
            count={folder['link']['count']}
            onSelect={handleFolderSelect}
            isSelected={selectedFolder === folder['name']}
          />
        ))}
      </div>
      <button className="modal-button">추가하기</button>
      <button className="modal-close" onClick={closeModal}>
        <img src={closeIcon} />
      </button>
    </>
  );
};
export default AddLinkModal;
