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
  const [user, setUser] = useState({});
  const [folderList, setFolderList] = useState(null);

  const handleLoad = async (getState, setState) => {
    try {
      const state = await getState();
      setState(state.data);
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
      <Header userInfo={user[0]} isSticky={false} />

      <AddLink />
      <FolderContent>
        <SearchBar />
        <FolderList folderList={folderList} />
      </FolderContent>

      <Footer />
    </div>
  );
}

export default FolderPage;