import { useState, useEffect } from 'react';
import { getFolderUser, getFolderList } from '../api';
import '../styles/FolderPage.css';

import Header from '../components/Header';
import AddLink from '../components/AddLink';
import FolderContent from '../components/FolderContent';
import SearchBar from '../components/SearchBar';
import FolderList from '../components/FolderList';
import Footer from '../components/Footer';

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
    <div className='folder-layout'>
      <Header userInfo={user?.[0]} isSticky={false} />

      <AddLink folderList={folderList?.data} />
      <FolderContent>
        <SearchBar />
        <FolderList folderList={folderList?.data} />
      </FolderContent>

      <Footer />
    </div>
  );
}

export default FolderPage;