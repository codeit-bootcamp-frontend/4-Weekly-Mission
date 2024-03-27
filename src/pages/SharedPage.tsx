import styles from './SharedPage.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import { useState, useEffect, SetStateAction } from 'react';
import { getSharedFolder, getSharedUser } from '../apis/api';
import { SharedFolder, SharedUser } from '../types/type';

import Header from '../components/common/Header';
import FolderInfo from '../components/SharedPage/FolderInfo';
import FolderContent from '../components/common/FolderContent';
import SearchBar from '../components/common/SearchBar';
import CardList from '../components/common/CardList';
import Footer from '../components/common/Footer';

const SharedPage = () => {
  const [user, setUser] = useState<SharedUser>();
  const [folder, setFolder] = useState<SharedFolder | undefined>(undefined);
  const folderInfo = folder?.folder?.links;

  async function handleLoad<T>(getState: () => Promise<T>, setState: React.Dispatch<SetStateAction<T>>) {
    try {
      const state = await getState();
      setState(state);
    } catch (error) {
      console.error(error);
    }
  }

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
