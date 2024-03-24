import { useEffect, useState } from 'react';
import { SearchBox, SearchBoxLink } from '../../components/SearchBox';
import TabList from '../../components/Tab/TabList';
import * as S from './FolderPage.styled';
import { useLoginUser } from '../../contexts/LoginContext';
import { getFolders, getLinks } from '../../api';
import { CardList } from '../../components/Card';
import {
  IconAdd,
  IconDustbin,
  IconPen,
  IconShare,
} from '../../components/Icon';
import { CardItem } from '@src/components/Card/Card';

interface UserFolder {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}

export interface LinkBase {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}

export interface Link extends CardItem {
  updatedAt: string | null;
  folderId: number;
}

function FolderPage() {
  const loginUser = useLoginUser();
  const [activeFolder, setActiveFolder] = useState<UserFolder | null>(null);
  const [folders, setFolders] = useState<UserFolder[]>([]);
  const [links, setLinks] = useState<Link[]>([]);

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

  const handleSelectFolder = (folder: UserFolder) => {
    setActiveFolder(folder);
  };

  const handleLoadLinks = async () => {
    const userId = loginUser?.id;
    const folderId = activeFolder?.id;
    if (!userId || !folderId) return;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          {loginUser ? (
            <>
              <S.ContentTabBox>
                <TabList
                  items={folders}
                  activeId={activeFolder?.id}
                  onSelect={handleSelectFolder}
                />
                <S.ContentTabAdd>
                  폴더 추가 <IconAdd />
                </S.ContentTabAdd>
              </S.ContentTabBox>
              <S.ContentTitleBox>
                <S.ContentTitle>{activeFolder?.name || '전체'}</S.ContentTitle>
                {activeFolder?.name && (
                  <S.ContentOptionBox>
                    <S.ContentOptionItem>
                      <IconShare />
                      공유
                    </S.ContentOptionItem>
                    <S.ContentOptionItem>
                      <IconPen />
                      이름 변경
                    </S.ContentOptionItem>
                    <S.ContentOptionItem>
                      <IconDustbin />
                      삭제
                    </S.ContentOptionItem>
                  </S.ContentOptionBox>
                )}
              </S.ContentTitleBox>
            </>
          ) : (
            <S.ContentEmptyBox>저장된 링크가 없습니다.</S.ContentEmptyBox>
          )}
        </S.ContentHeader>
        {loginUser &&
          (links.length ? (
            <CardList items={links} />
          ) : (
            <S.ContentEmptyBox>저장된 링크가 없습니다.</S.ContentEmptyBox>
          ))}
      </S.FolderPageContent>
    </S.FolderPageLayout>
  );
}

export default FolderPage;
