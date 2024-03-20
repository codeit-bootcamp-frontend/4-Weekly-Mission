import Header from '@/src/components/commons/Header/Header';
import SearchBar from '@/src/components/folder/SearchBar/SearchBar';
import SubHeader from '@/src/components/folder/SubHeader/SubHeader';
import Folder from '@/src/components/folder/Folder/Folder';
import Footer from '@/src/components/commons/Footer/Footer';
import { useState } from 'react';
import { Content, ContentWrapper } from './index.style';

interface folderData {
  title: string | null;
  id: string | null;
}

export default function FolderPage() {
  const [currentFolder, setCurrentFolder] = useState<folderData | null>({
    title: '전체',
    id: '-1',
  });
  const changeCurrentFolder = (value: folderData | null) => {
    setCurrentFolder(value);
  };
  return (
    <>
      <Header fix={false} />
      <SubHeader />
      <Content>
        <ContentWrapper>
          <SearchBar />
          <Folder
            currentFolder={currentFolder}
            changeCurrentFolder={changeCurrentFolder}
          />
        </ContentWrapper>
      </Content>
      <Footer />
    </>
  );
}
