import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import { API_PATH } from '../../services/api-path';
import FETCH_API from '../../services/fetch-data';
import * as Styled from './Share.styled';

interface Link {
  id: number;
  createdAt?: string;
  created_at?: string;
  imageSource?: string;
  image_source?: string;
  title: string;
  description: string;
  url: string;
}

interface UserProfile {
  profileImg: string;
  folderOwner: string;
  folderName: string;
}

function Share() {
  const [linkList, setLinkList] = useState<Link[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    profileImg: '',
    folderOwner: '',
    folderName: ''
  });

  useEffect(() => {
    const folderLoad = async (): Promise<void> => {
      try {
        const response = await FETCH_API.get(API_PATH.SAMPLE_FOLDER);
        if (!response.ok) {
          throw new Error('폴더 로드 에러 발생');
        }
        const result = await response.json();
        setUserProfile({
          profileImg: result.folder.owner.profileImageSource,
          folderOwner: result.folder.owner.name,
          folderName: result.folder.name
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
      <Styled.Share>
        <Styled.Profile>
          <Styled.ProfileBox>
            <Styled.ProfileImg src={userProfile.profileImg} alt="유저 프로필 이미지" />
            <Styled.ProfileNickname>{userProfile.folderOwner}</Styled.ProfileNickname>
            <Styled.ProfileBookmark>{userProfile.folderName}</Styled.ProfileBookmark>
          </Styled.ProfileBox>
        </Styled.Profile>
        <Content linkList={linkList} option={false} setLinkList={setLinkList} />
      </Styled.Share>
      <Footer />
    </>
  );
}

export default Share;
