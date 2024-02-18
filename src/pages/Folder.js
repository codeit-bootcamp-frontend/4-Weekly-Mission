import { useState, useEffect } from 'react';
import { getFolder, getUser } from '../api';

import Header from '../components/Header';
import AddLink from '../components/AddLink';
import FolderContent from '../components/FolderContent';
import SearchBar from '../components/SearchBar';
import FolderList from '../components/FolderList';
import CardList from '../components/CardList';
import Footer from '../components/Footer';

const Folder = () => {
  const [user, setUser] = useState(null);
  const [folder, setFolder] = useState(null);

  const handleLoad = async (getState, setState) => {
    try {
      const state = await getState();
      setState(state);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoad(getUser, setUser);
    handleLoad(getFolder, setFolder);
  }, []);

  return (
    <div>
      <Header userInfo={user} isSticky={false} />

      <AddLink />
      <FolderContent>
        <SearchBar />
        <FolderList />
        <CardList folderInfo={folder} isIconVisible={true} />
      </FolderContent>

      <Footer />
    </div>
  );
}

export default Folder;