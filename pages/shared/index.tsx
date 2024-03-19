import Header from '@/src/components/commons/Header/Header';
import SubHeader from '@/src/components/shared/SubHeader/SubHeader';
import SearchBar from '@/src/components/shared/SearchBar/SearchBar';
import Card from '@/src/components/commons/Card/Card';
import { CardWrapper, Content, ContentWrapper } from './index.style';

export default function SharedPage() {
  return (
    <>
      <Header />
      <SubHeader />
      <Content>
        <ContentWrapper>
          <SearchBar />
          <CardWrapper>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </CardWrapper>
        </ContentWrapper>
      </Content>
    </>
  );
}
