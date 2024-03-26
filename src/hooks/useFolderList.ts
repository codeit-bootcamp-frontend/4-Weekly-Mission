import { getFolderList } from '../api';
import { useState, useEffect } from 'react';

interface Link {
  count: number;
}

interface FolderList {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: Link;
}

const useFolderList = () => {
  const [folderList, setFolderList] = useState<FolderList[]>([]);

  useEffect(() => {
    const fetchFolderList = async () => {
      const { data } = await getFolderList();
      setFolderList(data);
    };

    fetchFolderList();
  }, []);

  return folderList;
};

export default useFolderList;
