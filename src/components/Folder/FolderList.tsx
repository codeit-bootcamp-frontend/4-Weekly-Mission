import '../../assets/styles/FolderList.css';
import addIcon from '../../assets/images/add.svg';
import { useState } from 'react';
import FolderCardList from './FolderCardList';
import Modal from '../modal/Modal';
import ModalPortal from '../common/ModalPortal';
import classNames from 'classnames';

interface FolderData {
  id: string;
  name: string;
}

interface FolderItemProps {
  data: FolderData;
  onFolderClick: (folder: FolderData) => void;
  isSelected: boolean;
}

interface FolderListProps {
  folderData: FolderData[];
  search: string;
}

const FolderItem = ({ data, onFolderClick, isSelected }: FolderItemProps) => {
  const { name, id } = data;
  const handleFolderClick = () => {
    onFolderClick({ id, name });
  };
  return (
    <div
      className={classNames('folder-button', { selected: isSelected })}
      onClick={handleFolderClick}
    >
      {name}
    </div>
  );
};

const FolderList = ({ folderData, search }: FolderListProps) => {
  const [selectedFolder, setSelectedFolder] = useState<FolderData>({ id: '', name: '전체' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectFolder = (folder: FolderData) => {
    setSelectedFolder(folder);
  };

  return (
    <>
      <div className="folder-list">
        <div className="folder-list-container">
          <div className="folder-items">
            <div
              className={classNames('folder-button', {
                selected: selectedFolder.name === '전체',
              })}
              onClick={() => selectFolder({ id: '', name: '전체' })}
            >
              전체
            </div>
            {folderData.map((item) => (
              <FolderItem
                key={item.id}
                data={item}
                onFolderClick={selectFolder}
                isSelected={selectedFolder && selectedFolder.id === item.id}
              />
            ))}
          </div>

          <button className="add-folder" onClick={() => setIsModalOpen(true)}>
            폴더 추가
            <img className="add-icon" src={addIcon} alt="add-icon" />
          </button>
        </div>
      </div>
      {selectedFolder ? (
        <FolderCardList
          id={selectedFolder.id}
          name={selectedFolder.name}
          folderList={folderData}
          searchItem={search}
        />
      ) : (
        <div>저장된 링크가 없습니다.</div>
      )}
      {isModalOpen && (
        <ModalPortal>
          <Modal action="add-folder" closeModal={() => setIsModalOpen(false)} />
        </ModalPortal>
      )}
    </>
  );
};
export default FolderList;
