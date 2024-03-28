import Header from '@/src/components/commons/Header/Header';
import SearchBar from '@/src/components/commons/SearchBar/SearchBar';
import SubHeader from '@/src/components/folder/SubHeader/SubHeader';
import Footer from '@/src/components/commons/Footer/Footer';
import { useState, useCallback, useRef, useEffect } from 'react';
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
  const target = useRef<HTMLDivElement>(null);
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
  const [visible, setVisible] = useState(false);
  const [topic, setTopic] = useState<string>('');
  const cardData = FilterData<folderCardType>(
    folderCard?.card ? folderCard?.card : null,
    topic,
  );

  const changeTopic = useCallback((value: string) => {
    setTopic(value);
  }, []);
  const changeCurrentFolder = useCallback(
    (value: currentFolderDataType | null) => {
      setCurrentFolder(value);
    },
    [],
  );

  useEffect(() => {
    const targetHeight = target.current ? target.current.scrollHeight : 0;
    const minThreshold = Math.min(window.innerHeight / targetHeight, 1);
    const options = {
      root: null,
      rootMargin: `0px 0px ${targetHeight}px 0px`,
      threshold: [minThreshold, 1],
    };
    const handleIntersectionObserver = (
      entries: IntersectionObserverEntry[],
    ) => {
      if (
        entries[0].intersectionRatio < 1 &&
        entries[0].intersectionRatio >= minThreshold
      ) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    const observer = new IntersectionObserver(
      handleIntersectionObserver,
      options,
    );
    if (target.current) {
      observer.observe(target.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [cardData]);
  return (
    <FolderContextProvider>
      <S.Wrapper>
        <Header fix={false} />
        <SubHeader folderData={folderData} currentFolder={currentFolder} />
        <S.Content ref={target}>
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
        {visible && (
          <SubHeader
            folderData={folderData}
            currentFolder={currentFolder}
            type="below"
          />
        )}
        <Footer />
        <Modal />
      </S.Wrapper>
    </FolderContextProvider>
  );
}
