import Header from '@/src/components/commons/Header/Header';
import SearchBar from '@/src/components/folder/SearchBar/SearchBar';
import SubHeader from '@/src/components/folder/SubHeader/SubHeader';
import Folder from '@/src/components/folder/Folder/Folder';
import Footer from '@/src/components/commons/Footer/Footer';
import { useState } from 'react';
import useAPIData from '@/src/hooks/useAPIData';
import { getCategoryDataAPI, getCardDataAPI } from '@/src/API/API';
import { CategoryDataType, folderCardDataType } from '@/src/type';
import { Content, ContentWrapper } from './index.style';

interface folderDataType {
  title: string | null;
  id: string | null;
}

export default function FolderPage() {
  const [currentFolder, setCurrentFolder] = useState<folderDataType | null>({
    title: '전체',
    id: '0',
  });
  const changeCurrentFolder = (value: folderDataType | null) => {
    setCurrentFolder(value);
  };

  const { data: folderData } = useAPIData(getCategoryDataAPI);
  const { data: folderCard } = useAPIData(getCardDataAPI, currentFolder?.id);
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
            folderData={folderData as CategoryDataType}
            cardData={folderCard as folderCardDataType}
          />
        </ContentWrapper>
      </Content>
      <Footer />
    </>
  );
}
