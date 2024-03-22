import Header from '@/src/components/commons/Header/Header';
import SearchBar from '@/src/components/commons/SearchBar/SearchBar';
import SubHeader from '@/src/components/folder/SubHeader/SubHeader';
import Footer from '@/src/components/commons/Footer/Footer';
import { useState, useCallback, useMemo } from 'react';
import useAPIData from '@/src/hooks/useAPIData';
import { getCategoryDataAPI, getCardDataAPI } from '@/src/API/API';
import {
  CategoryDataType,
  folderCardDataType,
  folderCardType,
} from '@/src/type';
import Folder from '@/src/components/folder/Folder/Folder';
import folderContext from '@/src/context/folderContext';
import Modal from '@/src/components/folder/Modal/Modal';
import FilterData from '@/src/utils/FilterData';
import * as S from './index.style';

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
  const [topic, setTopic] = useState<string>('');
  const [viewFooter, setViewFooter] = useState<boolean>(false);
  const [modalData, setModalData] = useState<modalDataType>({
    modalType: null,
    subTitle: null,
    folder: undefined,
    currentFolderID: null,
    currentLinkID: null,
  });
  const { data: folderData } = useAPIData<CategoryDataType>(getCategoryDataAPI);
  const { data: folderCard } = useAPIData<folderCardDataType>(
    getCardDataAPI,
    currentFolder?.id,
  );

  const cardData = FilterData<folderCardType>(folderCard?.card, topic);
  const changeViewFooter = useCallback((value: boolean) => {
    setViewFooter(value);
  }, []);
  const changeTopic = useCallback((value: string) => {
    setTopic(value);
  }, []);

  const changeKebabID = useCallback((newValue: number | null) => {
    setKebabID(newValue);
  }, []);

  const changeModalData = useCallback((newValue: modalDataType) => {
    setModalData(newValue);
  }, []);

  const changeCurrentFolder = useCallback(
    (value: currentFolderDataType | null) => {
      setCurrentFolder(value);
    },
    [],
  );

  const value = useMemo(
    () => ({ kebabID, changeKebabID, modalData, changeModalData }),
    [kebabID, changeKebabID, modalData, changeModalData],
  );
  return (
    <folderContext.Provider value={value}>
      <S.Wrapper>
        <Header fix={false} />
        <SubHeader
          folderData={folderData}
          currentFolder={currentFolder}
          viewFooter={viewFooter}
        />
        <S.Content>
          <S.ContentWrapper>
            <SearchBar topic={topic} changeTopic={changeTopic} />
            {topic && (
              <S.SearchText>
                <S.TopicText>{topic}</S.TopicText> 으로 검색한 결과입니다.
              </S.SearchText>
            )}
            <Folder
              currentFolder={currentFolder}
              changeCurrentFolder={changeCurrentFolder}
              folderData={folderData}
              cardData={cardData}
            />
          </S.ContentWrapper>
        </S.Content>
        <Footer changeViewFooter={changeViewFooter} />
        <Modal />
      </S.Wrapper>
    </folderContext.Provider>
  );
}
