import { useState, useEffect } from 'react';
import { getUser, getFolder } from '../api/BaseUrl';
// import { Route } from 'react-router-dom';
// import FolderPage from './FolderPage';

import Header from '../components/header';
import Footer from '../components/footer';
import AddLink from '../components/AddLink';
import Folder from '../components/folder';

const FoldPage = () => {
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
      <Folder folderInfo={folder} />
      <Footer />
      {/* <Route path='/folder' component={FolderPage} /> */}
    </div>
  );
};

export default FoldPage;
