import { useEffect, useState } from 'react';
import * as S from './Content.style';
import Card from '../../../components/card/Card';
import { get } from '../../../apis/api';
import SearchBar from '../../../components/search-bar/SearchBar';

interface Link {
  id: number;
  createdAt: string;
  created_at: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

interface SampleFolder {
  folder: {
    id: number;
    name: string;
    owner: Owner;
    links: Link[];
    count: number;
  };
}

const Content = () => {
  const [sampleFolder, setSampleFolder] = useState<SampleFolder | null>(null);

  useEffect(() => {
    get('/sample/folder').then((data: SampleFolder) => setSampleFolder(data));
  }, []);

  return (
    <main>
      {sampleFolder && (
        <>
          <S.ContentHeaderContainer>
            <h1 className="owner">
              {sampleFolder.folder.owner && (
                <>
                  <img
                    className="owner-img"
                    src={sampleFolder.folder.owner.profileImageSource}
                    alt="소유자 프로필 이미지"
                  />
                  {sampleFolder.folder.owner.name}
                </>
              )}
            </h1>
            <div className="folder-name">{sampleFolder.folder.name}</div>
          </S.ContentHeaderContainer>
          <S.CardListContainer>
            <SearchBar />
            <S.CardContainer>
              {sampleFolder.folder.links.map((link) => (
                <Card key={link.id} link={link} />
              ))}
            </S.CardContainer>
          </S.CardListContainer>
        </>
      )}
    </main>
  );
};

export default Content;
