import Header from '../components/header/Header';
import Content from '../components/content/Content';
import Footer from '../components/footer/Footer';
import { useEffect, useState } from 'react';
import { API_PATH } from '../services/api-path';
import FETCH_API from '../services/fetch-data';
import '../styles/share.css';

function Share() {
  const [linkList, setLinkList] = useState([]);
  const [userProfile, setUserProfile] = useState({
    profileImg: '',
    folderOwner: '',
    folderName: '',
  });

  useEffect(() => {
    const folderLoad = async () => {
      try {
        const response = await FETCH_API.get(API_PATH.SAMPLE_FOLDER);
        if (!response.ok) {
          throw new Error('폴더 로드 에러 발생');
        }
        const result = await response.json();
        setUserProfile({
          profileImg: result.folder.owner.profileImageSource,
          folderOwner: result.folder.owner.name,
          folderName: result.folder.name,
        });
        setLinkList(result.folder.links);
      } catch (error) {
        console.error(error);
      }
    };
    folderLoad();
  }, []);

  return (
    <>
      <Header />
      <main className='folder'>
        <section className='profile'>
          <div className='profile__user'>
            <img className='profile__img' alt='유저 프로필 이미지' src={userProfile.profileImg} />
            <span className='profile__nickname'>{userProfile.folderOwner}</span>
            <span className='profile__bookmark'>{userProfile.folderName}</span>
          </div>
        </section>
        <Content linkList={linkList} option={false} />
      </main>
      <Footer />
    </>
  );
}

export default Share;
