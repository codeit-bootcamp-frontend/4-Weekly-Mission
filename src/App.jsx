import { useEffect, useState } from 'react';
import './App.css';
import Router from './shrared/Router';
import { get } from './apis/api';
import {
  AddToFolderModal,
  FolderAddModal,
  FolderDeleteModal,
  FolderNameChangeModal,
  FolderSharedModal,
  LinkDeleteModal,
} from './components/ui/modal/Modal';

function App() {
  const [isOpen, setIsOpen] = useState('');
  const [folderName, setFolderName] = useState('');
  const [folderList, setFolderList] = useState([]);
  const [folderId, setFolderId] = useState(null);

  useEffect(() => {
    get('/users/1/folders').then(({ data }) => setFolderList(data));
  }, []);

  const onCloseModalHandle = () => {
    setIsOpen('');
    setFolderName('');
  };

  return (
    <>
      <Router
        setIsOpen={setIsOpen}
        setFolderName={setFolderName}
        folderList={folderList}
        folderId={folderId}
        setFolderId={setFolderId}
      />
      {isOpen === '이름 변경' ? <FolderNameChangeModal closeModal={onCloseModalHandle} /> : null}
      {isOpen === '추가' ? <FolderAddModal closeModal={onCloseModalHandle} /> : null}
      {isOpen === '공유' ? (
        <FolderSharedModal
          closeModal={onCloseModalHandle}
          folderName={folderName}
          folderList={folderList}
          folderId={folderId}
        />
      ) : null}
      {isOpen === '삭제' ? <FolderDeleteModal closeModal={onCloseModalHandle} folderName={folderName} /> : null}
      {isOpen === '링크 삭제' ? <LinkDeleteModal closeModal={onCloseModalHandle} folderName={folderName} /> : null}
      {isOpen === '폴더에 추가' ? (
        <AddToFolderModal closeModal={onCloseModalHandle} folderName={folderName} folderList={folderList} />
      ) : null}
    </>
  );
}

export default App;
