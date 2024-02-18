import { useState, useEffect } from 'react';

import { getFolderList } from '../apis/api';

import Gnb from '../components/Gnb';
import AddLink from '../AddLink';
import Folder from '../Folder';
import Footer from '../components/Footer';

const FolderPage = () => {
  const [folderList, setFolderList] = useState([]);

  useEffect(() => {
    const fetchFolderList = async () => {
      const { data } = await getFolderList();

      setFolderList(data);
    };

    fetchFolderList();
  }, []);

  return (
    <>
      <Gnb className='gnb_ly'/>
      <AddLink />
      <Folder folderList={folderList}/>
      <Footer/>
    </>
  )
}

export default FolderPage;