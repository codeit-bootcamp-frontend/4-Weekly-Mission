import { useState, useEffect } from 'react';
import { getUser } from '../api/BaseUrl';

import Header from './header';
import Footer from './footer';
import Info from './info';
import Folder from './folder';

const Page = () => {
  const [user, setUser] = useState(null);

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
  }, []);

  return (
    <div>
      <Header userInfo={user} />
      <Info />
      <Folder />
      <Footer />
    </div>
  );
};

export default Page;
