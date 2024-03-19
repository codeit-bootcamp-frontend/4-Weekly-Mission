import Header from '@/src/components/commons/Header/Header';
import SearchBar from '@/src/components/folder/SearchBar/SearchBar';
import SubHeader from '@/src/components/folder/SubHeader/SubHeader';
import Folder from '@/src/components/folder/Folder/Folder';
import { Content, ContentWrapper } from './index.style';

export default function FolderPage() {
  return (
    <>
      <Header fix={false} />
      <SubHeader />
      <Content>
        <ContentWrapper>
          <SearchBar />
          <Folder />
        </ContentWrapper>
      </Content>
    </>
  );
}
