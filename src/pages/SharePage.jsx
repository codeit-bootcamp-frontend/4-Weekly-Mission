import Header from '../components/header/Header';
import Content from '../components/content/Content';
import Footer from '../components/footer/Footer';
import { useEffect, useState } from 'react';
import { API_PATH } from '../services/api-path';
import FETCH_API from '../services/fetch-data';
import GlobalStyles from '../styles/Global.styled';
import * as Styled from '../components/Share.styled';

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
      <GlobalStyles />
      <Header />
      <Styled.Share>
        <Styled.Profile>
          <Styled.ProfileBox>
            <Styled.ProfileImg src={userProfile.profileImg} alt='유저 프로필 이미지' />
            <Styled.ProfileNickname>{userProfile.folderOwner}</Styled.ProfileNickname>
            <Styled.ProfileBookmark>{userProfile.folderName}</Styled.ProfileBookmark>
          </Styled.ProfileBox>
        </Styled.Profile>
        <Content linkList={linkList} option={false} />
      </Styled.Share>
      <Footer />
    </>
  );
}

export default Share;
