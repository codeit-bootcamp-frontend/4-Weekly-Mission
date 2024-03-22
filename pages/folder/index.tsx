import Header from '@/src/components/commons/Header/Header';
import SearchBar from '@/src/components/commons/SearchBar/SearchBar';
import SubHeader from '@/src/components/folder/SubHeader/SubHeader';
import Footer from '@/src/components/commons/Footer/Footer';
import { useState, useCallback } from 'react';
import useAPIData from '@/src/hooks/useAPIData';
import { getCategoryDataAPI, getCardDataAPI } from '@/src/API/API';
import { FolderContextProvider } from '@/src/context/folderContext';
import {
  CategoryDataType,
  folderCardDataType,
  folderCardType,
  currentFolderDataType,
} from '@/src/type';
import Folder from '@/src/components/folder/Folder/Folder';
import Modal from '@/src/components/folder/Modal/Modal';
import FilterData from '@/src/utils/FilterData';
import * as S from './index.style';

export default function FolderPage() {
  const [currentFolder, setCurrentFolder] =
    useState<currentFolderDataType | null>({
      title: '전체',
      id: '0',
    });
  const { data: folderData } = useAPIData<CategoryDataType>(getCategoryDataAPI);
  const { data: folderCard } = useAPIData<folderCardDataType>(
    getCardDataAPI,
    currentFolder?.id,
  );
  const [topic, setTopic] = useState<string>('');
  const [viewSubHeader, setViewSubHeader] = useState<boolean>(true);
  const [viewFooter, setViewFooter] = useState<boolean>(false);
  const cardData = FilterData<folderCardType>(
    folderCard?.card ? folderCard?.card : null,
    topic,
  );

  const changeViewSubHeader = useCallback((value: boolean) => {
    setViewSubHeader(value);
  }, []);

  const changeViewFooter = useCallback((value: boolean) => {
    setViewFooter(value);
  }, []);

  const changeTopic = useCallback((value: string) => {
    setTopic(value);
  }, []);
  const changeCurrentFolder = useCallback(
    (value: currentFolderDataType | null) => {
      setCurrentFolder(value);
    },
    [],
  );

  return (
    <FolderContextProvider>
      <S.Wrapper>
        <Header fix={false} />
        <SubHeader
          folderData={folderData}
          currentFolder={currentFolder}
          changeViewSubHeader={changeViewSubHeader}
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
        <SubHeader
          folderData={folderData}
          currentFolder={currentFolder}
          type="below"
          viewSubHeader={viewSubHeader}
          viewFooter={viewFooter}
        />
        <Footer changeViewFooter={changeViewFooter} />
        <Modal />
      </S.Wrapper>
    </FolderContextProvider>
  );
}
