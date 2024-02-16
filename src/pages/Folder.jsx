import FolderInfo from '../components/FolderInfo';
import SearchBar from '../components/SearchBar';
import LinkList from '../components/LinkList';
import { useCallback, useEffect, useState } from 'react';
import { getFolder } from '../services/api';
import style from '../styles/Folder.module.css';
import useAsync from '../hooks/useAsync';

function Folder() {
  const [linkList, setLinkList] = useState([]);
  const [folderInfo, setFolderInfo] = useState({});
  const [isPending, isError, asyncGetFolder] = useAsync(getFolder);

  const apiGetFolder = useCallback(async () => {
    const result = await asyncGetFolder();
    if (!result) return;

    const { folder } = result;
    const { links, name, owner } = folder;
    setFolderInfo({ name, owner });
    setLinkList([...links]);
  }, [asyncGetFolder]);

  useEffect(() => {
    apiGetFolder();
  }, [apiGetFolder]);

  return (
    <main>
      <FolderInfo folderInfo={folderInfo} />
      <div className={style.mainContent}>
        <SearchBar />
        <LinkList linkList={linkList} />
      </div>
    </main>
  );
}

export default Folder;
