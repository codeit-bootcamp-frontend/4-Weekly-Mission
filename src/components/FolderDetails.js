import { useState } from 'react';
import useFetchData from '../hooks/useFetchData';
import CardList from './CardList';
import SearchBar from './common/SearchBar';
import add from '../images/add.svg';
import share from '../images/share.svg';
import pen from '../images/pen.svg';
import remove from '../images/remove.svg';
import '../components/FolderDetails.css';

export default function FolderDetails({ folderListData }) {
  const [selectedFolder, setSelectedFolder] = useState('all');
  const selectedFolderData = useFetchData('targetUserFolderLinkList', 1, selectedFolder) || [];
  console.log(selectedFolder);
  console.log(selectedFolderData);

  const handleFolderClick = folderId => {
    setSelectedFolder(folderId);
  };

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
        <div className="addButton">
          <p>폴더 추가</p>
          <img src={add} alt="더하기" />
        </div>
      </div>
      <div className="actionButtonContainer">
        <p>{selectedFolder === 'all' ? '전체' : '유용한 글'}</p>
        {!(selectedFolder === 'all') && (
          <div className="actionButton">
            <div className="share">
              <img src={share} alt="공유" />
              <span>공유</span>
            </div>
            <div className="pen">
              <img src={pen} alt="이름변경" />
              <span>이름변경</span>
            </div>
            <div className="remove">
              <img src={remove} alt="삭제" />
              <span>삭제</span>
            </div>
          </div>
        )}
      </div>
      <CardList cardDataList={selectedFolderData} />
    </div>
  );
}
