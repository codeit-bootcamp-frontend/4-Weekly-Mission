import styles from '../styles/SharedPage.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import { useState, useEffect } from 'react';
import { getSharedFolder, getSharedUser } from '../api';

import Header from '../components/Header';
import FolderInfo from '../components/FolderInfo';
import FolderContent from '../components/FolderContent';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';
import Footer from '../components/Footer';

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