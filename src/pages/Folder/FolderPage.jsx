import { useEffect, useState } from 'react';
import { SearchBox, SearchBoxLink } from '../../components/SearchBox';
import TabList from '../../components/Tab/TabList';
import * as S from './FolderPage.styled';
import { useLoginUser } from '../../contexts/LoginContext';
import { getFolders } from '../../api';

function FolderPage() {
  const loginUser = useLoginUser();
  const [folders, setFolders] = useState([]);

  const handleLoadFolders = async () => {
    const userId = loginUser?.id;
    if (!userId) return;
    try {
      const { data } = await getFolders(userId);
      setFolders(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoadFolders();
  }, [loginUser]);

  return (
    <S.FolderPageLayout>
      <S.FolderPageHeader>
        <S.HeaderSearch>
          <SearchBoxLink placeholder="링크를 추가해 보세요" />
        </S.HeaderSearch>
      </S.FolderPageHeader>
      <S.FolderPageContent>
        <S.ContentHeader>
          <SearchBox />
          {folders.length ? (
            <TabList items={folders} />
          ) : (
            <S.ContentEmptyBox>저장된 링크가 없습니다.</S.ContentEmptyBox>
          )}
        </S.ContentHeader>
      </S.FolderPageContent>
    </S.FolderPageLayout>
  );
}

export default FolderPage;
