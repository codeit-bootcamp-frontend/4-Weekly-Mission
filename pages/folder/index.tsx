import Header from '@/src/components/commons/Header/Header';
import SearchBar from '@/src/components/folder/SearchBar/SearchBar';
import SubHeader from '@/src/components/folder/SubHeader/SubHeader';
import Footer from '@/src/components/commons/Footer/Footer';
import { useState, useCallback, useMemo } from 'react';
import useAPIData from '@/src/hooks/useAPIData';
import { getCategoryDataAPI, getCardDataAPI } from '@/src/API/API';
import { CategoryDataType, folderCardDataType } from '@/src/type';
import Folder from '@/src/components/folder/Folder/Folder';
import folderContext from '@/src/context/folderContext';
import Modal from '@/src/components/folder/Modal/Modal';
import { Content, ContentWrapper, Wrapper } from './index.style';

interface currentFolderDataType {
  title: string | null;
  id: string | null;
}

interface folderDataType {
  folderName: string;
  folderID: number;
  linkCount: number;
}

interface modalDataType {
  modalType: string | null;
  subTitle: string | null;
  folder: folderDataType[] | undefined;
  currentFolderID: number | null;
  currentLinkID: number | null;
}

export default function FolderPage() {
  const [currentFolder, setCurrentFolder] =
    useState<currentFolderDataType | null>({
      title: '전체',
      id: '0',
    });

  const [kebabID, setKebabID] = useState<number | null>(null);
  const [modalData, setModalData] = useState<modalDataType>({
    modalType: null,
    subTitle: null,
    folder: undefined,
    currentFolderID: null,
    currentLinkID: null,
  });
  const { data: folderData } = useAPIData(getCategoryDataAPI);
  const { data: folderCard } = useAPIData(getCardDataAPI, currentFolder?.id);

  const changeKebabID = useCallback((newValue: number | null) => {
    setKebabID(newValue);
  }, []);

  const changeModalData = useCallback((newValue: modalDataType) => {
    setModalData(newValue);
  }, []);

  const changeCurrentFolder = (value: currentFolderDataType | null) => {
    setCurrentFolder(value);
  };

  const value = useMemo(
    () => ({ kebabID, changeKebabID, modalData, changeModalData }),
    [kebabID, changeKebabID, modalData, changeModalData],
  );
  return (
    <folderContext.Provider value={value}>
      <Wrapper>
        <Header fix={false} />
        <SubHeader
          folderData={folderData as CategoryDataType}
          currentFolder={currentFolder}
        />
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
        <Modal />
      </Wrapper>
    </folderContext.Provider>
  );
}
