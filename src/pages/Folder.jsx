import LinkAddInput from '../components/LinkAddInput';
import SearchBar from '../components/SearchBar';
import FolderList from '../components/FolderList';
import { useCallback, useEffect, useState } from 'react';
import style from '../styles/Folder.module.css';
import useAsync from '../hooks/useAsync';
import LinkList from '../components/LinkList';
import { getFolderList, getLinkList } from '../services/api';

function Folder() {
  const [linkList, setLinkList] = useState([]);
  const [folderId, setFolderId] = useState('');
  const [folderList, setFolderList] = useState([]);
  const [, , asyncGetFolderList] = useAsync(getFolderList);
  const [, , asyncGetLinkList] = useAsync(getLinkList);

  const apiGetFolderList = useCallback(async () => {
    const result = await asyncGetFolderList();
    if (!result) return;

    const { data } = result;
    setFolderList([...data]);
  }, [asyncGetFolderList]);

  const apiGetLinkList = useCallback(async () => {
    const result = await asyncGetLinkList(folderId);
    if (!result) return;

    const { data } = result;
    setLinkList([...data]);
  }, [asyncGetLinkList, folderId]);

  useEffect(() => {
    apiGetFolderList();
    apiGetLinkList();
  }, [apiGetFolderList, apiGetLinkList]);

  return (
    <main>
      <LinkAddInput />
      <div className={style.mainContent}>
        <SearchBar />
        {folderList ? (
          <>
            <FolderList folderList={folderList} onClick={setFolderId} />
            <LinkList linkList={linkList} />
          </>
        ) : (
          <div className={style.noLink}>저장된 링크가 없습니다.</div>
        )}
      </div>
    </main>
  );
}

export default Folder;
