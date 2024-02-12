import { useState, useEffect } from 'react';
import './homepage.css';
import Footer from '../../layout/Footer/Footer';
import Header from '../../layout/Header/Header';
import { getFolderData } from '../../../apis/folderApi';
import Folder from '../../layout/Folder/Folder';
import CardGrid from '../../layout/Card/Card';
import SearchBar from '../../layout/Card/CardSearchbar';

const HomePage = () => {
  const [folder, setFolder] = useState(null);
  const [card, setCard] = useState(null);

  useEffect(() => {
    getFolderData()
      .then(data => {
        setFolder(data.folder);
        setCard(data.folder.links);
      })
      .catch(error => {
        alert('데이터를 불러오는데 실패했습니다.');
      });
  }, []);

  return (
    <>
      <Header />
      {folder && <Folder folder={folder} />}
      <main className="homepage-maincontainer">
        <SearchBar />
        {card && <CardGrid links={card} />}
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
