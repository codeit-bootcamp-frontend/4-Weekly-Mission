import { useEffect, useState } from 'react';
import { getUserData, getFolderData } from './api/api';
import Header from './components/common/header/Header';
import Main from './components/main/Main';
import Footer from './components/common/footer/Footer';
import './common.css';

function App() {
  const [user, setUser] = useState([]);
  const [folderOwner, setFolderOwner] = useState([]);
  const [folderName, setFolderName] = useState('');
  const [cardData, setCardData] = useState([]);

  // get user sample data from api
  const getUserInformation = async () => {
    const userInformation = await getUserData();
    setUser(userInformation);
  };
  useEffect(() => {
    getUserInformation();
  }, []);

  // get folder sample data from api
  const getFolderInformation = async () => {
    const folderInformation = await getFolderData();
    setFolderOwner(folderInformation.folder.owner);
    setFolderName(folderInformation.folder.name);
    setCardData(folderInformation.folder.links);
  };
  useEffect(() => {
    getFolderInformation();
  }, []);
  return (
    <>
      <Header user={user} />
      <Main
        user={user}
        folderOwner={folderOwner}
        folderName={folderName}
        cardData={cardData}
      />
      <Footer />
    </>
  );
}

export default App;
