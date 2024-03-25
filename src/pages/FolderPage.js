import styles from './FolderPage.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import { useState, useEffect } from 'react';
import { getFolderUser, getFolderList } from '../apis/api';

import Header from '../components/common/Header';
import AddLink from '../components/FolderPage/AddLink';
import FolderContent from '../components/common/FolderContent';
import SearchBar from '../components/common/SearchBar';
import FolderList from '../components/FolderPage/FolderList';
import Footer from '../components/common/Footer';

const FolderPage = () => {
  const [user, setUser] = useState(null);
  const [folderList, setFolderList] = useState(null);

  const handleLoad = async (getState, setState) => {
    try {
      const state = await getState();
      setState(state);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoad(getFolderUser, setUser);
    handleLoad(getFolderList, setFolderList);
  }, []);

  return (
    <div className={cn('folder-layout')}>
      <Header userInfo={user?.[0]} isSticky={false} />

      <AddLink folderList={folderList?.data} />
      <FolderContent>
        <SearchBar />
        <FolderList folderList={folderList?.data} />
      </FolderContent>

      <Footer />
    </div>
  );
};

export default FolderPage;