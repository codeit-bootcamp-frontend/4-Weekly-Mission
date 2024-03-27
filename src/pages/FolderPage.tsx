import styles from './FolderPage.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import { useState, useEffect, SetStateAction } from 'react';
import { getFolderUser, getFolderList } from '../apis/api';
import { FolderList, FolderUser } from '../types/type';

import Header from '../components/common/Header';
import AddLink from '../components/FolderPage/AddLink';
import FolderContent from '../components/common/FolderContent';
import SearchBar from '../components/common/SearchBar';
import FolderNav from '../components/FolderPage/FolderNav';
import Footer from '../components/common/Footer';

const FolderPage = () => {
  const [user, setUser] = useState<FolderUser[]>([]);
  const [folderList, setFolderList] = useState<FolderList[]>([]);

  async function handleLoad<T>(getState: () => Promise<T>, setState: React.Dispatch<SetStateAction<T>>) {
    try {
      const state = await getState();
      setState(state);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleLoad(getFolderUser, setUser);
    handleLoad(getFolderList, setFolderList);
  }, []);

  return (
    <div className={cn('folder-layout')}>
      <Header userInfo={user?.[0]} isSticky={false} />

      <AddLink folderList={folderList} />
      <FolderContent>
        <SearchBar />
        <FolderNav folderList={folderList} />
      </FolderContent>

      <Footer />
    </div>
  );
};

export default FolderPage;
