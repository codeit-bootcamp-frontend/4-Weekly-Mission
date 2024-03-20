import Header from '@/src/components/commons/Header/Header';
import SubHeader from '@/src/components/shared/SubHeader/SubHeader';
import SearchBar from '@/src/components/shared/SearchBar/SearchBar';
import Card from '@/src/components/commons/Card/Card';
import Footer from '@/src/components/commons/Footer/Footer';
import useAPIData from '@/src/hooks/useAPIData';
import { getFolderDataAPI } from '@/src/API/API';
import { FolderDataType } from '@/src/type';
import { CardWrapper, Content, ContentWrapper } from './index.style';

export default function SharedPage() {
  const { data: folder } = useAPIData(getFolderDataAPI);
  const cardData = (folder as FolderDataType)?.cardData;
  return (
    <>
      <Header fix />
      <SubHeader folder={folder as FolderDataType} />
      <Content>
        <ContentWrapper>
          <SearchBar />
          <CardWrapper>
            {cardData?.map((card, index) => (
              <Card key={index} card={card} page="shared" />
            ))}
          </CardWrapper>
        </ContentWrapper>
      </Content>
      <Footer />
    </>
  );
}
