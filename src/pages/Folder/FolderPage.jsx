import { useEffect, useState } from 'react';
import { SearchBox, SearchBoxLink } from '../../components/SearchBox';
import TabList from '../../components/Tab/TabList';
import * as S from './FolderPage.styled';
import { useLoginUser } from '../../contexts/LoginContext';
import { getFolders, getLinks } from '../../api';
import { CardList } from '../../components/Card';

function FolderPage() {
  const loginUser = useLoginUser();
  const [activeFolder, setActiveFolder] = useState({});
  const [folders, setFolders] = useState([]);
  const [links, setLinks] = useState([]);

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

  const handleSelectFolder = (folder) => {
    setActiveFolder(folder);
  };

  const handleLoadLinks = async () => {
    const userId = loginUser?.id;
    const folderId = activeFolder?.id;
    if (!userId) return;
    try {
      const { data } = await getLinks(userId, folderId);
      setLinks(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoadFolders();
    handleLoadLinks();
  }, [loginUser, activeFolder]);

  return (
    <S.FolderPageLayout>
      <S.FolderPageHeader>
        <S.HeaderSearch>
          <SearchBoxLink placeholder="링크를 추가해 보세요" />
        </S.HeaderSearch>
      </S.FolderPageHeader>
      <S.FolderPageContent>
        <S.ContentHeader>
          <SearchBox placeholder="링크를 검색해 보세요." />
          {folders.length ? (
            <TabList
              items={folders}
              activeId={activeFolder.id}
              onSelect={handleSelectFolder}
            />
          ) : (
            <S.ContentEmptyBox>저장된 링크가 없습니다.</S.ContentEmptyBox>
          )}
        </S.ContentHeader>
        <CardList items={links} />
      </S.FolderPageContent>
    </S.FolderPageLayout>
  );
}

export default FolderPage;
