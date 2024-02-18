import { useState } from 'react';
import { styled } from 'styled-components';

import useUserFoldersQuery from 'hooks/api/folder/useUserFoldersQuery';
import SearchBar from 'components/SearchBar';
import PageTitle from 'components/common/PageTitle';
import AddFolderButton from 'components/common/button/AddFolderButton';
import TabButton from 'components/common/button/TabButton';
import FolderHeader from 'components/common/header/FolderHeader';
import OptionBtns from 'components/folder/OptionBtns';
import FolderGridCard from 'components/folder/FolderGridCard';
import FloatButton from 'components/common/button/FloatButton';

const Styled = {
  NoLink: styled.div`
    height: 10rem;
    margin-top: 4rem;

    display: flex;
    justify-content: center;
    align-items: center;
  `,

  ButtonBox: styled.div`
    margin: 4rem 0 2.4rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
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
  const { data } = useUserFoldersQuery({ userId: 1 });
  let folderList = [{ id: 1, name: '전체' }, ...(data?.data?.data || [])];
  const [selectedTabName, setSelectedTabName] = useState('전체');
  const [selectedFolder, setSelectedFolder] = useState(1);

  const hasFolders = folderList.length !== 0;

  return (
    <>
      <PageTitle title="폴더" />
      <FolderHeader />
      <SearchBar />
      {!hasFolders ? (
        <Styled.NoLink>저장된 링크가 없습니다 🥲</Styled.NoLink>
      ) : (
        <>
          <Styled.ButtonBox>
            {/* 버튼박스(탭, 폴더추가 버튼 합치기) */}
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
          <FolderGridCard selectedFolder={selectedFolder} />
        </>
      )}
    </>
  );
}

export default FolderPage;
