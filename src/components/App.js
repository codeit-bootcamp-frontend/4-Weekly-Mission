import '../assets/common/common.css';
import Header from './Header';
import Footer from './Footer';
import UserTitle from '../folder/UserTitle';
import Folder from '../folder/Folder';
import { getUser } from '../api';
import { useState, useEffect } from 'react';

function App() {
  const [userData, setUserData] = useState([]);

  const handleLoad = async () => {
    const response = await getUser();
    setUserData(response);
  };

  useEffect(() => {
    handleLoad();
  }, [])
  return (
    <>
      <Header/>
      <UserTitle userData={userData}/>
      <main>
        <div className='container'>
          <Folder userData={userData}/>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default App;
