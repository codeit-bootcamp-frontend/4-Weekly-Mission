import LinkAddInput from '../components/LinkAddInput';
import SearchBar from '../components/SearchBar';
import FolderList from '../components/FolderList';
import { useCallback, useEffect, useState } from 'react';
import { getFolder } from '../services/api';
import style from '../styles/Folder.module.css';
import useAsync from '../hooks/useAsync';
import LinkList from '../components/LinkList';
import { getFolderList } from '../services/api';

function Folder() {
  const [linkList, setLinkList] = useState([]);
  const [folderId, setFolderId] = useState('');
  const [folderList, setFolderList] = useState([]);
  const [isPending, isError, asyncGetFolderList] = useAsync(getFolderList);

  const apiGetFolderList = useCallback(async () => {
    const result = await asyncGetFolderList();
    if (!result) return;

    const { data } = result;
    setFolderList([...data]);
  }, [asyncGetFolderList]);

  useEffect(() => {
    apiGetFolderList();
  }, [apiGetFolderList]);

  return (
    <main>
      <LinkAddInput />
      <div className={style.mainContent}>
        <SearchBar />
        <FolderList folderList={folderList} onClick={setFolderId} />
        <LinkList linkList={linkList} />
      </div>
    </main>
  );
}

export default Folder;
