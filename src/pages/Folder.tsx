import LinkAddInput from '../components/LinkAddInput';
import SearchBar from '../components/SearchBar';
import FolderList from '../components/FolderList';
import { useCallback, useEffect, useState } from 'react';
import style from '../styles/Folder.module.css';
import useAsync from '../hooks/useAsync';
import LinkList from '../components/LinkList';
import { getFolderList, getLinkList } from '../services/api';
import { folderDataType } from '@/types/folderDataType.type';

interface link {
  id: number;
  title: string;
  url: string;
  createdAt: string;
  created_at: string;
  imageSource: string;
  image_source: string;
}

function Folder() {
  const [linkList, setLinkList] = useState<link[]>([]);
  const [folderId, setFolderId] = useState('');
  const [folderList, setFolderList] = useState<folderDataType[]>([]);
  const asyncGetFolderList = useAsync<any>(getFolderList);
  const asyncGetLinkList = useAsync<any>(getLinkList);

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
        {folderList.length ? (
          <>
            <FolderList folderList={folderList} onClick={setFolderId} />
            <LinkList linkList={linkList} folderList={folderList} />
          </>
        ) : (
          <div className={style.noLink}>저장된 링크가 없습니다.</div>
        )}
      </div>
    </main>
  );
}

export default Folder;
