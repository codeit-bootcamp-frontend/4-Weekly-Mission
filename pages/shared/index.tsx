import Header from '@/src/components/commons/Header/Header';
import SubHeader from '@/src/components/shared/SubHeader/SubHeader';
import SearchBar from '@/src/components/commons/SearchBar/SearchBar';
import Card from '@/src/components/commons/Card/Card';
import Footer from '@/src/components/commons/Footer/Footer';
import useAPIData from '@/src/hooks/useAPIData';
import { getFolderDataAPI } from '@/src/API/API';
import { FolderDataType, cardDataType } from '@/src/type';
import { useCallback, useState } from 'react';
import FilterData from '@/src/utils/FilterData';
import * as S from './index.style';

export default function SharedPage() {
  const [topic, setTopic] = useState<string>('');
  const { data: folder } = useAPIData<FolderDataType>(getFolderDataAPI);
  const cardData = folder ? folder.cardData : null;
  const filteredData = FilterData<cardDataType>(cardData, topic);
  const folderData = { category: null, error: null };
  const currentFolder = { title: null, id: null };
  const changeTopic = useCallback((value: string) => {
    setTopic(value);
  }, []);
  return (
    <>
      <Header fix />
      <SubHeader folder={folder} />
      <S.Content>
        <S.ContentWrapper>
          <SearchBar topic={topic} changeTopic={changeTopic} />
          {topic && (
            <S.SearchText>
              <S.TopicText>{topic}</S.TopicText> 으로 검색한 결과입니다.
            </S.SearchText>
          )}
          <S.CardWrapper>
            {filteredData?.map((card) => (
              <Card
                key={card.id}
                card={card}
                page="shared"
                folderData={folderData}
                currentFolder={currentFolder}
              />
            ))}
          </S.CardWrapper>
        </S.ContentWrapper>
      </S.Content>
      <Footer />
    </>
  );
}
