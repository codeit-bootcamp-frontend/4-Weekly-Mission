import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';

import PageTitle from 'components/common/PageTitle';
import FolderHeader from 'components/folder/FolderHeader';
import MainLayout from 'components/template/MainLayout';
import AddFolderButton from 'components/common/button/AddFolderButton';
import TabButton from 'components/common/button/TabButton';
import OptionBtns from 'components/folder/OptionBtns';
import FolderGridCard from 'components/folder/FolderGridCard';
import FloatButton from 'components/common/button/FloatButton';
import SearchBar from 'components/SearchBar';

import PLACEHOLDER from 'constants/FORM_MESSAGE';
import useUserFoldersQuery from 'hooks/api/folder/useUserFoldersQuery';

const Styled = {
  NoLink: styled.div`
    height: 10rem;

    display: flex;
    justify-content: center;
    align-items: center;
  `,

  SearchResult: styled.div`
    margin-top: 4rem;
    font-size: 3.2rem;
    font-weight: 600;
    line-height: 3.82rem;

    color: ${({ theme }) => theme.color.gray4};
    span {
      color: ${({ theme }) => theme.color.black};
    }

    @media (max-width: 767px) {
      margin-top: 3.2rem;

      font-size: 2.4rem;
      line-height: 2.86rem;
    }
  `,

  ButtonBox: styled.div`
    margin: 4rem 0 2.4rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
      margin-top: 3.2rem;
    }
  `,

  TitleAndOptions: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 2.4rem;

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: start;
      gap: 1.2rem;
    }
  `,
};

function FolderPage() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [selectedTabName, setSelectedTabName] = useState('전체');
  const [selectedFolder, setSelectedFolder] = useState(1);
  const [keyword, setKeyword] = useState(searchParams.get('keyword'));

  useEffect(() => {
    setKeyword(searchParams.get('keyword'));
  }, [searchParams]);

  const { data } = useUserFoldersQuery({ userId: 1 });
  let folderList = [{ id: 1, name: '전체' }, ...(data?.data?.data || [])];
  const hasFolders = folderList.length !== 0;

  return (
    <>
      <PageTitle title="폴더" />
      <FolderHeader />
      <MainLayout>
        {!hasFolders ? (
          <Styled.NoLink>저장된 링크가 없습니다 🥲</Styled.NoLink>
        ) : (
          <>
            <SearchBar placeholder={PLACEHOLDER.SEARCH_LINK} uri={location.pathname} />
            {keyword && (
              <Styled.SearchResult>
                <span>{keyword}</span>(으)로 검색한 결과입니다.
              </Styled.SearchResult>
            )}

            <Styled.ButtonBox>
              <TabButton
                tabInfo={folderList}
                onChange={(name, id) => {
                  setSelectedTabName(name);
                  setSelectedFolder(id);
                }}
              />
              <AddFolderButton />
            </Styled.ButtonBox>

            <Styled.TitleAndOptions>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 600 }}>{selectedTabName}</h2>
              {selectedTabName !== '전체' && <OptionBtns />}
            </Styled.TitleAndOptions>
            <FloatButton>폴더추가</FloatButton>
            <FolderGridCard keyword={keyword} selectedFolder={selectedFolder} />
          </>
        )}
      </MainLayout>
    </>
  );
}

export default FolderPage;
