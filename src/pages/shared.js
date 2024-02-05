/*eslint-disable */
import React, { useEffect, useState } from 'react';
import Header from '../components/sharedPageComponents/header';
import Contents from '../components/sharedPageComponents/contents';
import Footer from '../components/sharedPageComponents/footer';
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
    userData();
    folderData();
  }, []);

  console.log('parent');

  const userData = async () => {
    try {
      const response = await fetch(
        'https://bootcamp-api.codeit.kr/api/sample/user',
      );
      const result = await response.json();
      if (response.ok) {
        setUserProfile({
          email: result.email,
          image: result.profileImageSource,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const folderData = async () => {
    try {
      const response = await fetch(
        'https://bootcamp-api.codeit.kr/api/sample/folder',
      );
      const { folder } = await response.json();
      if (response.ok) {
        setFolder({
          userName: folder.owner.name,
          userImage: folder.owner.profileImageSource,
          name: folder.name,
        });
        setCardData(folder.links);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header userProfile={userProfile} folder={folder}></Header>
      <Contents links={cardData}></Contents>
      <Footer></Footer>
    </>
  );
}
