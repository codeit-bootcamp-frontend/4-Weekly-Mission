import { useState, useEffect } from 'react';
import { getUser, getFolder } from '../api/BaseUrl';

import Header from './header';
import Footer from './footer';
import Info from './info';
import Folder from './folder';

const Page = () => {
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
      <Header userInfo={user} />
      <Info folderInfo={folder} />
      <Folder />
      <Footer />
    </div>
  );
};

export default Page;
