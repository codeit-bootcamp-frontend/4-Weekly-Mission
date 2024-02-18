import { useState, useEffect } from 'react';
import { getUser, getFolder } from '../api/BaseUrl';
import { Route } from 'react-router-dom';
import SharedPage from './SharedPage';

import Header from '../components/header';
import Footer from '../components/footer';
import Info from '../components/info';
import Folder from '../components/folder';

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
      <Folder folderInfo={folder} />
      <Footer />
      <Route path='/shared' component={SharedPage} />
    </div>
  );
};

export default Page;
