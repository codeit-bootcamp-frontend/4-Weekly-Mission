import LinkSearchBar from './LinkSearchBar';
import '../styles/folderList.css';
import { useState } from 'react';
import FolderSortBar from '../pages/FolderPage/components/FolderSortBar';
function FolderList() {
  const [folders, setFolders] = useState([]);
  return (
    <div className="folders-container">
      <div className="folders">
        <LinkSearchBar></LinkSearchBar>
        {folders.length !== 0 ? (
          <div className="none-list">
            <p className="none-list__text">저장된 링크가 없습니다</p>
          </div>
        ) : (
          <div className="folder-list">
            <FolderSortBar></FolderSortBar>
          </div>
        )}
      </div>
    </div>
  );
}
export default FolderList;
