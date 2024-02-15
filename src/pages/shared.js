import React, { useEffect, useState } from 'react';
import Header from '../components/sharedPageComponents/header';
import Contents from '../components/sharedPageComponents/contents';
import Footer from '../components/sharedPageComponents/footer';
import { userDataAPI, folderDataAPI } from '../api/sharedPageAPI';
import '../styles/shared.css';

export default function Main() {
  const [userProfile, setUserProfile] = useState({ email: null, image: null });
  const [folder, setFolder] = useState({
    userName: null,
    userImage: null,
    name: null,
  });
  const [cardData, setCardData] = useState(null);
  useEffect(() => {
    getAPIData();
  }, []);

  const getAPIData = async () => {
    const userData = await userDataAPI();
    const { userName, userImage, name, cardData } = await folderDataAPI();

    setUserProfile(userData);
    setFolder({ userName, userImage, name });
    setCardData(cardData);
  };

  return (
    <>
      <Header userProfile={userProfile} folder={folder}></Header>
      <Contents links={cardData}></Contents>
      <Footer></Footer>
    </>
  );
}
