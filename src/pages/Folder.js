import { useState, useEffect } from 'react';
import { getFolderUser, getFolderList } from '../api';
//, getFolderLink

import Header from '../components/Header';
import AddLink from '../components/AddLink';
import FolderContent from '../components/FolderContent';
import SearchBar from '../components/SearchBar';
import FolderList from '../components/FolderList';
// import CardList from '../components/CardList';
import Footer from '../components/Footer';

const Folder = () => {
  const [user, setUser] = useState({});
  const [folderList, setFolderList] = useState(null);
  // const [folderLink, setFolderLink] = useState(null);


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
    // handleLoad(getFolderLink, setFolderLink);
  }, []);

  return (
    <div>
      <Header userInfo={user[0]} isSticky={false} />

      <AddLink />
      <FolderContent>
        <SearchBar />
        <FolderList folderList={folderList} />
        {/* <CardList folderInfo={folderLink} isFolderTitle={true} isIconVisible={true} /> */}
      </FolderContent>

      <Footer />
    </div>
  );
}

export default Folder;