import styles from './SharedPage.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import { useState, useEffect } from 'react';
import { getSharedFolder, getSharedUser } from '../apis/api';

import Header from '../components/common/Header';
import FolderInfo from '../components/SharedPage/FolderInfo';
import FolderContent from '../components/common/FolderContent';
import SearchBar from '../components/common/SearchBar';
import CardList from '../components/common/CardList';
import Footer from '../components/common/Footer';

const SharedPage = () => {
  const [user, setUser] = useState(null);
  const [folder, setFolder] = useState(null);
  const folderInfo = folder?.folder.links;

  const handleLoad = async (getState, setState) => {
    try {
      const state = await getState();
      setState(state);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoad(getSharedUser, setUser);
    handleLoad(getSharedFolder, setFolder);
  }, []);

  return (
    <div className={cn('shared-layout')}>
      <Header userInfo={user} />

      <FolderInfo folderInfo={folder} />
      <FolderContent>
        <SearchBar />
        <CardList folderInfo={folderInfo} />
      </FolderContent>

      <Footer />
    </div>
  );
};

export default SharedPage;