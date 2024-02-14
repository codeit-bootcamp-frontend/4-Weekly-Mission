import { useState, useEffect } from 'react';
import { getFolder } from '../apis/api';

import Gnb from '../components/Gnb';
import Header from '../Header';
import SharedFolder from '../Folder';
import Footer from '../components/Footer';

const SharedPage = () => {
  const [folders, setFolders] = useState({});

  useEffect(() => {
    const fetchFolder = async () => {
      const { folder } = await getFolder();
      
      setFolders(folder);
    };

    fetchFolder();
  }, []);

  return (
    <>
      <Gnb className='gnb_ly gnb-container_sticky'/>
      <Header items={folders} />
      <SharedFolder items={folders} />
      <Footer/>
    </>
  )
}

export default SharedPage;