import { useState, useEffect } from 'react';
import useFetchData from '../hooks/useFetchData';
import EditAndAddModal from './common/modal/EditAndAddModal';
import RemoveModal from './common/modal/RemoveModal';
import FloatingActionButton from './common/FloatingActionButton';
import CardList from './CardList';
import SearchBar from './common/SearchBar';
import add from '../images/add.svg';
import share from '../images/share.svg';
import pen from '../images/pen.svg';
import remove from '../images/remove.svg';
import '../components/FolderDetails.css';

export default function FolderDetails({ folderListData }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedFolder, setSelectedFolder] = useState('all');
  const [modals, setModals] = useState({
    addModal: false,
    editModal: false,
    removeModal: false,
  });

  const selectedFolderLinkListData = useFetchData('targetUserFolderLinkList', 1, selectedFolder) || [];
  const folderNameAndLinkList = folderListData?.map(({ name, link, id }) => [name, link.count, id]);
  const selectedFolderName = folderListData?.find(({ id }) => id === selectedFolder)?.name || 'all';

  const toggleModal = modalName => {
    setModals(prevModals => ({
      ...prevModals,
      [modalName]: !prevModals[modalName],
    }));
  };

  const handleFolderClick = folderId => {
    setSelectedFolder(folderId);
  };

  const handleWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowWidth);

    return () => {
      window.removeEventListener('resize', handleWindowWidth);
    };
  }, []);

  return (
    <div className="folderDetailsContainer">
      <SearchBar />
      <div className="folderListContainer">
        <div className="folderList">
          <div
            onClick={() => handleFolderClick('all')}
            className={`folderName ${selectedFolder === 'all' ? 'selected' : ''}`}>
            전체
          </div>
          {folderListData?.map(({ name, id }) => (
            <div
              key={id}
              onClick={() => handleFolderClick(id)}
              className={`folderName ${selectedFolder === id ? 'selected' : ''}`}>
              {name}
            </div>
          ))}
        </div>
        {windowWidth >= 767 ? (
          <button className="addButton" onClick={() => toggleModal('addModal')}>
            <p>폴더 추가</p>
            <img src={add} alt="더하기" />
          </button>
        ) : (
          <FloatingActionButton onClick={() => toggleModal('addModal')} />
        )}
      </div>
      <div className="actionButtonContainer">
        <p>{selectedFolder === 'all' ? '전체' : '유용한 글'}</p>
        {!(selectedFolder === 'all') && (
          <div className="actionButton">
            <button className="share">
              <img src={share} alt="공유" />
              <span>공유</span>
            </button>
            <button className="pen" onClick={() => toggleModal('editModal')}>
              <img src={pen} alt="이름변경" />
              <span>이름변경</span>
            </button>
            <button className="remove" onClick={() => toggleModal('removeModal')}>
              <img src={remove} alt="삭제" />
              <span>삭제</span>
            </button>
          </div>
        )}
      </div>
      <CardList cardDataList={selectedFolderLinkListData} folderNameAndLinkList={folderNameAndLinkList} />
      {modals.addModal && (
        <EditAndAddModal modalTitle="폴더 추가" buttonText="추가하기" onClose={() => toggleModal('addModal')} />
      )}
      {modals.editModal && (
        <EditAndAddModal
          modalTitle="폴더 이름 변경"
          buttonText="변경하기"
          onClose={() => toggleModal('editModal')}
          selectedFolderName={selectedFolderName}
        />
      )}
      {modals.removeModal && (
        <RemoveModal
          modalTitle="폴더 삭제"
          onClose={() => toggleModal('removeModal')}
          titleContent={selectedFolderName}
        />
      )}
    </div>
  );
}
